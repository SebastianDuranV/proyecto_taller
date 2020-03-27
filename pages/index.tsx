import Carousel from "../src/client/components/carousel";

const Index = () => {
  return (
    <div>
      <Carousel />
      <div>
        <div className="row-marig-zero featurette about-us">
          <div className="col-md-7 order-md-2 mark-info about-description">
            <h2 className="featurette-heading featurette-heading-logo">
              Oh yeah, it's that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              WIDESPACE ctd. fue establecido en 1994 que es una empresa de alta
              tecnología nacional especializada en la investigación y la
              fabricación de las herramientas diamantadas de las herramientas
              eléctricas y de las herramientas del TCT.
            </p>
          </div>
          <div className="col-md-5 order-md-1 img-mark">
            <img
              src="/img/logotipo_oro.png"
              className="mark-img"
              alt="widespace"
              width="450rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
