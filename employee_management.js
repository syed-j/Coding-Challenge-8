class Employee {
    constructor(name, salary, position, department) {
        // Assigning values passed to the constructor to the class properties
        this.name = name;         
        this.salary = salary;  
        this.position = position; 
        this.department = department;
    }

    getDetails() {
        return `${this.name} is a ${this.position} earning $${this.salary}`;
    }
}
