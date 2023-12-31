import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostasModel from "@/model/respostas";

export default function Home() {

    const questao = new QuestaoModel(1, 'Melhor cor?', [
        RespostasModel.errada('Verde'),
        RespostasModel.errada('Vermelha'),
        RespostasModel.errada('Azul'),
        RespostasModel.certa('Preta')
    ])
  return (
    <Questao valor={questao}/>
  )
}
