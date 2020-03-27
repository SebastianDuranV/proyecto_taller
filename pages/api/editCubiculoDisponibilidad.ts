import express from "express";

import { common } from "../../src/server/middleware";
import { CubiculoModel } from "../../src/server/models";
import { validation } from "../../src/server/utils/validation";

const app = express();

app.use(common);

app.use(
  validation({
    cubiculo: {
      isMongoId: true,
      errorMessage: "Ingresar id valido"
    }
    // validacion disponibilidad
  }),
  async (req, res) => {
    const cubiculoId: string = req.body.cubiculo;
    // const disponibilidad: string = req.body.disponibilidad;
    const cubiculo = await CubiculoModel.findById(cubiculoId);

    cubiculo.disponibilidad = 2;
    // modificar cubiculo segun disponibilidad

    res.send(
      //cubiculo
      {}
    );
  }
);

export default app;
