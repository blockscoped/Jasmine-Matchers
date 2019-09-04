import { toBeNonEmptyString } from './toBeNonEmptyString';
import { toBeArrayOfStrings } from './toBeArrayOfStrings';
import { strict } from 'assert';

export type toContainSubstring = (
  subString: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toContainSubstring: toContainSubstring;
    }
  }
}

export const toContainSubstring: toContainSubstring = (subString, actual) => {
  if (Array.isArray(actual)) {
    return toBeArrayOfStrings(actual) && findMatch(subString, actual);
  } else if (typeof actual === "string") {
    return toBeNonEmptyString(actual) &&
    toBeNonEmptyString(subString) &&
    actual.includes(subString);
  } else {
    return false;
  }
}
  
function findMatch(subString, actual) {
  for (let val of actual) {
    if (toBeNonEmptyString(val) && toBeNonEmptyString(subString) && val.includes(subString)) {
      return true;
    }
  }
  return false;
}