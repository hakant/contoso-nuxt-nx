import { stores } from './stores';

describe('shared', () => {
  it('should work', () => {
    expect(stores()).toEqual('stores');
  });
});
