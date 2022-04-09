import React from "react";
import Bloc from "./bloc";
import { Container } from "react-bootstrap";

class InfoPratique extends React.Component {
  render() {
    return (
      <Bloc
        image={process.env.PUBLIC_URL + "/assets/background/runner.jpg"}
        id="infopratiques"
      >
        {" "}
        <div
          className="bloc-content"
          style={{ color: "white" }}
          id="infopratique"
        >
          <div className="my-5">
            <h2>
              <strong>INFORMATIONS PRATIQUES</strong>
            </h2>
            <h5>
              Ces informations sont succeptible de varier légérement jusqu'à 1
              mois avant la course
            </h5>
          </div>
          <Container fluid>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <i className="fa fa-home fa-5x"></i>
                <h3>Village départ</h3>
                <h5 className="count-title font-serif">
                  Centre Ville de Compiègne
                  <br />
                  Ouverture : 12h30
                </h5>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <div className="count-item mb-sm-40">
                  <div className="count-icon">
                    <i className="fa fa-flag-checkered fa-5x"></i>
                  </div>
                  <h3>Départs</h3>
                  <h5 className="count-title font-serif">
                    Marche : 14h30 <br />
                    Course : 15h30
                  </h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <div className="count-item mb-sm-40">
                  <div className="count-icon">
                    <i className="fa fa-bus fa-5x"></i>
                  </div>
                  <h3>Navettes</h3>
                  <h5 className="count-title font-serif">
                    Retour Compiègne : <br />
                    17h30 - 20h30
                  </h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <div className="count-item mb-sm-40">
                  <div className="count-icon">
                    <i className="fa fa-money fa-5x"></i>
                  </div>
                  <h3>Tarifs</h3>
                  <h5 className="count-title font-serif">
                    Cotisants BDE-UTC : 14€ <br />
                    Extérieurs : 16€
                  </h5>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <i className="fa fa-road fa-5x"></i>
                <h3>Longueur de la course</h3>
                <h5 className="count-title font-serif">
                  10KM
                  <br />
                  Bord de l'Oise
                </h5>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <i className="fa fa-beer fa-5x"></i>
                <h3>Stands</h3>
                <h5 className="count-title font-serif">
                  4 stands pour vous ravitailler
                  <br />
                </h5>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <i className="fa fa-cutlery fa-5x"></i>
                <h3>Dégustation</h3>
                <h5 className="count-title font-serif">
                  Le long du parcours et à l'arrivée
                </h5>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 count my-5">
                <i className="fa fa-male fa-5x"></i>
                <h3>Participant</h3>
                <h5 className="count-title font-serif">500 places</h5>
              </div>
            </div>
          </Container>
        </div>
      </Bloc>
    );
  }
}

export default InfoPratique;
