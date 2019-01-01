import React from 'react';

function Result(props) {
  if (props.shouldShow) {
    return <p id="result">Fizz</p>;
  }
  else {
    return <p id="result"></p>
  }
}

export default Result;
