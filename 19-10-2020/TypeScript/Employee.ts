class Employee{
    name: string; // public field
    private _hiddenField: string; // private field

    private _salary: number; // private backing field

    // public property
    get Salary(): number{
        return this._salary;
    }

    set Salary(value:number){
        if(value<=0){
            throw "salary can not be less than 0";
        }
        else{
            this._salary = value;
        }
    }
}
    var emp: Employee = new Employee();
    try{
        emp.Salary = -100;
    }
    catch(error){
        alert(error);
    }
    emp.Salary = 50;