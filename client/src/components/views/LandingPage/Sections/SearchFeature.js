import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div>
            <Search style={{fontSize:'30px',width:'300px',height:'60px',color:'grey',padding:'0px'}}
               
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Search By Typing..."
            />
        </div>
    )
}

export default SearchFeature
