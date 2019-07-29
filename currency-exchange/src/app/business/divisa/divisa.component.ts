import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DivisaService } from 'src/app/services/divisa.service';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {

  divisaForm: FormGroup;

  cantidadEnteros = 10;
  cantidadDecimales = 4;

  separadorDecimales = '.';
  separadorEnteros = ',';

  monedaDivisa = '€';
  monedaCambio = '$';

  valorDivisa = 0;

  subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private divisaService: DivisaService
  ) { }

  ngOnInit() {
    this.divisaForm = this.formBuilder.group({
      valorDivisa: ['', Validators.required],
      cambioDivisa: []
    });
  }

  validarDecimales(e, valorInput) {
    if (this.validarTeclaPresionada(e)) {
      const POSICION_INICIAL_CURSOR = e.target.selectionStart;
      const OPRIMIO_TECLA_SEPARADOR = e.keyCode === 44 || e.keyCode === 46;
      const TECLA_PRESIONADA = OPRIMIO_TECLA_SEPARADOR ? this.separadorDecimales : e.key;

      let valor = valorInput;
      valor = this.concatenarTeclaValor(valor, TECLA_PRESIONADA, POSICION_INICIAL_CURSOR);
      return this.campoNumericoSistemaDecimales(valor);
    } else {
      return false;
    }
  }

  private validarTeclaPresionada(e: any) {
    return (e.charCode >= 48 && e.charCode <= 57) || e.charCode === 44 || e.charCode === 46;
  }

  private concatenarTeclaValor(valorActual: string, caracter: string, posicion: number) {
    return [valorActual.slice(0, posicion), caracter, valorActual.slice(posicion)].join('');
  }

  campoNumericoSistemaDecimales(numero) {
    let regexp = '^[\\d]{0,3}(separadorEnteros[\\d]{1,3})*(separadorDecimales[\\d]{0,cantidadDecimales})?$';
    regexp = regexp.replace('separadorEnteros', '\\' + this.separadorEnteros);
    regexp = regexp.replace('separadorDecimales', '\\' + this.separadorDecimales);
    regexp = regexp.replace('cantidadDecimales', this.cantidadDecimales + '');
    const expression = new RegExp(regexp);
    const res = expression.test(numero);
    return res;
  }

  calculate() {
    this.getCurrencies();
    this.unsubscribe();
    this.subscription = interval(600000).subscribe(timer => {
      this.getCurrencies();
    });
  }

  getCurrencies() {
    const fakeCurrency = {
      success: true,
      base: 'EUR',
      rates: {
        AED: 4.2825,
        USD: 1.11
      }
    };
    this.calculateCurrency(fakeCurrency.rates);
    this.divisaService.getCurrencies().subscribe(
      response => {
        if (response.success) {
          this.calculateCurrency(fakeCurrency.rates);
        }
      });
  }

  calculateCurrency(rates) {
    const value = this.divisaForm.value.valorDivisa;
    const numberValue = parseFloat(value.replace(/,/g, ''));
    const exchange = rates.USD * numberValue;
    this.divisaForm.controls['cambioDivisa'].setValue(exchange);
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

}
