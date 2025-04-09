import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-practicando',
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCardModule,
            MatSelectModule,
            MatOptionModule,
            ReactiveFormsModule
          ],
  templateUrl: './practicando.component.html',
  styleUrl: './practicando.component.scss'
})
export class PracticandoComponent {

  constructor(
  ){}

  private _fb = inject(FormBuilder);

  public pacienteForm:FormGroup  = this._fb.group({
      tipoDoc: ['0'],           // Valor por defecto: DNI
      nroDoc: [''],
      hc: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: [''],
      fechaNacimiento: [''],
      edad: [''],
      sexo: ['']
  });
}
