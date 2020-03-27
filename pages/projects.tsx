import React from "react";

function Projects() {
  return (
    <div>
      <h1 className="color-3 project-titulo">P R O Y E C T O S</h1>
      <div className=" row-marig-zero featurette about-us">
        <div className="col-md-5 order-md-2 img-mark">
          <img
            src="/img/imgProj/edificio9000.jpg"
            className="d-block mark-img"
            alt="Edificio 9000 Miraflores UACh"
            width="400rem"
          />
        </div>
        <div className=" col-sm-6 order-md-1 mark-info project-description color-3">
          <div className="project-description">
            <h2 className="featurette-heading featurette-heading-logo">
              Miraflores UACh{" "}
              <span className="text-muted">Valdivia, Chile.</span>
            </h2>
            <p className="lead">
              Este es el projecto denominado <cite>Q+Riculos</cite>, en donde se hace un monitoreo del edificio 9000 (Pabellón docente).
          </p>
            <div>
              <button className="btn btn-light but">>
                Ver Cubículos
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;