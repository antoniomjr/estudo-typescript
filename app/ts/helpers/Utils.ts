import { Imprimivel, Negociacao } from "../models/index";

export function imprime(...objetos: Imprimivel[]) {
  objetos.forEach((objeto) => objeto.paraTexto());
}
