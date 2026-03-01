import Cards from "./Cards"
import './App.css'
import pokemon1 from './assets/OIP.jpeg'
import pokemon2 from './assets/Squirtle.jpeg'
import pokemon3 from './assets/charmander.jpeg'
import pokemon4 from './assets/Eevee.jpeg'
import pokemon5 from './assets/Psyduck.jpeg'
import pokemon6 from './assets/Pikachu.jpeg'
import pokemon7 from './assets/Onix.jpeg'
import pokemon8 from './assets/Turtwig.jpeg'
import pokemon9 from './assets/ShinyPichu.jpeg'
import pokemon10 from './assets/Pachirisu.jpeg'
import pokemon11 from './assets/Munchlax.jpeg'
import pokemon12 from './assets/Chimchar.webp'
import pokemon13 from './assets/Emolga.webp'
import pokemon14 from './assets/Grookey.webp'
import pokemon15 from './assets/Togepi.webp'
import pokemon16 from './assets/Skitty.webp'
import pokemon17 from './assets/Chikorita.png'


export default function App() {
  return (
    <>
  <h1 className="PokHeading">Pokemon</h1>
    <div>
      <Cards pic={pokemon1} name="balbsour" info={"TYPE : Grass type pokemon"}/>
      <Cards pic={pokemon2} name="Squirtle" info={"TYPE : Water type pokemon"}/>
      <Cards pic={pokemon3} name="Charizard" info="TYPE : Fire type Pokemon"/>
       <Cards pic={pokemon4} name="Eevee" info="TYPE : Grass type pokemon"/>
        <Cards pic={pokemon5} name="Psyduck" info="TYPE : Water type pokemon"/>
         <Cards pic={pokemon6} name="Pikachu" info="TYPE : Electric type  pokemon"/>
          <Cards pic={pokemon7} name="Onix" info="TYPE : Rock/Ground type Pokemon"/>
           <Cards pic={pokemon8} name="Turtwig" info="TYPE : Grass type Pokemon"/>
            <Cards pic={pokemon9} name="Shiny Pichhu" info="TYPE : Electric type Pokemon"/>
              <Cards pic={pokemon10} name="Pachirirsu" info="TYPE : Electric type pokemon"/>
            <Cards pic={pokemon11} name="Munchlax" info="TYPE : Normal type Pokemon"/>
              <Cards pic={pokemon12} name="Chimchar" info="TYPE : Fire type Pokemon"/>
            <Cards pic={pokemon13} name="Emolga" info="TYPE : Electric/flying type Pokemon"/>
              <Cards pic={pokemon14} name="Grookey" info="TYPE : Grass type Pokemon"/>
             <Cards pic={pokemon15} name="Togepi" info="TYPE : Fairy type Pokemon"/>
            <Cards pic={pokemon16} name="Skitty" info="TYPE : Normal type Pokemon"/>  
            <Cards pic={pokemon17} name="Chikorita" info="TYPE : Grass type Pokemon"/>
    </div>
    </>
  )
}
