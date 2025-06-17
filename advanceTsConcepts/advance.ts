import { logger } from "./logger";
import { Query } from "./logger";
interface Topic {
  title: string;
  description: string;
}

interface SubTopic extends Topic {
  ranking: string;
}

const info: SubTopic = {
  ranking: "⭐⭐⭐⭐",
  title: "Into the zone",
  description:
    "The movie was quite amazing the plot, writing, music, actors legite everything was on point well produced film of the decade 10/10 would highly recommand",
};

type SubTopic1 = Topic & {
  ranking: string;
};

const info1: SubTopic1 = {
  ranking: "⭐⭐⭐⭐",
  title: "Into the zone",
  description:
    "The movie was quite amazing the plot, writing, music, actors legite everything was on point well produced film of the decade 10/10 would highly recommand",
};

console.log(`Users's reviews ${info}`);

const firstLetter = <T>(arr: T[]) => {
  return arr.every((item) => item > arr);
};
const letter = firstLetter<string>(["Kamo", "sanele", "Chil", "Letagele"]);
const number = firstLetter<number>([1, 23, 4, 5, 6]);
console.log(
  `For the first latters here: ${letter} and for numbers first item is: ${number}`
);

//* ( SRC )Single responsibility principle in TypeScript.

class CalorieTracker {
  maxCalories: number;
  currentCalories: number;

  constructor(maxCalories: number) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  thisCalories = (calorieCount: number) => {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logger("Max calories exceeded");
    }
  };
}
const calorieInfo = new CalorieTracker(2000);
calorieInfo.thisCalories(700);

//? Interface segregration principle in TypeScript.
class Entity {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  attack = () => {
    console.log(`${this.name} attacked`);
  };

  walk = () => {
    console.log(`${this.name} walked`);
  };

  run = () => {
    console.log(`${this.name} run`);
  };
}

class FlyingMonster extends Entity {
  type: string;
  constructor(name: string = "Johnny", type: string) {
    super(name);
    this.type = type;
  }
  monsterType() {
    return `${this.name} is a ${this.type} monster`;
  }
}

const entity = new Entity("laplace");
entity.attack();
entity.walk();

const monsterType = new FlyingMonster("Lumiar", "Fire");
monsterType.attack();
monsterType.monsterType();

const monsterClassType = (name: string, type: string) => {
  return {
    monsterType: () => console.log(`${name} is a ${type} monster`),
    run: () => console.log(`${name} run`),
  };
};

const swimmingMonster = (name: string, type: string) => {
  return {
    swim: () => console.log(`${name} is swimming ${type} monster`),
  };
};

const fireMonsster = (name: string, type: string) => {
  return {
    fire: () => console.log(`${name} is a ${type} monster`),
  };
};

const uniqueMonsterCreator = (name: string, type: string) => {
  return {
    ...monsterClassType(name, type),
    ...swimmingMonster(name, type),
    ...fireMonsster(name, type),
  };
};

const unique = uniqueMonsterCreator("jaibo", "ice");
unique.fire();
unique.monsterType();
unique.run();
unique.swim();

//? ( O/C ) Open/Closed Principle in TypeScript.

//import { Query } from "./logger";
class RangeQuestion {
  description: Query;
  constructor(description: Query) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Minimum:_______");
    console.log("Maximum:_______");
  }
}

const printQuiz = (questions: Query) => {
  questions.forEach((question) => {
    console.log(question.description);
  });
};

const questions: Query = [
  {
    type: true,
    description: "Justice-BEAM",
  },
  {
    type: "multiplechoice",
    description: "Justice-BEAM",
    options: ["CSS", "HTML", "JAVASCRIPT", "PYTHON"],
  },
];
printQuiz(questions);

const quiz = new RangeQuestion(questions);
quiz.printQuestionChoices();

//? Liskov Substitution Principle in TypeScript.

class FlyingBird {
  fly = () => {
    console.log("i can fly");
  };
}

class SwimmingBird {
  swim = () => {
    console.log("I can swim");
  };
}

class Duck extends FlyingBird {
  quack = () => {
    console.log("I can quack");
  };
}

class Penguin extends SwimmingBird {
  quack = () => {
    console.log("I survive in the code");
  };
}

const duck = new Duck();
duck.fly();
duck.quack();
const penguin = new Penguin();
penguin.swim();

//? Dependency inversion principle in TypeScript.
