import { useContext, useEffect } from "react";
import { ProductContainer, ImageContainer,InfoContainer } from "./style"
import { FilterContext } from "../../contexts/FilterContext";
import Message from "../Message";


export default function List() {
    const { searchResults, setSearchResults, search } = useContext(FilterContext)

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
            }): <Message />}
        </>
        
    ) 
}