export class Empleado {
  nombreCompleto: string;
  telefono: string;
  correo: string;
  fechaIngreso: Date;
  estadoCivil: string;
  sexo: string;

  constructor(
    nombreCompleto: string,
    telefono: string,
    correo: string,
    fechaIngreso: Date,
    estadoCivil: string,
    sexo: string
  ) {
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
    this.correo = correo;
    this.fechaIngreso = new Date();
    this.estadoCivil = estadoCivil;
    this.sexo = sexo;
  }
}
