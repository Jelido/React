import { Paragrafos,ImagemUm, Destino, Destaque, Pstyle, Espacamento, Opacidade, Cima, DivInterna, } from './style'
import Img1 from '../../img/img1.jpg'


export function Main(){
    return(
        <>
            <Cima>

            <DivInterna>
            <ImagemUm src={Img1}></ImagemUm>
            <Paragrafos>O seu <Destino>destino</Destino> pode estar aqui...</Paragrafos>
            <Espacamento><Pstyle>Aqui você encontra uma seleção de <Destaque>pacotes completos</Destaque> para as suas férias!</Pstyle>
            <Pstyle>No <Opacidade>ConnectFlight</Opacidade> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, 
          e até seguro viagem com <Destaque>preços arrasadores!</Destaque></Pstyle></Espacamento>
            <Pstyle>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</Pstyle>
            </DivInterna>
            </Cima>
        </>

    )
}