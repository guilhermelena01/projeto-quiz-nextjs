import styles from "@/styles/Resposta.module.css"
import RespostasModel from "@/model/respostas"

interface Respostaprops {
    valor: RespostasModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: Respostaprops) {
    const resposta = props.valor

    return (
        <div className={styles.resposta} onClick={() => { props.respostaFornecida(props.indice) }}>
            <div className={styles.conteudoResposta}>
                {/* <div className={styles.frente}>
                    <div className={styles.letra}
                        style={{ backgroundColor: props.corFundoLetra }}
                    >
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div> */}
                <div className={styles.verso}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div> ) : (
                        <div className={styles.errada}>
                            <div>A resposta informada está incorreta...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}