import React from 'react';
import { CheckoutData } from '../../shared/models/CheckoutData.model'

const CheckoutService = {
  validateCheckout(checkoutData: CheckoutData) {
    console.log(checkoutData);
  }
}

export default CheckoutService