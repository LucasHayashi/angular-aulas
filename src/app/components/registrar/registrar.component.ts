import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormDeactivate } from 'src/app/interfaces/iform-deactivate';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements IFormDeactivate {
  constructor(private formBuilder: FormBuilder) {}

  formRegister = this.formBuilder.group({
    nome: [''],
    email: [''],
    senha: [''],
  });

  possuiAlteracoes(): boolean {
    if ( this.formRegister.dirty ) {
      return confirm("Deseja realmente sair desta página?");
    }
    return true;
  }
}
