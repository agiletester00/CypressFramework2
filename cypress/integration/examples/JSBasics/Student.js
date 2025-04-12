import Person from "./Person";
class Student extends Person{
    constructor(name,age,grade)
{
    super(name,age);
    this.grade=grade;

}

getStudentDetails()
{
    const personDetails=super.getDetails();

    return `${personDetails}, Grade : ${this.grade}`;   

}





}export default Student;