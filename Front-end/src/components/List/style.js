import styled from "styled-components";

export const ProductContainer = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 4rem;

    width: 60%;
    margin: 0 auto;
`;


export const ImageContainer = styled.div`
    img {
        object-fit: cover;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;

    h2 {
        font-size: 2rem;
        color: var(--text-title);
    }

    span {
        margin-top: 1.5rem;
        display: block;

        h4 {
            margin-top: 1.5rem;
            font-size: 2.0rem;

        }

        a {
            margin-top: 1.5rem;
            font-size: 1.5rem;
            color: var(--text-title);
            text-decoration: none;
        }

    }

    
`;