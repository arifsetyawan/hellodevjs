class Human {
    constructor(names, bodypart) {
        this.name = names;
        this.bodypart = bodypart;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getBodyPart() {
        return this.bodypart;
    }
}

const humanClass = new Human('Adam', "berkamata");
//humanClass.setName('Rizal'); humanClass.setName('Wisnu');
console.log(humanClass.getName());
console.log(humanClass.getBodyPart());