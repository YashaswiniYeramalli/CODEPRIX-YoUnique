import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;



const Continents = [
    { key: 1, value: "Kurtas & Suits" },
    { key: 2, value: "Ethnic Wear" },
    { key: 3, value: "Kurtis, Tunics & Tops" },
    { key: 4, value: "Leggings, Salwars & Churidars" },
    { key: 5, value: "Skirts & Palazzos" },
    { key: 6, value: "Sarees" },
    { key: 7, value: "Lehenga Cholis" }
    
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' ,}}>
                <Title level={1}> Upload Indian And Fusion Wear</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label style={{fontSize:'25px',color:'black'}}>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label  style={{fontSize:'25px',color:'black'}}>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label  style={{fontSize:'25px',color:'black'}}>Price(Rs.)</label>
                <Input style={{fontSize:'25px',color:'black'}}
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select  style={{fontSize:'25px',color:'black'}} onChange={onContinentsSelectChange} value={ContinentValue}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                        <div style={{textAlign:'center'}}>
                <Button  style={{fontSize:'20px',backgroundColor:'#ff4d4f', color:'white', height:'60px',width:'150px',size:'lg'}} 
                    onClick={onSubmit}
                >
                    Submit
                </Button>
                        </div>
            </Form>

        </div>
    )
}

export default UploadProductPage
