import axios from 'axios';
import React from 'react';

const CatalogueService = {
  async getAllProducts() {
    const products = await axios.get(`${process.env.REACT_APP_API}/products`);
    return products;
  },

  async getAllOptions() {
    const options = await axios.get(`${process.env.REACT_APP_API}/options`);
    return options;
  },

  async getMenu() {
    const menu = await axios.get(`${process.env.REACT_APP_API}/menu`);
    return menu;
  }
}

export default CatalogueService