import { Character, Team } from "../set";
import ErrorRepository from "../map";
import Settings from "../map2";

test("test class Team", () => {
  const player1 = new Character("stiv", "Swordsman");
  const player2 = new Character("alex", "Bowman");
  const player3 = new Character("lana", "Zombie");
  const team = new Team();

  team.add(player1);
  expect([...team.members]).toEqual([{ name: "stiv", type: "Swordsman" }]);

  team.addall(player2, player3);
  expect(team.toArray()).toEqual([
    { name: "stiv", type: "Swordsman" },
    { name: "alex", type: "Bowman" },
    { name: "lana", type: "Zombie" },
  ]);
  expect(() => team.add(player1)).toThrow("Ошибка добавления игрока в команду");
});

test("test class ErrorRepository", () => {
  const err = new ErrorRepository();
  expect(err.translate(104)).toMatch("ошибка 104");
  expect(err.translate(101)).toMatch("ошибка 101");
  expect(err.translate(106)).toMatch("Unknown error");
});

test("test class Settings", () => {
  const setting = new Settings();
  setting.userTheme("gray");
  setting.userMusic("pop");
  expect([...setting.getSetting()]).toEqual([
    ["theme", "gray"],
    ["music", "pop"],
    ["difficulty", "easy"],
  ]);
  expect(() => setting.userDifficulty("user")).toThrow("Invalid difficulty");
  expect(() => setting.userTheme("user")).toThrow("Invalid theme");
  expect(() => setting.userMusic("user")).toThrow("Invalid music");
  const setting2 = new Settings();
  expect(setting2.getSetting()).toEqual(setting2.defaultOptions);
});
