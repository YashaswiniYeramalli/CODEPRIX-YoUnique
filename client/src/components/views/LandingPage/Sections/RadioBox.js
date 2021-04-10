import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;


function RadioBox(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        props.list &&  props.list.map((value) => (
            <React.Fragment >

            <Radio style={{paddingBottom:'6px' ,fontSize:'20px'}} key={value._id} value={`${value._id}`}>{value.name}</Radio>
            <br/>
            </React.Fragment>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Price" key="1" style={{backgroundColor: '#74EBD5',
backgroundImage: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',fontFamily: '"Great Vibes", cursive',fontSize:'20px', color:'#d54d7b',fontWeight: 'bold'
}}>
                    <Radio.Group onChange={handleChange} value={Value}>

                        {renderRadioBox()}
                        

                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
