import axios from 'axios';
import React from 'react';
import { menus$, options$, products$ } from './MockData';

const CatalogueService = {
  async getAllProducts() {
    return { data: { Items: await products$ } }
  },

  async getAllOptions() {
    return { data: { Items: await options$ } }
  },

  async getMenu() {
    return { data: { Items: await menus$ } }
  }
}

export default CatalogueService;