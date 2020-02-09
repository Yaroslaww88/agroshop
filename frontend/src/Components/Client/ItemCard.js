import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap';

const ItemCard = ({history, allItemValue, type}) => {

    let name = allItemValue.name || 'Name is unavailable'
    let description = allItemValue.description || 'Description is unavailable'
    let in_stock = allItemValue.in_stock || 'In_stock is unavailable'
    let id = allItemValue._id || -1

    let openItem = () => {
      history.push(`/${id}`)
    }

    if (!type || type === 0) {
    return (
      <div>
        <Card>
          <CardImg onClick={openItem} left className="header-img" src="../img/1ycO6.jpg" />
          <CardBody>
          <CardTitle onClick={openItem}> {name} </CardTitle>
          <CardText> {description} </CardText>
          <Button> BUTTON </Button>
          </CardBody>
        </Card>
      </div>
    )} else {
      return (
        <div class="card flex-row flex-wrap">
          <div class="card-header border-0">
              <img onClick={openItem} className="header-img" src="../img/1ycO6.jpg" alt=""/>
          </div>
          <div class="card-block px-2">
              <CardTitle onClick={openItem}> {name} </CardTitle>
              <CardText> {description} </CardText>
              <Button>BUTTON</Button>
          </div>
        </div>
      )
    }
  };

ItemCard.propTypes = {
    type: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string
}

export default ItemCard;