import { useEffect, useState } from "react"
import { Container, OptionContainer, HeaderContainer } from "./style"
import  { fetchApi }  from "../../services/fetch"

export default function Header() {
    const [ web, setWeb ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ search, setSearch ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])


    async function handleClick() {
        const response = await fetchApi(web, categoria)
        setSearchResults(response)
        console.log(searchResults)
    }


    // function filterByName() {
    //     const filtered = searchResults.filter((item) => {
    //         return item.title.toLowerCase().includes(search.toLowerCase())
    //     })
    //     setSearchResults(filtered)
    // }

    useEffect(() => {
        handleClick()
    
    }, [web, categoria])

    return (
        <HeaderContainer>
            <Container>
                <OptionContainer>
                    <section>
                        <select value={web} onChange={(e) => setWeb(e.target.value)}>
                            <option value='mercadolibre'>Mercado Livre</option>
                            <option value='buscape'>Buscapé</option>
                        </select>
                    </section>
                    <section>
                        <select value={categoria} onChange={ (e) => setCategoria(e.target.value)}>
                            <option value='geladeira'>Geladeira</option>
                            <option value='tv'>TV</option>
                            <option value='celular'>Celular</option>
                        </select>
                    </section>
                </OptionContainer>
                <div>
                    <input type='text' placeholder='Digite o nome do produto' value={search} onChange={(e) => setSearch(e.target.value)}  />
                    <button type='button' onClick={handleClick}>Buscar</button>
                </div>
            </Container>
        </HeaderContainer>
    )
}

//  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`)