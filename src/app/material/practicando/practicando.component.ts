import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

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
            ReactiveFormsModule,
            MatIconModule,
            MatTableModule,
            CommonModule,
            MatButtonModule
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
      edad: [{ value: '', disabled: true }],
      sexo: [''],
      departamentoCliente: ['15'],
      provinciaCliente: ['01'],
      distritoCliente: [''],
      direcCliente:[''],
      mailCliente: [''],
      phones: this._fb.array([])
  });

  get phones(): FormArray {
    return this.pacienteForm.get('phones') as FormArray;
  }

  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ['numero', 'descripcion', 'acciones'];
  dataSource = new MatTableDataSource<FormGroup>();

  terminoBusqueda: any;

  agregarTelefono() {
    // const nuevoTelefono = this._fb.group({
    //   numero: ['', Validators.required],
    //   descripcion: ['', Validators.required]
    // });
    // this.phones.push(nuevoTelefono);
    // this.dataSource.data = this.phones.controls as FormGroup[]; // importante
    // this.table.renderRows(); // forza el refresco visual

    if (this.nuevoNumero.invalid || this.nuevaDescripcion.invalid) {
      this.nuevoNumero.markAsTouched();
      this.nuevaDescripcion.markAsTouched();
      return;
    }
  
    const nuevoTelefono = this._fb.group({
      numero: this.nuevoNumero.value,
      descripcion: this.nuevaDescripcion.value
    });
    this.phones.push(nuevoTelefono);
    this.nuevoNumero.reset();
    this.nuevaDescripcion.reset();
    this.dataSource.data = this.phones.controls as FormGroup[]; // importante
    this.table.renderRows(); // forza el refresco visual

  }

  agregarTelefonoDesdeInput() {
  
    if (this.nuevoNumero.invalid || this.nuevaDescripcion.invalid) {
      this.nuevoNumero.markAsTouched();
      this.nuevaDescripcion.markAsTouched();
      return;
    }
  
    const nuevoTelefono = this._fb.group({
      numero: this.nuevoNumero.value,
      descripcion: this.nuevaDescripcion.value
    });
    this.phones.push(nuevoTelefono);
    this.nuevoNumero.reset();
    this.nuevaDescripcion.reset();
    //this.dataSource.data = this.phones.controls as FormGroup[]; // importante
    //this.table.renderRows(); // forza el refresco visual
  }
  
  eliminarTelefono(index: number) {
    this.phones.removeAt(index);
    //this.dataSource.data = this.phones.controls as FormGroup[];
    //this.table.renderRows();
  }

  nuevoNumero = this._fb.control('', [Validators.required]);
  nuevaDescripcion = this._fb.control('', [Validators.required]);







}
