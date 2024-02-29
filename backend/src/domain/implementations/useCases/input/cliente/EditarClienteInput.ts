import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../../entity/errors/InformacaoNaoEncontrada';

export class EditarClienteInput {

  public dataCadastro: Date;

  public situacao: boolean;

  constructor(pData: EntrypointData) {
    const dataCadastroValidador = ValidadorDados.iniciar(pData.body?.dataCadastro, 'body.dataCadastro').obrigatorio().date();
    const situacaoValidador = ValidadorDados.iniciar(pData.body?.situacao, 'body.situacao').obrigatorio().boolean();
    if (dataCadastroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "dataCadastro": ${dataCadastroValidador.getErro()}`);
    }
    if (situacaoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "situacao": ${dataCadastroValidador.getErro()}`);
    }

    this.dataCadastro = pData.body.dataCadastro;
    this.situacao = pData.body.situacao;
  }
}