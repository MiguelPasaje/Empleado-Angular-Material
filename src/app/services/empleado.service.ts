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
    },
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
    },
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
    },
  ];

  constructor() {}

  getEmpleados() {
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleados.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleados.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleados[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleados[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleados[idEmpleado].correo = empleado.correo;
    this.listEmpleados[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleados[idEmpleado].telefono = empleado.telefono;
    this.listEmpleados[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleados[idEmpleado].sexo = empleado.sexo;
  }
}
