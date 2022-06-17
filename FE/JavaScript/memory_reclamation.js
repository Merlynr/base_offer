function createPerson(name){
    let localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}

let globalPerson = createPerson("NNN");
console.log(globalPerson);
globalPerson = null;