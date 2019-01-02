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

  it('should display Fizz when number is 3', (done) => {
    // fake out network request
    global.fetch = jest.fn(() => Promise.resolve( { 
      json: () => {
        return { value: 5}
      }
    }) );

    // click button
    wrapper.find('button#submit').simulate('click');
    wrapper.update();

    // assert result is Fizz

    setInterval(() => {
      wrapper.update();
      console.log('checking...');
      const text = getResult(wrapper);
      if (text === "Fizz") {
        done();
      }
      if (text !== "") {
        done.fail(`Result was ${text} but expected Fizz`);
      }
    }, 1);
    
  });
});

function getResult(wrapper) {
  return wrapper.find('p#result').text();
}
