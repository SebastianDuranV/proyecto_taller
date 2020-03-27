import { useRouter } from "next/router";
import { Button, Card, CardGroup } from "react-bootstrap";

export default () => {
  const {
    query: { id }
  } = useRouter();

  const cubiculoId = id?.toString() ?? "";

  return (
    <CardGroup>
      <Card>
        <Button>Habilitar Cubiculo {cubiculoId}</Button>
      </Card>
      <Card>
        <Button>Deshabilitar {cubiculoId}</Button>
      </Card>
    </CardGroup>
  );
};
