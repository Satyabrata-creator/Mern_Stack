// Write a Person class with the following properties: firstName, lastName, and age. Include a
// method getFullName() that returns the full name of the person. Use constructor to initialize
// the data member and another function getDetails() to display all the details.
class Person{
    constructor(fn,ln,age){
        this.firstName=fn
        this.lastName=ln
        this.age=age
    }
    getFullName = () => {
        console.log(this.firstName+" "+this.lastName);
    }
    getDetails = () =>
    {
        console.log(this.firstName+" "+this.lastName+"\nage:"+this.age);
    }
}
let Student=new Person("Satyabrata","Mohapatra",21)
Student.getFullName();
Student.getDetails()