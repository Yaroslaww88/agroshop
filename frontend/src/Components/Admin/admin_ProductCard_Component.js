import React from 'react'
import {
  CardText,
  CardTitle,
} from 'reactstrap'
import { getImagesUrlById } from '../utils/utils'
import EditProductDropdown from './admin_EditProductDropdown_Component'

const ProductCard = ({ product, handleDropdownClick, ...props }) => {

    let title = product.title || 'Name is unavailable'
    let description = product.description || 'Description is unavailable'
    let available = product.available || 'In_stock is unavailable'
    let price = product.price || 'Price is not set'
    let id = product.id || -1

    //get first image from array of urls
    const url = getImagesUrlById(id)[0] && getImagesUrlById(id)[0].url

    function __handleDropdownClick (option) {
        handleDropdownClick(option, id)
    }

    return (
        <div className="card flex flex-row flex-wrap">
            <div className="card-header border-0">
                <img className="header-img" src={url} style={{'max-height': '200px'}} alt="image"/>
            </div>
            <div className="card-block px-2">
                <CardTitle> {title} </CardTitle>
                <CardText> {description} </CardText>
                <EditProductDropdown
                    title='edit item'
                    handleDropdownClick={__handleDropdownClick}
                    {...props}
                />
            </div>
        </div>
    )
};

export default ProductCard;