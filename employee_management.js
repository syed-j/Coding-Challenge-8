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

// Defining the Manager class that extends (inherits from) the Employee class
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {   // The constructor method initializes a Manager with all Employee properties and an additional bonus
        // Calling the parent Employee constructor using 'super' to inherit properties
        super(name, salary, position, department);
        this.bonus = bonus; // Additional property for the Manager class: bonus (number)
    }

    // Overriding the getDetails method to include bonus information for managers
    getDetails() {
        return `${super.getDetails()} and has a bonus of $${this.bonus}`;
    }
}

// Adding more methods to the Department class to handle bonuses

class Department {
    constructor(name) {
        this.name = name;          
        this.employees = [];     
    }

    // Method to add employees to the department
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Method to calculate the total salary of all employees in the department
    getDepartmentSalary() {
        // Sums up the base salaries of all employees using reduce
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

    // Method to calculate total salary for the department including manager bonuses
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            // Check if the employee is an instance of the Manager class
            if (employee instanceof Manager) {
                // Add both salary and bonus to the total if the employee is a manager
                return total + employee.salary + employee.bonus;
            }
            // Otherwise, just add the salary
            return total + employee.salary;
        }, 0);
    }
}
