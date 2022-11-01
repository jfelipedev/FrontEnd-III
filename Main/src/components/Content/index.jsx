import { Routes, Route } from "react-router-dom";
import { PrimeiraAula } from '../Class01'
import { SegundaAula } from '../Class02'
import { TerceiraAula } from '../Class03'
import { QuartaAula } from '../Class04'
import { QuintaAula } from '../Class05'
import { SetimaAula } from '../Class07'
import { DHGames } from '../DHgames'
import './style.css'



function Content(props) {
  return (
    <main className="Content">        
      <Routes>
        <Route path="/aula01" element={<PrimeiraAula />} />
        <Route path="/aula02" element={<SegundaAula />} />
        <Route path="/aula03" exact element={<TerceiraAula />} />
        <Route path="/aula04" element={<QuartaAula />} />
        <Route path="/aula05" element={<QuintaAula />} />
        <Route path="/aula07" element={<SetimaAula />} />
        <Route path="/dhgames" element={<DHGames />} />
      </Routes>
    </main>
  );
}
export default Content;
