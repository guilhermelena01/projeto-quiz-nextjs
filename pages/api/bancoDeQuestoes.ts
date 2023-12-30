import QuestaoModel from "@/model/questao";
import RespostasModel from "@/model/respostas";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?',[
        RespostasModel.errada('Abelha'),
        RespostasModel.errada('Barata'),
        RespostasModel.errada('Pulga'),
        RespostasModel.certa('Barbeiro')
    ]),

    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e no Nordeste como jerimum?',[
        RespostasModel.errada('Caju'),
        RespostasModel.errada('Coco'),
        RespostasModel.errada('Chuchu'),
        RespostasModel.certa('Abóbora')
    ])
]

export default questoes