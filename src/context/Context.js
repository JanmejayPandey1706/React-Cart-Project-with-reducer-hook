import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer, productReducer } from './Reducers';
import faker from 'faker';


const Cart = createContext()

const Context = ({ children }) => {
//  for fake data  
// ...Array(20) for 20 undefined data 

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));

      //  console.log(products)
    // useState hook 
    const [state, dispatch] = useReducer(cartReducer, {
        products : products,
        cart : []    
    })
    // use reducer hook
    const [productState, productDispatch] = useReducer(productReducer, {
      btStock : false,
      byFastDelivery : false,
      byRating : 0,
      searchQuery : "",
    })

  return (
    <Cart.Provider value = {{ state, dispatch, productState, productDispatch }}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () =>{
    return useContext(Cart)
}