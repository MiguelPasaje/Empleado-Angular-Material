import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmpleadoComponent {
  estadosCiviles: any[] = ['sotero', 'Casado', 'Divorciado'];

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private route: Router, private snackBar: MatSnackBar
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['',[Validators.required,Validators.maxLength(20)]],
      correo: ['',[Validators.required,Validators.email]],
      fechaIngreso: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      estadoCivil: ['',[Validators.required]],
      sexo: ['',[Validators.required]],
    });
  }

  guardarEmpleado() {
    const empleado: Empleado = {
      nombreCompleto: this.myForm.get('nombreCompleto')?.value,
      correo: this.myForm.get('correo')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('telefono')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value,
    };
    this.empleadoService.agregarEmpleado(empleado);
    this.snackBar.open('empleado registrado','Ok',{duration:3000})
    this.route.navigate(['/'])
  }
}
