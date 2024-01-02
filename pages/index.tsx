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

    function respostaFornecida (indice:number) {
        console.log(indice);
        setQuestao(questao.responderCom(indice))
        
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Questao valor={questao}
            respostaFornecida={respostaFornecida} />
        </div>

    )
}
