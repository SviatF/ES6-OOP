class Worker{
#experience;


    constructor(flNme , tDr,wkD){
        this.fullName =flNme;
        this.dayRate = tDr
        this.workingDays=wkD
        this.experience= 1.2
    }
    get experience(){return this._experience;}
    set experience(experience){this._experience=experience;}

    showSalary(){
       console.log(this.fullName + ' salary: ' + (this.dayRate*this.workingDays));
    }
    showSalaryWithExperience(){
        console.log(this.fullName + ' salary: ' +this.dayRate*this.workingDays*this.experience )
    }
    showInfoMass(){
        console.log(this.fullName+':'+' '+this.dayRate*this.workingDays*this.experience)
    }
}


//Mass Classes
let mainMass = [];

//worker1

console.log('--------------------------');

const worker1 = new Worker("John Johnson", 25, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();

mainMass.push(worker1);

//worker2

console.log('--------------------------');

const worker2 = new Worker("Fata Karoli", 12, 30);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();

mainMass.push(worker2);

//worker3

console.log('--------------------------');

const worker3 = new Worker("Zena Petron", 20, 27);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();

mainMass.push(worker3);

//worker4

console.log('--------------------------');

const worker4 = new Worker("Kavin Havon", 37, 12);
console.log(worker4.fullName);                 
worker4.showSalary();
console.log("New experience: " + worker4.experience);
worker4.showSalaryWithExperience();
worker4.experience = 1.5;
console.log("New experience: " + worker4.experience);
worker4.showSalaryWithExperience();

mainMass.push(worker4);


console.log('--------------------------');
console.log('Sorted Salary:');

mainMass.sort((a,b)=>(a.dayRate*a.workingDays*a.experience)-(b.dayRate*b.workingDays*b.experience));

let k =0;
while(mainMass[k]!=null){
    mainMass[k].showInfoMass();
    k++;
}
console.log('--------------------------');