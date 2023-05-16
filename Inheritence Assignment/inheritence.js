class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping `);
  }
  move() {
    console.log(`${this.name} is moving`);
  }

}
    /* Dog class */
class Dog extends animal {
    bark(){
        console.log(`${this.name} is barking `);
    }
    faithFull(){
        console.log(`${this.name} is faitfull animal`);
    }
}
    /* Cat class */
class Cat extends animal {
    meow (){
        console.log(`${this.name} is meow`);
    }
   
}
     /*Cow class */
class Cow extends animal {
    moo(){
        `${this.name} is mooing`
    }

}
const dog = new Dog('Doggy' ,4) ;
const cat = new Cat('kitten' ,4) ;
const cow = new Cow('Cow' , 4) ;


