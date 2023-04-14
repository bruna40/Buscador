import { useEffect, useContext } from "react";
import { Container, OptionContainer, HeaderContainer } from "./style";
import  { fetchApi }  from "../../services/fetch";
import { FilterContext } from "../../contexts/FilterContext";

export default function Header() {

    const { 
            category, 
            setCategory,
            webSite,
            setWebSite,
            search,
            setSearch,
            setSearchResults,
        } = useContext(FilterContext)


    async function handleClick() {
        const response = await fetchApi(webSite, category)
        setSearchResults(response.results)
        console.log(response.results)

    }

    useEffect(() => {
        handleClick();
    
    }, [webSite, category])

    return (
        <HeaderContainer>
            <Container>
                <OptionContainer>
                    <section>
                        <select value={webSite} onChange={(e) => setWebSite(e.target.value)}>
                            <option value='mercadolibre'>Mercado Livre</option>
                            <option value='buscape'>Buscapé</option>
                        </select>
                    </section>
                    <section>
                        <select value={category} onChange={ (e) => setCategory(e.target.value)}>
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