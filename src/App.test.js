import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('uses Enzyme', () => {
  mount(<App />)
});

describe('Fizzbuzz', () => {
  it('should have a submit button', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('button').text()).toEqual("Submit");
  });
});
