import React from 'react'
import { useState } from 'react';

const ProductCreateForm = () => {
    const [errors, setErrors] = useState({});
    const [productData, setProductData] = useState({
        category: [],
        title: "",
        description: "",
        brand: "",
        inStock: false,
        price: "",
        currency: [],
        street: "",
        city: "",
        country: "",
    })
    const [galleryData, setGalleryData] = useState({
        product: 0,
        image: "",
    })

  return (
    <div>
      
    </div>
  )
}

export default ProductCreateForm
