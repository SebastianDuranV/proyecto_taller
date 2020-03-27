import { Document, Schema } from "mongoose";

import { Cubiculo } from "../../interfaces";

export const CubiculoSchema = new Schema<Cubiculo & Document>({
  label: {
    type: String,
    required: true
  },
  disponibilidad: {
    type: Number,
    default: 1
  },
  project: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});
