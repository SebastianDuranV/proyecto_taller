import { useRouter } from "next/router";
import { Button, Card, CardGroup } from "react-bootstrap";

import { Cubiculo } from "../../src/interfaces";
//import {onClickChange} from "../miraflores";

export default () => {
  const {
    query: { id }
  } = useRouter();

  const cubiculoId = id ?.toString() ?? "";
  //const cubiculoDisponibilidad = index ?.toString() ?? "";

  return (
    <div>
      <CardGroup>
        <Card>
          <Button>Habilitar Cubiculo {cubiculoId}</Button>
        </Card>
        <Card>
          <Button>Deshabilitar {cubiculoId}</Button>
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


