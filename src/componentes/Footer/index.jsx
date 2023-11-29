import { Lista, Espacamento, Baixo,} from './style'


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