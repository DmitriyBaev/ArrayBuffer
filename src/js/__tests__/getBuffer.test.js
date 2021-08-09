import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('converter', () => {
  const convert = new ArrayBufferConverter();
  convert.load(getBuffer());

  expect(convert.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
