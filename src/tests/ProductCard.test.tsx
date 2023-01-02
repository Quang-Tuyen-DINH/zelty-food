import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux'
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import ProductCard from '../components/ui/ProductCard';
import Store from '../store/Index';

afterEach(cleanup);

configure({adapter: new Adapter()});

const testProduct = {
    menuId: "M02",
    image: "https://zelty-front-test-storage.s3.eu-west-1.amazonaws.com/burger-poulet.jpeg",
    description: "Bun's brioché du boulanger aux flocons d'épeautre, 2 grosses aiguillettes de poulet mariné et pané maison, cheddar mature, oignons rouge pickles, sauce mayonnaise et salade batavia",
    id: "Z1528",
    price: 900,
    sold_out: false,
    available_options: [
    "A01",
    "A02"
    ],
    name: "Burger poulet"
}

describe("Test ProductCard", () => {
  it('tests the name', () => {
  
    const product = shallow(
      <Provider store={Store}>
        <ProductCard product={testProduct} />
      </Provider>
    ).dive()
  
    expect(product).toMatchSnapshot();
  });
})