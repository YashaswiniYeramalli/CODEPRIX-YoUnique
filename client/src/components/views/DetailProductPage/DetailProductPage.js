import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{color: '#1890ff', fontFamily: '"Great Vibes", cursive', fontSize: '50px', lineHeight: '160px', fontWeight: 'normal', marginBottom: '0px', marginTop: '40px', textAlign: 'center', textShadow: '0 1px 1px #fff' , }}>{Product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo
                        addToCart={addToCartHandler}
                        detail={Product} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProductPage
