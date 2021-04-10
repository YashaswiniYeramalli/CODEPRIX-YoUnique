import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    getCartItems,
    removeCartItem,
    onSuccessBuy
} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import { Result, Empty } from 'antd';
import Axios from 'axios';
import Paypal from '../../utils/Paypal';

import bag from '../LandingPage/assets/bag.png';
import { urlencoded } from 'body-parser';
function CartPage(props) {
    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then((response) => {
                        if (response.payload.length > 0) {
                            calculateTotal(response.payload)
                        }
                    })
            }
        }

    }, [props.user.userData])

    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        });

        setTotal(total)
        setShowTotal(true)
    }


    const removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.cartDetail.length <= 0) {
                    setShowTotal(false)
                } else {
                    calculateTotal(response.payload.cartDetail)
                }
            })
    }

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({
            cartDetail: props.user.cartDetail,
            paymentData: data
        }))
            .then(response => {
                if (response.payload.success) {
                    setShowSuccess(true)
                    setShowTotal(false)
                }
            })
    }

    const transactionError = () => {
        console.log('Paypal error')
    }

    const transactionCanceled = () => {
        console.log('Transaction canceled')
    }


    return (
        <div style={{backgroundImage:'url("https://th.bing.com/th/id/Rcf3fe658c7965c4cb759045a2ac9a166?rik=WJ7xJO284bN1Ag&riu=http%3a%2f%2fwww.grandhotelgardone.it%2fimages%2fslide%2fshopping%2fslides_shopping.jpg&ehk=qYy43CjgY7UGBeRbsxhDGrqEeP6H%2fhWuhj2X3nQlsoA%3d&risl=&pid=ImgRaw")'}}>
        <div  style={{ width: '85%', margin: '3rem auto' }}>
            <h1  style={{color:'#1890ff',fontFamily: 'Brush Script MT, Brush Script Std', fontSize: '120px'}}>My Cart</h1>
            <div>

                <UserCardBlock
                    products={props.user.cartDetail}
                    removeItem={removeFromCart}
                />


                {ShowTotal ?
                    <div style={{ marginTop: '3rem' }}>
                        <div style={{backgroundImage:"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)", border:"3px solid black", width:'500px'}}>
                        <h2 style={{color:' black',fontFamily: 'Brush Script MT, Brush Script Std', fontSize: '50px'}}>Total amount: Rs.{Total} </h2>
                        </div>
                    </div>
                    :
                    ShowSuccess ?
                        <Result
                            status="success"
                            title="Successfully Purchased Items"
                        /> :
                        <div style={{
                            width: '100%', display: 'flex', flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <br />
                            <Empty description={false} />
                            <p>No Items In the Cart</p>

                        </div>
                }
            </div>

                <br/>
                <br/>

            {/* Paypal Button */}

            {ShowTotal &&

                <Paypal
                    toPay={Total}
                    onSuccess={transactionSuccess}
                    transactionError={transactionError}
                    transactionCanceled={transactionCanceled}
                />

            }


            <br/>
        </div>
        </div>
    )
}

export default CartPage
