import styles from "@/styles/Resposta.module.css"
import RespostasModel from "@/model/respostas"

interface Respostaprops{
    valor: RespostasModel
    indice: number
    letra: string
    corFundoLetra: string
}

export default function Resposta(props: Respostaprops) {
    const resposta = props.valor

    return (
        <div className={styles.resposta}>
            <div className={styles.conteudo}>
                <div className={styles.frente}>
                    <div className={styles.letra}
                    style={{ backgroundColor: props.corFundoLetra}}
                    >
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>

                </div>
            </div>
        </div>
    )
}