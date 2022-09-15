import styled from "styled-components";

export const AssetWrapper = styled.div`
    padding: ${props => props.signin ? "1.5rem" : "4rem" };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: ${props => props.signin ? null : "120px" };
`;