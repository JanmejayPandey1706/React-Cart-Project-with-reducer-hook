import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {
  // console.log(prod.inStock)

  const {
    state: { cart },
    dispatch,
  } = CartState()
//   console.log(cart)
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title> {prod.name} </Card.Title>
          <Card.Subtitle style={{ paddingBottom: '10px' }}>
            <span>₹ {prod.price.split('.')[0]}</span>
            {prod.fastDelivery ? (
              <div>fastDelivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
             onClick={() =>{
                dispatch({
                    type:'REMOVE_FROM_CART',
                    payload: prod,
                })
            }}
             variant="danger">Remove from cart</Button>
          ) : (
            <Button 
            onClick={() =>{
                dispatch({
                    type:'ADD_TO_CART',
                    payload: prod,
                })
            }}
            disabled={!prod.inStock}>
              {!prod.inStock ? 'Out of Stock' : 'Add to cart'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
