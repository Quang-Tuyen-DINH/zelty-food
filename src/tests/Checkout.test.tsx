import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux'
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import { Checkout } from '../pages/Checkout';
import Store from '../store/Index';

afterEach(cleanup);

configure({adapter: new Adapter()});

describe("Test Checkout", () => {
  it('tests the name', () => {
  
    const product = shallow(
      <Provider store={Store}>
        <Checkout />
      </Provider>
    ).dive()
  
    expect(product).toMatchSnapshot();
  });
})