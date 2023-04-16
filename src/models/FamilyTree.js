class FamilyTree {
  constructor(dictionary, root) {
    this.dictionary = dictionary;
    this.root = this.dictionary[root];
  }

  setCouple(personA, personB) {
    this.dictionary[personA].spouse = this.dictionary[personB];
    this.dictionary[personB].spouse = this.dictionary[personA];
  }

  setChild(parent, child) {
    let parentA = this.dictionary[parent],
      parentB = this.dictionary[parent].spouse;
    if (parentA.children && parentB.children) {
      parentA.children.push(this.dictionary[child]);
    } else {
      parentA.children = parentB.children = [this.dictionary[child]];
    }

    this.dictionary[child].parents = [parentA, parentB];
  }
}

export function makeFamilyTree(dictionary, root) {
  return new FamilyTree(dictionary, root);
}
