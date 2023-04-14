import { useContext } from "react";
import { ProductContainer, ImageContainer,InfoContainer } from "./style"
import { FilterContext } from "../../contexts/FilterContext";


export default function List() {
    const { searchResults } = useContext(FilterContext)
    console.log(searchResults)
    return (
        <>
            {searchResults && searchResults.length > 0 ? searchResults.map((product) => {

                return (
                <ProductContainer key={product.id}>
                    <ImageContainer>
                    <img src={product.thumbnail} alt="Celular" />
                    </ImageContainer>
                    <InfoContainer>
                        <h2>{product.title}</h2>
                        <span>
        
                            <p>{product.official_store_name}</p>
                            <h4>R$ {product.price}</h4>
                            <a href={product.permalink}>ir a web</a>
        
                        </span>
                    </InfoContainer>
                </ProductContainer>)
            }): <h1>Bem-vindo ao Buscador</h1> }
        </>
        
    ) 
}