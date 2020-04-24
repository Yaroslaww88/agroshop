// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, Button, ButtonToggle, Row, Col, CardImgOverlay,
//   NavLink
// } from 'reactstrap';

// const ItemCard = ({history, allItemValue, type}) => {

//     let name = allItemValue.name || 'Name is unavailable'
//     let description = allItemValue.description || 'Description is unavailable'
//     let in_stock = allItemValue.in_stock || 'In_stock is unavailable'
//     let id = allItemValue._id || -1

//     let url = process.env.PUBLIC_URL + '/img/' + id + '.png'

//     console.log('id of AllItemValue: ', id)

//     let openItem = () => {
//       history.push(`/${id}`)
//     }

//     let getDescription = () => {
//       if (description.length > 100) {
//         return description.slice(0, 97) + '...'
//       } else
//         return description
//     }

//     if (!type || type === 0) {
//     return (
//       <Card>
//         <CardImg onClick={openItem} left className="header-img" src={url} alt="image" />
//         <CardBody>
//           <CardTitle onClick={openItem}> {name} </CardTitle>
//           <CardText> {getDescription()} </CardText>
//           <Button> BUTTON </Button>
//         </CardBody>
//       </Card>
//     )} else {
//       return (
//         <Card body outline color="success">
//           <Row>
//             <Col xs="4">
//               <CardImg onClick={openItem} left className="header-img" src={url} alt="image" />
//             </Col>
//             <Col xs="6">
//               <CardBody>
//                 <CardTitle onClick={openItem} className="link"> 
//                     {name}
//                 </CardTitle>
//                 <CardText> {getDescription()} </CardText>
//                 <Button outline color="success" size="lg"> BUTTON </Button>
//               </CardBody>
//             </Col>
//           </Row>
//         </Card>
//       )
//     }
//   };

// ItemCard.propTypes = {
//     type: PropTypes.number,
//     title: PropTypes.string,
//     content: PropTypes.string
// }

// export default ItemCard;

// /*<div class="card flex-row flex-wrap">
//           <div class="card-header border-0">
//               <img onClick={openItem} className="header-img" src={url} alt="image"/>
//           </div>
//           <div class="card-block px-2">
//               <CardTitle onClick={openItem}> {name} </CardTitle>
//               <CardText> {description} </CardText>
//               <Button>BUTTON</Button>
//           </div>
//         </div>*/