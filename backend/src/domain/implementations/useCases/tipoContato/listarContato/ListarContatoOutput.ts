import { TipoContato } from '../../../entity/objectValues/TipoContato';

export class ListarContatoOutput {
  public idContato: string;
  public descricaoContato: string;
  constructor(pTipoContato: TipoContato) {
    this.idContato = pTipoContato.idContato;
    this.descricaoContato = pTipoContato.descricaoContato;
  }
}