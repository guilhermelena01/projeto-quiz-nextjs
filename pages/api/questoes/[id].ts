// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const idSelecionado = +req.query.id!

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0]
        const obj = questaoSelecionada.responderCom(0).toObject()
        res.status(200).json(obj)
    } else {
        res.status(204).send('Conteúdo não encontrado')
    }

}
