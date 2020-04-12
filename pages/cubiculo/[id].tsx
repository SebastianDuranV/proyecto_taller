import { useRouter } from "next/router";
import { Button, Card, CardGroup } from "react-bootstrap";
import axios from "axios";

import { useEffect, useState } from "react";
import { Cubiculo } from "../../src/interfaces";
//import {onClickChange} from "../miraflores";

export default () => {
  const {
    query: { id }
  } = useRouter();

  const cubiculoId = id ?.toString() ?? "";
  //const cubiculoDisponibilidad = index ?.toString() ?? "";

  // para estableser el estado de cubiculo
  const [cubiculosState, setCubiculosState] = useState<Cubiculo[]>([]);

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

  return (
    <div>
      <CardGroup>
        <Card>
          <button className="btn btn-light but" onClick={() => onClickChange(cubiculoId, 0)}>
            Habilitar Cubiculo {cubiculoId}</button>
        </Card>
        <Card>
          <button className="btn btn-light but" onClick={() => onClickChange(cubiculoId, 1)}>
            Deshabilitar {cubiculoId}</button>
        </Card>
      </CardGroup>
      <hr className="featurette-divider" />
      <div className="welcome-mensage-cont ">
        <div className="welcome-mensage color-1">
          <h2> Estado del cubiculo {cubiculoId} : {}</h2>
          <a color="white">Actuazación : </a>
        </div>
      </div>
    </div>
  );
};


