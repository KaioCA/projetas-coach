import { Component, OnInit } from '@angular/core';

import { VeiculosService } from '../service/veiculos.service';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  veiculos: Array<any>;

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.veiculosService.listar()
      .subscribe(response => this.veiculos = response);
  }

}
