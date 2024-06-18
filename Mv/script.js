const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Os conflitos socioambientais são disputas relacionadas ao acesso e uso de recursos naturais, destacando a justiça ambiental e a desigualdade na distribuição dos impactos ambientais.",
        alternativas: [
            {
                texto: "Origem dos Conflitos Socioambientais",
                afirmacao: "Os conflitos socioambientais são causados por diferentes formas de uso dos recursos naturais, particularmente por atores sociais mais fortes, que subtraem bens de uso comum das populações tradicionais que os utilizam. Além disso, os impactos ambientais gerados por determinados modos de produção também contribuem para esses conflitos, direcionando seus rejeitos para os bens naturais utilizados pelas populações tradicionais"
            },
            {
                texto: "Justiça Ambiental",
                afirmacao: "A justiça ambiental é um conceito que aborda a distribuição e a preservação dos recursos naturais, considerando a qualidade de vida e a sustentabilidade. Ela surge como uma necessidade de trabalhar a questão do ambiente não apenas em termos de preservação, mas também de justiça social. A justiça ambiental é um instrumento para a permanência e atuação dos grupos sociais mais fragilizados, que são afetados negativamente pela exploração dos recursos naturais"
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Exemplos de Conflitos Socioambientais",
                afirmacao: "Exemplos de conflitos socioambientais incluem a instalação de parques eólicos, que podem afetar comunidades tradicionais e dividir as opiniões sobre o modelo de desenvolvimento. Outros exemplos incluem a expansão do agronegócio, que pode gerar conflitos com indígenas e outros grupos que reivindicam direitos territoriais"
            },
            {
                texto: "Soluções",
                afirmacao: "Para resolver esses conflitos, é necessário promover a justiça social e ambiental. Isso pode ser alcançado através da democratização das decisões sobre a produção socioespacial dos territórios, problematizando os consensos que nos são empurrados diariamente, como o consenso do desenvolvimento sustentável. Além disso, é fundamental considerar os pontos de vista dos povos atingidos e lutar por equidade, alternativas de desenvolvimento e a preservação do meio ambiente"
            }
        ]
    },
]
    
let atual = 0;
let perguntaAtual;
let historiaFinal = "Como conclusão, ";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();