import sum from '../src/utils/sum';

test('add 1 + 2', () => {
  expect(sum(1, 2)).toBe(3);
});
