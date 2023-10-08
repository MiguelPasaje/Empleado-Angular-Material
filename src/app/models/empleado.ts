export class Empleado {
  nombreCompleto: string;
  telefono: string;
  correo: string;
  fechaIngreso: string;
  estadoCivil: string;
  sexo: string;

  constructor(
    nombreCompleto: string,
    telefono: string,
    correo: string,
    fechaIngreso: string,
    estadoCivil: string,
    sexo: string
  ) {
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
    this.correo = correo;
    this.fechaIngreso = fechaIngreso;
    this.estadoCivil = estadoCivil;
    this.sexo = sexo;
  }
}
