import React from 'react';
import { mount } from 'enzyme';
import Result from './Result';

describe('Result', () => {
  it('should display Fizz', () => {
    const wrapper = mount(<Result shouldShow={true} />)
    expect(wrapper.text()).toEqual("Fizz");
  });

  it('should not display result when shouldShow is false', () => {
    const wrapper = mount(<Result shouldShow={false} />);
    expect(wrapper.text()).toEqual("");
  });

  it('should show Buzz for 5', () => {
    const wrapper = mount(<Result shouldShow={true} number={5} />)
    expect(wrapper.text()).toEqual("Buzz");
  });
});
