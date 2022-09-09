import { Card, Col } from 'react-bootstrap'
import styled from 'styled-components'

export const Column = styled(Col)`
    height: 100%;
    outline: 1px solid blue;
    padding: 1rem;
`;

export const ProductCard = styled(Card)`
    outline: 1px solid red;
`;

export const CardHeader = styled(Card.Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RatingComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;