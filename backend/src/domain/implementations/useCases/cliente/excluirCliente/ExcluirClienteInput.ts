import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class ExcluirClienteInput {

  public identificacao: string;

  constructor(pData: EntrypointData) {

    const identificacaoValidador = ValidadorDados.iniciar(pData.body?.identificacao, 'body.identificacao').obrigatorio().string();
    if (identificacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "identificacao": ${identificacaoValidador.getErro()}`);
    }
    this.identificacao = pData.body.identificacao;
  }
}