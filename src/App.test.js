import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('Fizzbuzz', () => {
  it('should have a submit button', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('button').text()).toEqual("Get Number");
  });

  it('should show result', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('p#result').text()).toEqual('Fizz');
  });
});
