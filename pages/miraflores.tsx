import axios from "axios";
import { useEffect, useState } from "react";

import { Cubiculo } from "../src/interfaces";

//import cubiculos from "../src/const/Cubiculos.json";
var id_nombre: String;
var Id_disponibilidad: 0 | 1 | 2;
var id_updatedAt: Date;

function renderCubiculo({
  cubiculo: { _id, disponibilidad, label, updatedAt },
  onClickChange,
  onClickChange_data,
  //id_nombre
  getId_label
}: {
  //id_nombre: String;
  getId_label: (id: string) => String;
  cubiculo: Cubiculo;
  onClickChange: (id: string, disponibilidad: number) => void;
  onClickChange_data: (label: String, id: string, disponibilidad: 0 | 1 | 2, updatedAt: Date) => String;
}) {
  //Recordar eliminar esto
  console.log(label);
  console.log(_id);

  if (disponibilidad === 1) {
    return (
      <div
        className="Cubiculo"
        id="disponible"
        key={_id}
        //onClick={() => onClickChange(_id, (disponibilidad + 1) % 3)}
        onClick={() => onClickChange_data(label, _id, disponibilidad, updatedAt)}
      >
        <h1>{label}</h1>
        <p>Disponible</p>
      </div>
    );
  } else if (disponibilidad === 0) {
    return (
      <div
        className="Cubiculo"
        id="ocupado"
        key={_id}
        //onClick={() => onClickChange(_id, (disponibilidad + 1) % 3)}
        onClick={() => onClickChange_data(label, _id, disponibilidad, updatedAt)}
      >
        <h1>{label}</h1>
        <p>Ocupado</p>
      </div>
    );
  }
  return (
    <div
      className="Cubiculo"
      id="deshabilitado"
      key={_id}
      //onClick={() => onClickChange(_id, (disponibilidad + 1) % 3)}
      onClick={() => onClickChange_data(label, _id, disponibilidad, updatedAt)}

    >
      <h1>{label}</h1>
      <p>Deshabilitado</p>
    </div>
  );
}
export default () => {
  const [cubiculosState, setCubiculosState] = useState<Cubiculo[]>([]);

  const actualizarCubiculo = async (
    cubiculoId: string,
    disponibilidad: 0 | 1 | 2
  ) => {
    axios
      .post("/api/editCubiculoDisponibilidad", {
        cubiculo: cubiculoId,
        disponibilidad
      })
      .then(response => {
        const cubiculoData = response.data;
        setCubiculosState(
          cubiculosState.map(cubiculo => {
            if (cubiculo._id === cubiculoData._id) {
              cubiculo.disponibilidad = disponibilidad;
            }
            return cubiculo;
          })
        );
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    axios.get("/api/cubiculos?project=miraflores").then(response => {
      setCubiculosState(response.data);
    });
  }, []);

  const onClickChange = (id: string, disponibilidad: 0 | 1 | 2) => {
    setCubiculosState(
      cubiculosState.map(cubiculo => {
        if (cubiculo._id === id) {
          cubiculo.disponibilidad = disponibilidad;
        }
        return cubiculo;
      })
    );
  };

  // retornar el data del cubiculo
  const onClickChange_data = (label: String, id: string, disponibilidad: 0 | 1 | 2, updatedAt: Date) => {
    setCubiculosState(
      cubiculosState.map(cubiculo => {
        if (cubiculo._id === id) {
          cubiculo.disponibilidad = cubiculo.disponibilidad;
        }
        return cubiculo;
      })
    );
    id_updatedAt = updatedAt;
    Id_disponibilidad = disponibilidad;
    id_nombre = label;
    console.log(id_nombre);
    console.log("onClick");
    return label;
  };

  function getId_label() {

    console.log(id_nombre);
    console.log("??")
    return id_nombre
  }

  function getId_disponibilidad() {
    if (Id_disponibilidad === 1) {
      return "Disponible"
    } else if (Id_disponibilidad === 0) {
      return "No Disponible"
    } else if (Id_disponibilidad === 2) {
      return "Deshabilitado"
    }
    return " --- ";
  }

  function getId_updatedAt() {
    return id_updatedAt;
  }

  //const id_nombre: String = "";

  return (
    <div>
      <hr className="featurette-divider" />
      <h1>Lista de cubiculos de miraflores</h1>
      <div id="ListaCubiculos">
        {cubiculosState.map(cubiculo =>
          renderCubiculo({ cubiculo, onClickChange, onClickChange_data, getId_label })
        )}
      </div>
      <div>
        <hr className="featurette-divider" />
        <div className="welcome-mensage-cont ">
          <div className="welcome-mensage color-1">
            <h2> Estado del cubiculo {getId_label()} : {
              getId_disponibilidad()
            }
            </h2>
            <a color="white">Actuazación : {getId_updatedAt()}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
