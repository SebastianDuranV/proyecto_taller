import Carousel from "../src/client/components/carousel";

const Index = () => {
  return (
    <div>
      <Carousel />
      <div className="container marketing">
        <div className="row-marig-zero featurette about-us">
          <div className="col-md-9 order-md-2 mark-info about-description">
            <h2 className="featurette-heading featurette-heading-logo color-letra-3">
              Tu ESPACIO.{" "}
              <span className="text-muted">Organizalo tu mismo.</span>
            </h2>
            <p className="lead">
              WIDESPACE ctd. fue establecido en 1994 que es una empresa de alta
              tecnología nacional especializada en la investigación y la
              fabricación de las herramientas diamantadas de las herramientas
              eléctricas y de las herramientas del TCT.
            </p>
          </div>
          <div className="col-md-3 order-md-1 img-mark">
            <img
              src="./img/representatividad/espacio_representativo.svg"
              className="image-size mark-img"
              alt="espacio"
            />
          </div>
        </div>
      </div>

      <div className="container marketing">
        <div className="row-marig-zero featurette about-us">
          <div className="col-md-9 order-md-1 mark-info about-description">
            <h2 className="featurette-heading featurette-heading-logo color-letra-2" >
              Organiza tu TIEMPO.{" "}
              <span className="text-muted">¡optimizalo!.</span>
            </h2>
            <p className="lead">
              WIDESPACE ctd. fue establecido en 1994 que es una empresa de alta
              tecnología nacional especializada en la investigación y la
              fabricación de las herramientas diamantadas de las herramientas
              eléctricas y de las herramientas del TCT.
            </p>
          </div>
          <div className="col-md-3 order-md-2 img-mark">
            <img
              src="./img/representatividad/tiempo_representativo.svg"
              className="image-size mark-img"
              alt="tiempo"

            />
          </div>
        </div>
      </div>

      <div className="container marketing">
        <div className="row-marig-zero featurette about-us">
          <div className="col-md-9 order-md-2 mark-info about-description">
            <h2 className="featurette-heading featurette-heading-logo color-letra-1">
              Evita malos ratos.{" "}
              <span className="text-muted">Prioriza tus tiempo con nosotros</span>
            </h2>
            <p className="lead">
              WIDESPACE ctd. fue establecido en 1994 que es una empresa de alta
              tecnología nacional especializada en la investigación y la
              fabricación de las herramientas diamantadas de las herramientas
              eléctricas y de las herramientas del TCT.
            </p>
          </div>
          <div className="col-md-3 order-md-1 img-mark">
            <img
              src="./img/representatividad/importante_representativo.svg"
              className="mark-img image-size"
              alt="importante"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
