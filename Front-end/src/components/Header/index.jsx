import { useEffect, useState } from "react"
import { Container, OptionContainer, HeaderContainer } from "./style"

export default function Header() {
    const [ web, setWeb ] = useState('')
    const [ categoria, setCategoria ] = useState('')

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLB/search?q=geladeira')
    //         .then(response => response.json())
    //         .then(data => console.log(data.results))
    // })

    return (
        <HeaderContainer>
            <Container>
                <OptionContainer>
                    <select>
                        <option value='todas'>Todas</option>
                        <option value='mercadolibre'>Mercado Livre</option>
                        <option value='buscape'>Buscapé</option>
                    </select>
                    <select>
                        <option value='geladeira'>Geladeira</option>
                        <option value='tv'>TV</option>
                        <option value='celular'>Celular</option>
                    </select>
                </OptionContainer>
                <div>
                    <input type='text' placeholder='Digite o nome do produto' />
                    <button type='submit'>Buscar</button>
                </div>
            </Container>
        </HeaderContainer>
    )
}