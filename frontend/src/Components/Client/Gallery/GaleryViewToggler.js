import React, { useState } from 'react'
import {
    Button,
    ButtonGroup, 
    Row, 
} from 'reactstrap'

const GaleryViewToggler = (props) => {

    const [selected, setSelected] = useState(0)

    const { handleToggle } = props

    const _handleToggle = () => {
        setSelected(!selected | 0) //convert from Boolean to Integer
        handleToggle()
    }

    return (
        <Row>
            <ButtonGroup className="ml-auto">
                <Button color="primary" outline color="success" 
                    onClick={_handleToggle} 
                    active={selected === 0}
                >
                    <img src="./icons/square-menu.png"></img>
                </Button>
                <Button color="primary" outline color="success" 
                    onClick={_handleToggle} 
                    active={selected === 1}
                >
                    <img src="./icons/list-menu.png"></img>
                </Button>
            </ButtonGroup>
        </Row>
    )
}

export default GaleryViewToggler