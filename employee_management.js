class Employee {
    constructor(name, salary, position, department) {   // Assigning values passed to the constructor to the class properties
        this.name = name;         
        this.salary = salary;  
        this.position = position; 
        this.department = department;
    }

    getDetails() {
        return `${this.name} is a ${this.position} earning $${this.salary}`;
    }
}



class Department {
    constructor(name) {        // The constructor method initializes a new Department with a name and an empty array for employees
        this.name = name;          
        this.employees = [];    
    }

    // Method to add an employee object to the department's employees array
    addEmployee(employee) {
        // Pushes the provided employee object to the employees array
        this.employees.push(employee);
    }

    // Method to calculate the total salary of all employees in the department
    getDepartmentSalary() {
        // Uses the array reduce method to sum up the salaries of all employees
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
        // employee.salary: refers to the salary of the current employee in the loop
    }
}

