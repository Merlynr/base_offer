class Pet {
  constructor(type) {
    this.type = type;
  }
  getPetType() {
    return this.type;
  }
}

class Dog extends Pet {
  constructor() {
    super("Dog");
  }
}

class Cat extends Pet {
  constructor() {
    super("Cat");
  }
}

class PetEnterQueue {
  constructor(Pet, counts) {
    this.pet = new Pet();
    this.counts = counts;
  }
  getPet() {
    return this.pet;
  }
  getCount() {
    return this.counts;
  }
  getEnterPetType() {
    return this.pet.getPetType();
  }
}

class DogCatQueue {
  constructor() {
    this.dogQ = new PetEnterQueue();
    this.dogQ = new PetEnterQueue();
    this.counts = 0;
  }
  add(pet) {
    if (pet.getPetType() === "Dog") {
      this.dogQ.add(PetEnterQueue(pet, this.counts++));
    } else if (pet.getPetType() === "Cat") {
      this.dogQ.add(PetEnterQueue(pet, this.counts++));
    } else {
      throw new Error("err,not dog or cat");
    }
  }
}
