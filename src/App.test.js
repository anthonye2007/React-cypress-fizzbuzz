import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('Fizzbuzz', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />)
  });

  it('should have a submit button', () => {
    expect(wrapper.find('button').text()).toEqual("Get Number");
  });

  it('should not show result before clicking button', () => {
    expect(getResult(wrapper)).toEqual('');
  });
});

function getResult(wrapper) {
  return wrapper.find('p#result').text();
}
