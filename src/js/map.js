export default class ErrorRepository {
  constructor() {
    this.errorList = new Map([
      [101, "ошибка 101"],
      [102, "ошибка 102"],
      [103, "ошибка 103"],
      [104, "ошибка 104"],
      [105, "ошибка 105"],
    ]);
  }

  translate(code) {
    if (this.errorList.has(code)) {
      return this.errorList.get(code);
    } else {
      return "Unknown error";
    }
  }
}
