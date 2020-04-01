import { useRouter } from "next/router";
import { Button, Card, CardGroup } from "react-bootstrap";

export default () => {
  const {
    query: { id }
  } = useRouter();

  const cubiculoId = id?.toString() ?? "";


  return (
    <CardGroup className="listaBotones">
      <Card>
        <Button className="botonOcupar">Voy entrando al cubículo {cubiculoId}</Button>
      </Card>
      <Card>
        <Button className="botonDesocupar">Voy saliendo del cubículo {cubiculoId}</Button>
      </Card>
    </CardGroup>
  );
};