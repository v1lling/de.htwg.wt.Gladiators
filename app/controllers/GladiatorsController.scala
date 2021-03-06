package controllers

import scala.collection.mutable.HashSet
import scala.collection.mutable.ListBuffer
import scala.swing.Reactor
import scala.util.Failure
import scala.util.Success
import scala.util.Try

import de.htwg.se.gladiators.aview.Tui
import de.htwg.se.gladiators.controller.BaseImplementation.Controller
import de.htwg.se.gladiators.controller.BaseImplementation.ControllerJson._
import de.htwg.se.gladiators.controller.GameState.NamingPlayerOne
import de.htwg.se.gladiators.controller.GameState.NamingPlayerTwo
import de.htwg.se.gladiators.controller.GameState.TurnPlayerOne
import de.htwg.se.gladiators.controller.GameState.TurnPlayerTwo
import de.htwg.se.gladiators.util.Configuration
import de.htwg.se.gladiators.util.Coordinate
import de.htwg.se.gladiators.util.Events
import de.htwg.se.gladiators.util.Events._
import de.htwg.se.gladiators.util.json.CommandJson._
import de.htwg.se.gladiators.util.json.CoordinateJson._
import de.htwg.se.gladiators.util.json.EventsJson._
import com.mohiva.play.silhouette.api.Silhouette
import com.mohiva.play.silhouette.api.actions.SecuredRequest
import _root_.controllers.WebSockets.GladiatorWebSocketActor
import _root_.controllers.WebSockets.SpectatorWebSocketActor
import akka.actor.ActorSystem
import akka.actor._
import akka.http.scaladsl.model.HttpHeader
import akka.http.scaladsl.model.HttpResponse
import akka.http.scaladsl.model.ResponseEntity
import akka.http.scaladsl.model.StatusCode
import akka.http.scaladsl.model.headers.RawHeader
import akka.stream.Materializer
import javax.inject._
import play.api._
import play.api.libs.json._
import play.api.libs.streams.ActorFlow
import play.api.mvc.WebSocket.MessageFlowTransformer
import play.api.mvc._
import utils.auth.DefaultEnv
@Singleton
class GladiatorsController @Inject() (
  cc: ControllerComponents,
  silhouette: Silhouette[DefaultEnv]
)(
  implicit
  system: ActorSystem,
  mat: Materializer
) extends AbstractController(cc) {

  val configuration = Configuration(5, 15)
  val controller = Controller(configuration)
  // todo: We need to initialize players to call boardToString
  // controller.namePlayerOne("one")
  // controller.namePlayerTwo("two")

  val jsonNotACommandError: Events = Events.ErrorMessage("Command could not be parsed")

  // Test if user is loggedIn. Responses implicitly with 303 if user is not logged in
  def signedIn = silhouette.SecuredAction { implicit request =>
    Ok(Json.toJson(request.identity))
  }

  def controllerToJson = silhouette.SecuredAction {
    Ok(Json.toJson(controller, None))
  }

  def processJsonCommand = Action(parse.json) { request: Request[JsValue] =>
    {
      readCommand(request.body) match {
        case Failure(exception) => BadRequest(Json.toJson(jsonNotACommandError))
        case Success(command) => controller.inputCommand(command) match {
          case message: ErrorMessage => BadRequest(Json.toJson(message: Events))
          case event: Events => Ok(Json.toJson(controller, event))
        }
      }
    }
  }

  def gladiatorSelect = Action(parse.json) { position: Request[JsValue] =>
    Try(Coordinate((position.body \ "x").as[Int], (position.body \ "y").as[Int])) match {
      case Success(coordinate) => {
        val gladiatorInfo = Json.obj(
          "gladiatorAtCoordinate" -> controller.tileOccupiedByCurrentPlayer(coordinate),
          "tilesAttack" -> controller.attackTiles(coordinate),
          "tilesMove" -> controller.moveTiles(coordinate)
        )
        Ok(Json.toJson(controller, gladiatorInfo))
      }
      case Failure(_) => BadRequest(Json.toJson(jsonNotACommandError))
    }
  }

  def socket = WebSocket.accept[JsValue, JsValue] { request =>
    ActorFlow.actorRef { out =>
      controller.gameState match {
        case NamingPlayerOne | NamingPlayerTwo => {
          println("connecting player")
          Props(GladiatorWebSocketActor(out, controller))
        }
        case _ => {
          println("connecting spectator")
          Props(SpectatorWebSocketActor(out, controller))
        }
      }
    }
  }
}
