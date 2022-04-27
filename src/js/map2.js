export default class Settings {
  constructor() {
    this.defaultOptions = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    this.userOptions = new Map();
  }
  userTheme(str) {
    const themeOption = ["dark", "light", "gray"];
    if (themeOption.includes(str)) {
      this.userOptions.set("theme", str);
    } else {
      throw new Error("Invalid theme");
    }
  }
  userMusic(str) {
    const musicOption = ["trance", "pop", "rock", "chillout", "off"];
    if (musicOption.includes(str)) {
      this.userOptions.set("music", str);
    } else {
      throw new Error("Invalid music");
    }
  }
  userDifficulty(str) {
    const difficultyOption = ["easy", "normal", "hard", "nightmare"];
    if (difficultyOption.includes(str)) {
      this.userOptions.set("difficulty", str);
    } else {
      throw new Error("Invalid difficulty");
    }
  }
  getSetting() {
    const tmp = new Map();
    this.defaultOptions.forEach((value, key) => {
      if (this.userOptions.has(key)) {
        tmp.set(key, this.userOptions.get(key));
      } else {
        tmp.set(key, value);
      }
    });
    return tmp;
  }
}
