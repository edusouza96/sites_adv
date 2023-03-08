/**
 * Buscar órgão
 * Nesta requisição exibe uma tabela em console para saber os IDs das lotações
 */
let url_ = 'https://portaldatransparencia.gov.br/popup/servidores/orgao-lotacao/resultado?paginacaoSimples=false&tamanhoPagina=50&offset=0&direcaoOrdenacao=asc&colunaOrdenacao=descricao&colunasSelecionadas=selecionar%2Cid%2Ctipo%2Ccodigo%2Cdescricao&tipoEstruturaAdministrativa=ORGAO_SUPERIOR&_=1678294817994';
$.get(url_)
    .done(function(resposta){
        console.table(resposta.data);
    });

/**
 * Buscar Servidores
 * Traz os dados em string para que possa copiar e salvar em csv (valores separado por virgula)
 */
let lotacao = 'OR21300';
let t = 'Yai9K2pWEkN9881gBCjp';
let underline = '1678209379948';
let url = "https://portaldatransparencia.gov.br/servidores/consulta/resultado?paginacaoSimples=false&tamanhoPagina=100&offset=0&direcaoOrdenacao=asc&colunaOrdenacao=nome&orgaosServidorLotacao="+lotacao+"&situacao=2%2C1&colunasSelecionadas=detalhar%2Ctipo%2Ccpf%2Cnome%2CorgaoServidorLotacao%2Cmatricula%2Csituacao%2Cfuncao%2Ccargo%2Cquantidade&t="+t+"&_="+underline+"&";
$.get(url)
    .done(function(resposta){
        let dados = resposta.data;
        let print = ['atividade,cargo,cpf,cpfInstPensao,cpfRepresentanteLegal,funcao,idComFlagExisteDetalhamentoServidor,licenca,matricula,nome,nomeInstPensao,nomeRepresentanteLegal,numRanking,orgaoServidorExercicio,orgaoServidorLotacao,orgaoSuperiorServidorExercicio,orgaoSuperiorServidorLotacao,quantidade,situacao,tipo,unidadeOrganizacionalServidorExercicio,unidadeOrganizacionalServidorLotacao'];
        dados.map(function(item){
            print.push(
                item.atividade + ','+
                item.cargo + ','+
                item.cpf + ','+
                item.cpfInstPensao + ','+
                item.cpfRepresentanteLegal + ','+
                item.funcao + ','+
                item.idComFlagExisteDetalhamentoServidor + ','+
                item.licenca + ','+
                item.matricula + ','+
                item.nome + ','+
                item.nomeInstPensao + ','+
                item.nomeRepresentanteLegal + ','+
                item.numRanking + ','+
                item.orgaoServidorExercicio + ','+
                item.orgaoServidorLotacao + ','+
                item.orgaoSuperiorServidorExercicio + ','+
                item.orgaoSuperiorServidorLotacao + ','+
                item.quantidade + ','+
                item.situacao + ','+
                item.tipo + ','+
                item.unidadeOrganizacionalServidorExercicio + ','+
                item.unidadeOrganizacionalServidorLotacao
            )
        });
        console.log(print.join("\n"));
    }.bind(this));