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
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostasModel.errada('Manada'),
        RespostasModel.errada('Alcateia'),
        RespostasModel.errada('Rebanho'),
        RespostasModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostasModel.errada('Equilátero'),
        RespostasModel.errada('Isóceles'),
        RespostasModel.errada('Trapézio'),
        RespostasModel.certa('Escaleno'),
    ]),
]

export default questoes