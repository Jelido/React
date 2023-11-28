import { Lista, Espacamento, Baixo, ImagemBackground } from './style'
import Img1 from '../../img/wave.png'

export function Footer(){
    return(
        <>
        <Baixo>
            <Lista><strong><li>Destino</li></strong>
            <Espacamento><strong><li>Ofertas</li></strong></Espacamento>
            <strong><li>Contato</li></strong>
            </Lista>
        </Baixo>
        
        </>

    )
}