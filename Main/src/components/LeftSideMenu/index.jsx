import { Link } from "react-router-dom"
import { Sidemenu } from "./style"

export function LeftSideMenu(){
return (
    
<Sidemenu>
  <div className="menu-background">
  <h1>Classes Menu</h1>    
  <ul>
  <Link to="aula01"><li>Aula01</li></Link>
  <Link to="aula02"><li>Aula02</li></Link>
  <Link to="aula03"><li>Aula03</li></Link>
  <Link to="aula04"><li>Aula04</li></Link>
  <Link to="aula05"><li>Aula05</li></Link>
  <Link to="aula07"><li>Aula07</li></Link>
  <Link to="dhgames"><li>DH-Games</li></Link>
  </ul>
  </div>
</Sidemenu>
)
}