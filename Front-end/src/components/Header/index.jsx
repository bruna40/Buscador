import { useEffect, useState } from "react"
import { Container, OptionContainer, HeaderContainer } from "./style"

export default function Header() {
    const [ web, setWeb ] = useState('mercadolibre')
    const [ categoria, setCategoria ] = useState('tv')
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }, [categoria])

    function handleCategoriaChange(event) {
        setCategoria(event.target.value)
    }

    return (
        <HeaderContainer>
            <Container>
                <OptionContainer>
                    <section>
                        <select>
                            <option value='todas'>Todas</option>
                            <option value='mercadolibre'>Mercado Livre</option>
                            <option value='buscape'>Buscapé</option>
                        </select>
                    </section>
                    <section>
                        <select value={categoria} onChange={handleCategoriaChange}>
                            <option value='geladeira'>Geladeira</option>
                            <option value='tv'>TV</option>
                            <option value='celular'>Celular</option>
                        </select>
                    </section>
                </OptionContainer>
                <div>
                    <input type='text' placeholder='Digite o nome do produto'  />
                    <button type='button'>Buscar</button>
                </div>
            </Container>
        </HeaderContainer>
    )
}

//  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`)