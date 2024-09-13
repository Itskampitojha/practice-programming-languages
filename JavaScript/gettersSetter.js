class Person{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }


//Getter for name

get name() {
    return this._name;
}



//setter for name 

set name(newName){
    if(newName.length > 0){
        this._name =newName;
    }else{
        console.log("invalid name");
        
    }
}



// getter for age


get age(){
    return this._age;
}


//setter for age



set age(newAge){
    if(newAge > 0){
        this._age = newAge;
    }else{
        console.log("invalid age");
    }
  }
}


let person = new Person ("Rahul", 25);
console.log(person.name);

person.name = "";
person.age = ;

