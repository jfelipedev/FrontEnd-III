import { useState } from 'react'
import './style.scss'
import { SetimaAulaCardProduto } from "../../components/Class07Rss"

export function SetimaAula() {

    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    const newProduct = {
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function addNewProduct() {

        setAllProducts([...allProducts, newProduct])

    }

    return (

        <main className="setima-aula-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                <button onClick={addNewProduct}>Adicionar novo produto</button>
            </div>

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <SetimaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}