import React from 'react';
import { CartProduct } from '../../shared/models/CartProduct.model';
import { ClientCheckout } from '../../shared/models/ClientCheckout.model';

const CheckoutService = {
  payCommand(cartProducts: CartProduct[], clientInfors: ClientCheckout) {
    return new Promise(resolve => {
      const counts: any = {};
      cartProducts.forEach(cartProduct => {
        let key = JSON.stringify(`${cartProduct.productId}${cartProduct.options ? "-" + cartProduct.options : ""}`)
        counts[key] = (counts[key]  || 0) + 1;
      })
  
      //TODO: Modify conditions and slice() if product ids or option ids are changed
      let counter = Object.keys(counts).map(key => {
        if(key.length === 11) {
          return {
            key: JSON.stringify(key).slice(3, 8),
            options: [JSON.stringify(key).slice(9, 12)],
            quantity: counts[key]
          }
        } else if(key.length === 7) {
          return {
            key: JSON.stringify(key).slice(3, 8),
            options: [],
            quantity: counts[key]
          }
        }
      })
  
      const receipt = {
        customer: {
          firstName: clientInfors.firstName,
          name: clientInfors.lastName,
          email: clientInfors.email,
          phone: clientInfors.phone
        },
        orders: {
          items: [...counter]
        }
      }

      resolve(receipt);
    })
  }
}

export default CheckoutService