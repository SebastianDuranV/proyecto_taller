import React from "react";

//import logoOscuro from '../style/img/logotipo_oro.png'
//import logoBlanco from '../style/img/logotipo_blanco.png'

function Carousel(props) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner carousel-center">
        <div className="carousel-item active ">
          <img
            src="/img/carousel/sala_1.jpg"
            className="d-block images "
            alt="sala"
          />
          <div className="carousel-caption d-md-block primero">
            <div className="welcome-mensage-cont ">
              <div className="welcome-mensage color-1">
                <h1> Bienvenido a WIDESPACE</h1>
                <h2> Un lugar para organizar tu espacio y tiempo</h2>
                <div className="welcome-button">
                  <button type="button" className="btn btn-light but">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/img/carousel/sala_2.jpg"
            className="d-block images"
            alt="sala"
          />
          <div className="carousel-caption  d-md-block segundo">
            <div className="welcome-mensage-cont ">
              <div className="welcome-mensage color-3">
                <img
                  className="img-logotipo"
                  src="./img/logotipo_coloresOficiales/logotipo_blanco.png"
                  alt="widespace"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/img/carousel/sala_3.jpg"
            className="d-block images"
            alt="sala"
          />
          <div className="carousel-caption d-md-block tercero">
            <div className="welcome-mensage-cont ">
              <div className="welcome-mensage color-2 ">
                <h1> Optimiza tu TIEMPO </h1>
                <h2> "Siempre hay tiempo para todo"</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;

/**<div STYLE="position:absolute; top:2rem; left:2rem; visibility:visible z-index:1">
                        <img src={logoBlanco} width="300px" alt="widesapce" />
                    </div> */
