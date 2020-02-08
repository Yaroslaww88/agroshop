import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap';

const ItemCard = (props) => {

  if (!props.type || props.type === 0) {
    return (
      <div>
        <Card>
          <CardImg left className="header-img" src="../img/1ycO6.jpg" />
          <CardBody>
            <CardTitle> {props.title} </CardTitle>
            <CardText> {props.content} </CardText>
            <Button> BUTTON </Button>
          </CardBody>
        </Card>
      </div>
    )} else {
    return (
      <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img className="header-img" src="../img/1ycO6.jpg" alt=""/>
        </div>
        <div class="card-block px-2">
            <CardTitle> {props.title} </CardTitle>
            <CardText> {props.content} </CardText>
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