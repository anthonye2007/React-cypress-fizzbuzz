import React from 'react';
import { calculate } from './calculate';

function Result(props) {
  let value = "";
  if (props.shouldShow) {
    value = calculate(props.number);
  }

  return <p id="result">{value}</p>
}

export default Result;
