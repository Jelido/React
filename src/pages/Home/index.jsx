import { Fragment } from "react"
import "./styles.css"

export  function Home(){
  return(
    <>
      <main>
        <div id="DivInterna">
          <img id="Imagem" src="img1.jpg"/>
          <h1>O seu próximo <span id="Destino">destino</span> pode estar aqui...</h1>
          <p className="p">Aqui você encontra uma seleção de <span className="Destaque">pacotes completos</span> para as suas férias!
          </p>
          <p className="p" id="Espacamento">No <span id="Opacidade">ConnectFlight</span> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, 
          e até seguro viagem com <span className="Destaque">preços arrasadores</span>!</p>
                    
          <p className="p">Se você ainda não tem um destino definido, confira nossa seção de ofertas.
          </p>
        </div>
      </main>
      <footer>
        <label className="Labels">Destinos</label>
        <label id="Oferta" className="Labels">Ofertas</label>
        <label className="Labels">Contato</label>
      </footer>
    </>
    
    
  )
}
