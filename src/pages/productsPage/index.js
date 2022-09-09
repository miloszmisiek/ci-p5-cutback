import React from 'react'
import { Row } from 'react-bootstrap'
import Product from '../product'


const ProductsPage = () => {
    return (
        <div>
            <Row>
                <Product />
                <Product />
                <Product />
            </Row>
        </div>
    )
}

export default ProductsPage
