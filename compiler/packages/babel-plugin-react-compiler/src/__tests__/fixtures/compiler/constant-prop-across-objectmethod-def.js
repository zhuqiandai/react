import {identity} from 'shared-runtime';

// repro for context identifier scoping bug, in which x was
// inferred as a context variable.

function Component() {
  let x = 2;
  const obj = {
    method() {},
  };
  x = 4;
  identity(obj);
  // constant propagation should return 4 here
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{}],
};
