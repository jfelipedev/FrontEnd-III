import { Container } from "./style";
import bdo from "./../../assets/bdo.jpg"


export function QuartaAula() {

    const componentFinded = [
        {
            title: "Img Component",
            image: bdo,
            description: " description"
        }, {
            title: "Game Component",
            image: bdo,
            description: " description"
        }
    ]

    return(
        <Container>
            <h1 className="main-title">Componentes identificados</h1>
            
            <ul className="components-finded">
                {
                    componentFinded.map(component => (
                        <li>
                            <img src={component.image}/>
                            <h2>{component.title}</h2>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}