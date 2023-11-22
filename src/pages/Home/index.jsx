import "./styles.css"

import { Main } from '../../componentes/Main'
import { Footer } from '../../componentes/Footer'


export  function Home(){
  return(
    <>
      <main>
        <div id="DivInterna">

         <Main />
        
        </div>
      </main>
      <footer>
        <ul>
          <li><strong>Destinos</strong></li>
          <li><strong>Ofertas</strong></li>
          <li><strong>Contato</strong></li>
        </ul>
      </footer>
    </>
    
    
  )
}
