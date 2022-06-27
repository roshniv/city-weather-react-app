import { render, screen } from '@testing-library/react';
import { shallow } from "enzyme";
import App from './App';

function renderApp(args) {
  const defaultProps = {
    city: '',
    data: []
  };

  const props = { ...defaultProps, ...args };
  return shallow(<App {...props} />);
}

it("renders search-bar on the initial load", () => {
  const wrapper = renderApp();
  // console.log(wrapper.debug());
  expect(wrapper.find("#search-bar").length).toBe(1);
});

/*test('renders search-bar on the initial load', () => {
  const { container } = render(<App />);
  const inputElement = container.querySelector('#search-bar');
  expect(inputElement).toBeInTheDocument();
});

test('enter key should trigger search call', () => {

});

test ('valid city should render weather data correctly', () => {
  const { container } = render(<App />);
  container.setData({main: {temp: 11, humidity: 52}});
  const weatherCard = container.querySelector('.main');
});

test('invalid city should render error card', () => {

});*/
