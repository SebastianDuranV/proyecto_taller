import express from "express";

import cubiculosJSON from "../../src/const/Cubiculos.json";
import { common } from "../../src/server/middleware";
import { CubiculoModel } from "../../src/server/models";
import { validation } from "../../src/server/utils/validation";

const app = express();

app.use(common);

app.use(
  validation(
    {
      project: {
        isLength: {
          options: {
            min: 2,
            max: 20
          },
          errorMessage: "Largo del nombre del proyecto invalido"
        },
        isString: true,
        errorMessage: 'Especificar "project"'
      }
    },
    ["query"]
  ),
  async (req, res) => {
    const project: string = req.query.project;
    await CubiculoModel.create(
      cubiculosJSON.map((cubiculo, index) => {
        return {
          label: cubiculo.id,
          project: "miraflores",
          index
        };
      })
    );
    res.send(
      await CubiculoModel.find({
        project
      })
    );
  }
);

export default app;
