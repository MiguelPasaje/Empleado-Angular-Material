import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listEmpleados: Empleado[] = [
    {
      nombreCompleto: 'luis martinez',
      telefono: '123456789',
      correo: 'luis@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },
    {
      nombreCompleto: 'luis martinez',
      telefono: '123456789',
      correo: 'luis@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },{
      nombreCompleto: 'luis martinez',
      telefono: '123456789',
      correo: 'luis@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },{
      nombreCompleto: 'luis martinez',
      telefono: '123456789',
      correo: 'luis@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },{
      nombreCompleto: 'luis martinez',
      telefono: '123456789',
      correo: 'luis@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },{
      nombreCompleto: 'luis martinez',
      telefono: '123456789',
      correo: 'luis@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },
  ];

  constructor() {}

  getEmpleados(){
    return this.listEmpleados.slice()
  }
}
