class Person {
  constructor(name, age, gender, spouse, children, parents) {
    this.id = name + age;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.spouse = spouse;
    this.children = children;
    this.parents = parents;
  }
}

export function makePerson(name, age, gender, spouse, children, parents) {
  return new Person(name, age, gender, spouse, children, parents);
}
