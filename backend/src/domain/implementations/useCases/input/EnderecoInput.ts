import { ValidadorDados } from '@decisaosistemas/typescript-validador-dados';
import EntrypointData from '../../entity/EntryPointData';
import InformacaoNaoInfomada from '../../entity/errors/InformacaoNaoEncontrada';

export class EnderecoInput {

  public cep: string;

  public logradouro: string;

  public numero: string;

  public complemento?: string;

  public bairro: string;

  public cidade: string;

  public estado: string;

  public isPrincipal: boolean;

  constructor(pData: EntrypointData) {
    const logradouroValidador = ValidadorDados.iniciar(pData.body?.logradouro, 'body.logradouro').obrigatorio().string();
    const cepValidador = ValidadorDados.iniciar(pData.body?.cep, 'body.cep').obrigatorio().string();
    const numeroValidador = ValidadorDados.iniciar(pData.body?.numero, 'body.numero').obrigatorio().string();
    const complementoValidador = ValidadorDados.iniciar(pData.body?.complemento, 'body.complemento').string();
    const bairroValidador = ValidadorDados.iniciar(pData.body?.bairro, 'body.bairro').obrigatorio().string();
    const cidadeValidador = ValidadorDados.iniciar(pData.body?.cidade, 'body.cidade').obrigatorio().string();
    const estadoValidador = ValidadorDados.iniciar(pData.body?.estado, 'body.estado').obrigatorio().string();
    const isPrincipalValidador = ValidadorDados.iniciar(pData.body?.isPrincipal, 'body.isPrincipal').obrigatorio().boolean();
    if (logradouroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "logradouro": ${logradouroValidador.getErro()}`);
    }
    if (cepValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "cep": ${logradouroValidador.getErro()}`);
    }
    if (numeroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "numero": ${logradouroValidador.getErro()}`);
    }
    if (complementoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "complemento": ${logradouroValidador.getErro()}`);
    }
    if (bairroValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "bairro": ${logradouroValidador.getErro()}`);
    }
    if (cidadeValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "cidade": ${logradouroValidador.getErro()}`);
    }
    if (estadoValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "estado": ${logradouroValidador.getErro()}`);
    }
    if (isPrincipalValidador.estaValido() === false) {
      throw new InformacaoNaoInfomada(`O atributo "isPrincipal": ${logradouroValidador.getErro()}`);
    }

    this.cep = pData.body.cep;
    this.logradouro = pData.body.logradouro;
    this.numero = pData.body.numero;
    this.complemento = pData.body.complemento;
    this.bairro = pData.body.bairro;
    this.cidade = pData.body.cidade;
    this.estado = pData.body.estado;
    this.isPrincipal = pData.body.isPrincipal;
  }
}