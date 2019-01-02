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
    global.fetch = jest.fn().mockImplementationOnce( () => Promise.resolve( { 
      json: () => {
        return { value: 3 }
      }
    }) );

    wrapper.find('button#submit').simulate('click');
    wrapper.update();

    setTimeout(() => {
      wrapper.update();
      const text = getResult(wrapper);
      if (text === "Fizz") {
        done();
      } else if (text !== "") {
        done.fail(`Result was ${text} but expected Fizz`);
      }
    }, 0);
    
  });

  it('should display Buzz when number is 5', (done) => {
    global.fetch = jest.fn().mockImplementationOnce( () => Promise.resolve({
      json: () => {
        return { value: 5 }
      }
    }));

    wrapper.find('button#submit').simulate('click');
    wrapper.update();

    setTimeout(() => {
      wrapper.update();
      const text = getResult(wrapper);
      if (text === "Buzz") {
        done();
      } else if (text !== "") {
        done.fail(`Result was ${text} but expected Buzz`);
      }
    }, 0);
  });

  it('should not keep on mocking', (done) => {
    wrapper.find('button#submit').simulate('click');
    wrapper.update();

    setTimeout(() => {
      wrapper.update();
      const text = getResult(wrapper);
      if (text === "Buzz") {
        done();
      } else if (text !== "") {
        done.fail(`Result was ${text} but expected Buzz`);
      }
    }, 0);
  });
});

function getResult(wrapper) {
  return wrapper.find('p#result').text();
}
