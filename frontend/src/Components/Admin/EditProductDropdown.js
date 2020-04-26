import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const EditProductDropdown = ({ title, options, handleDropdownClick: handleClick }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    function toggle() {
        setDropdownOpen(prevState => !prevState)
    }

    function getOpdions() {
        let dropdownOprions = []
        for (let option of options) {
            dropdownOprions.push((
                <DropdownItem
                    onClick={handleClick.bind(this, option)}
                >
                    {option}
                </DropdownItem>
            ))
        }
        return dropdownOprions
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {title}    
            </DropdownToggle>
            <DropdownMenu>
                {getOpdions()}
            </DropdownMenu>
        </Dropdown>
    );
}

export default EditProductDropdown;