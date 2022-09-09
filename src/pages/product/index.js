import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Avatar from '../../components/avatar'
import { CardHeader, CardInfo, Column, ProductCard, RatingComponent, UserContainer } from './styles'

const Product = () => {
  return (
    <Column xs={12} sm={6} md={4}>
      <ProductCard>
        <CardHeader>
          <UserContainer>
            <Avatar src={'https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_profile_ymgggi.jpg'} height={40} />
            <div>Username</div>
          </UserContainer>
        </CardHeader>
        <Card.Img src="https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <CardInfo>
              <RatingComponent>Rating <div>component</div></RatingComponent>
              <div>$ 0.00</div>
            </CardInfo>
        </Card.Body>
      </ProductCard>
    </Column>
  )
}

export default Product
