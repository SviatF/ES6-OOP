class Person{
    
     constructor(nam , surna){
        this.name = nam;
        this.surname = surna;
        
    }
    
     showFullName(){
        return this.name + ' ' + this.surname;
    }
}

class Student extends Person{
    
       constructor(nam , surna,yer){
        super(nam , surna);
        this.year = yer;
    }
   // @override
     showFullName(midleName){
        return this.name + ' ' + this.surname+ ' ' +midleName;
    }
    showCourse(){
        return (2022 - this.year);
    }
}


const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5
