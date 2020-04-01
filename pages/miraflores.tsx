import axios from "axios";
import { useEffect, useState } from "react";

import { Cubiculo } from "../src/interfaces";

// import cubiculos from "../src/const/Cubiculos.json";

function renderCubiculo({
  cubiculo: { _id, disponibilidad, label },
  //onClickChange
}: {
  cubiculo: Cubiculo;
  //onClickChange: (id: string, disponibilidad: number) => void;
}) {
  if (disponibilidad === 1) {
    return (
      <div
        className="Cubiculo"
        id="disponible"
        key={_id}
      //onClick={() => onClickChange(_id, (disponibilidad + 1) % 3)}
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

  /*  const onClickChange = (id: string, disponibilidad: 0 | 1 | 2) => {
      setCubiculosState(
        cubiculosState.map(cubiculo => {
          if (cubiculo._id === id) {
            cubiculo.disponibilidad = disponibilidad;
          }
          return cubiculo;
        })
      );
    };*/
  return (
    <div id="ListaCubiculos">
      {cubiculosState.map(cubiculo => renderCubiculo({ cubiculo }))}
    </div>
  );
};
