import { Container } from "./../Class04/style"
import bdo from "./../../assets/bdo.jpg"
import { QuintaAulaItem } from "./../../components/Class05Item"

export function QuintaAula() {
    const componentFinded = [
        {
            id:1,
            title: "Img Component",
            image: bdo,
            description: " description"
        }, {
            id:2,
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
                        <QuintaAulaItem key= {component.id} item={component}/>
                    ))
                }
            </ul>
        </Container>
    )
}