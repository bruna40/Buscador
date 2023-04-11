import styled from 'styled-components';


export const HeaderContainer = styled.header`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background: #1EA483;


`;

export const Container = styled.form`
    display: flex;

`;

export const OptionContainer = styled.div`
    select {
        color: var(--text-title);
        margin-right: 1rem;
        option {
            margin-right: 1rem;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-title);
            transition: filter 0.2s;
            &:hover {
                filter: brightness(0.9);
            }
        }
    }
`;