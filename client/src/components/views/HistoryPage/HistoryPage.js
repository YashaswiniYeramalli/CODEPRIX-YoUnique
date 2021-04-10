import React from 'react'

function HistoryPage(props) {

    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{fontSize:'40px',fontFamily: '"American Typewriter", serif', fontWeight:'bold'}}>HISTORY</h1>
            </div>
            <br />

            <table style={{border: '5px solid black', color:'black',backgroundImage: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',}}>
                <thead>
                    <tr style={{fontSize:'25px',border: '5px solid black'}}>
                        <th style={{border: '5px solid black'}}>Payment Id</th>
                        <th style={{border: '5px solid black'}}>Price</th>
                        <th style={{border: '5px solid black'}}>Quantity</th>
                        <th style={{border: '5px solid black'}}>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}


                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
