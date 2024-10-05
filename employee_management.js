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

// Extending the Department class with additional functionality to handle manager bonuses
class Departments extends Department {

    calculateTotalSalaryWithBonus() {
        // Uses reduce to sum the salaries and bonuses of all employees
        return this.employees.reduce((total, employee) => {
            // Checks if the employee is an instance of Manager to include their bonus
            if (employee instanceof Manager) {
                // Adds both the salary and bonus if the employee is a manager
                return total + employee.salary + employee.bonus;
            }
            // Adds only the salary if the employee is not a manager
            return total + employee.salary;
        }, 0);
    }
}

// Create an instance of the Departments class for the "Development" department
const devDepartment = new Departments("Development");

// Create an instance of the Departments class for the "Design" department
const designDepartment = new Departments("Design");

// Create new Employee objects for employees in the development and design departments
const employee1 = new Employee("Alice", 70000, "Developer", "Development");   
const employee2 = new Employee("Bob", 60000, "Designer", "Design");          

// Create new Manager objects with an additional bonus property
const manager1 = new Manager("Charlie", 90000, "Lead Developer", "Development", 15000);  
const manager2 = new Manager("Diana", 80000, "Design Manager", "Design", 12000);        

// Add employees and managers to the "Development" department
devDepartment.addEmployee(employee1);  
devDepartment.addEmployee(manager1);   

// Add employees and managers to the "Design" department
designDepartment.addEmployee(employee2);  
designDepartment.addEmployee(manager2);   

// Calculate and log the total salary of all employees in the "Development" department (without bonuses)
console.log("Development Department Salary:", devDepartment.getDepartmentSalary()); 

// Calculate and log the total salary of all employees in the "Design" department (without bonuses)
console.log("Design Department Salary:", designDepartment.getDepartmentSalary());  

// Calculate and log the total salary of all employees in the "Development" department, including bonuses
console.log("Development Department Total Salary (with bonuses):", devDepartment.calculateTotalSalaryWithBonus());  

// Calculate and log the total salary of all employees in the "Design" department, including bonuses
console.log("Design Department Total Salary (with bonuses):", designDepartment.calculateTotalSalaryWithBonus());  
