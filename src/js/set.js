export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
export class Team {
  constructor() {
    this.members = new Set();
  }
  toArray() {
    return [...this.members];
  }
  add(member) {
    if (this.members.has(member)) {
      throw new Error("Ошибка добавления игрока в команду");
    }
    this.members.add(member);
  }
  addall(...members) {
    members.forEach((item) => this.members.add(item));
  }
}
