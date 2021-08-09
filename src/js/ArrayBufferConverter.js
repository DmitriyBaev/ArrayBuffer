export default class ArrayBufferConverter {
  load(value) {
    this.buffer = value;
  }

  toString() {
    const viewValue = new Uint16Array(this.buffer);
    return String.fromCharCode(...viewValue);
  }
}
