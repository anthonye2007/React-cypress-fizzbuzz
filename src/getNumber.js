import { parseJsonIntoValue } from "./parseJsonIntoValue";

export function getNumber() {
  return fetch('http://localhost:3001/number')
    .then((response) => response.json())
    .then((json) => parseJsonIntoValue(json));
}
