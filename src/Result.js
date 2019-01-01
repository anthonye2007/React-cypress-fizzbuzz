import React from 'react';
import { calculate } from './calculate';

function Result(props) {
  let value = "";
  if (props.shouldShow) {
    value = calculate();
  }

  return <p id="result">{value}</p>
}

export default Result;
