import styled from "styled-components";

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    h1 {
        font-size: 2rem;
        color: var(--text-title);
    }
    p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        color: var(--text-body);
    }
`;