import styled from 'styled-components';


export const HeaderContainer = styled.header`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background: #1EA483;


`;

export const Container = styled.form`
    display: flex;

    input {
        margin-left: 20rem;

        flex: 1;
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem 0 0 0.25rem;
        border: 1px solid #D7D7D7;
        background: #FFF;
        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);
        &::placeholder {
            color: var(--text-body);
        }

    }
    button {
        height: 4rem;
        padding: 0 2rem;
        border-radius: 0 0.25rem 0.25rem 0;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }

`;

export const OptionContainer = styled.div`
    display: flex;
    align-items: center;

    section {
        select {
            margin-right: 1rem;
            width: 10rem;
            height: 4rem;
            padding: 0 1.5rem;
            border-radius: 0.25rem;
            border: 1px solid #D7D7D7;
            background: #FFF;
            font-weight: 400;
            font-size: 1rem;
            color: var(--text-title);
            

        }
    }
`;
