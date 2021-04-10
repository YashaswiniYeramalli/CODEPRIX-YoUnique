import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr style={{ borderCollapse: 'collapse',
            margin: '25px 0',
            textAlign: 'center',
            alignItems:'center',
            justifyContent:'center',
            fontSize: '0.9em',
            fontFamily: 'sans-serif',
            minWidth: '400px',
            border: '5px solid white',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'}} key={product._id}>
                <td  style={{border: '5px solid black',textAlign: 'center',
            alignItems:'center',}}>
                    <img style={{ width: '130px' ,height:'200px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td style={{border: '5px solid black',textAlign: 'center',
            alignItems:'center', fontWeight:'bold' ,color:'black', fontSize:'20px',}}>{product.quantity} </td>
                <td style={{fontWeight:'bold' ,textAlign: 'center',border: '5px solid black',
            alignItems:'center',color:'black',fontSize:'20px'}}>Rs. {product.price} </td>
                <td style={{border: '5px solid black',textAlign: 'center',
            alignItems:'center',alignItems:'center'}}><button style={{ fontWeight:'bold' ,color:'black',fontSize:'20px', borderRadius:'10%',backgroundColor:'rgb(255, 65, 108)'}} 
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table style={{border: '5px solid black', color:'black',backgroundImage: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'}}>
                <thead>
                    <tr  style={{border: '5px solid black',backgroundColor: '#1890ff',
    color: '#ffffff',
    textAlign: 'left'}}>
                        <th style={{border: '5px solid black', fontFamily:'Verdana ,sans-serif', fontSize:'20px',backgroundImage:'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',color:'black'}}>Product Image</th>
                        <th style={{border: '5px solid black', fontFamily:'Verdana ,sans-serif', fontSize:'20px',backgroundImage:'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',color:'black'}}>Product Quantity</th>
                        <th style={{border: '5px solid black', fontFamily:'Verdana ,sans-serif', fontSize:'20px',backgroundImage:'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',color:'black'}}>Product Price</th>
                        <th style={{border: '5px solid black', fontFamily:'Verdana ,sans-serif', fontSize:'20px',backgroundImage:'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',color:'black'}}>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}


export default UserCardBlock
