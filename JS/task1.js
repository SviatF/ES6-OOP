class Student{
    static studentBuilder() { 
        const std3=new Student({
        fullName:'Ihor Kohut' ,
        direction:'web' 
        })
        
        return std3; 
    
    }
    constructor(options){
        this.fullName = options.fullName;
        this.direction = options.direction;
        
    }
    
    nameIncludes(data){
        if(!this.showFullName().includes(data)){
            console.log('false');
        }else{
            console.log('true');
        }
        
    } 
    
    showFullName(){
        return this.fullName;
    }
    
    getDirection(){
        return this.direction;
    }
    setDirection(stDr){
        this.direction=stDr;
    }
}

const stud1=new Student({
    fullName:'Ivan Petrenko',
    direction:'web' 
    
});
const stud2=new Student({
    fullName:'Sergiy Koval',
    direction:'python' 
    
});
const stud3=Student.studentBuilder();

stud1.nameIncludes('Ivan');   // true
stud1.nameIncludes('Denysenko'); // false
