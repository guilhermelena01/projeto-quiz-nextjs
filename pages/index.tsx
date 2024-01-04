import Botao from "@/components/Botao";
import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostasModel from "@/model/respostas";
import { useState } from "react";

const questaoMock =
    new QuestaoModel(1, 'Melhor cor?', [
        RespostasModel.errada('Verde'),
        RespostasModel.errada('Vermelha'),
        RespostasModel.errada('Azul'),
        RespostasModel.certa('Preta')
    ])

export default function Home() {

    const [questao, setQuestao] = useState(questaoMock)


    function respostaFornecida(indice: number) {
        console.log(indice);
        setQuestao(questao.responderCom(indice))
    }
    function tempoEsgotado() {
        if (questao.naoRespondida) {
            setQuestao(questao.responderCom(-1))
        }
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Questao valor={questao}
                tempoPraResposta={5}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={tempoEsgotado}
            />
            <Botao texto="Teste" />
        </div>

    )
}
