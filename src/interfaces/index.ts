export interface User {
  _id: string;
  email: string;
  password: string;
}

export interface Cubiculo {
  _id: string;
  label: string;
  /**
   * 0 = ocupado;
   * 1 = disponible;
   * 2 = deshabilitado;
   *
   * @type {(0 | 1 | 2)}
   * @memberof Cubiculo
   */
  disponibilidad: 0 | 1 | 2;
  project: string;
  index: number;
  updatedAt: Date;
  createdAt: Date;
}
