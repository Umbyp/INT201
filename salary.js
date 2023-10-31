// Question:
// Consider a scenario where you have an array of objects representing employees in a company. 
// Each employee object has the following properties: name, department, salary, and yearsOfService.
//  You need to perform a series of tasks using array methods, closures, and object concepts. 
// Below are the tasks:

// Create a function that takes the array of employee objects and returns an array of all employee names.
// Implement a closure function that calculates the average salary of employees in a specific department.
// Use array methods to find the employee with the highest salary.
// Create a function that filters employees with more than a certain number of years of service.


//Function to get all employee names:
function getAllEmployeeNames(employees) {
    return employees.map(employee => employee.name);
  }

  //Closure function to calculate the average salary of employees in a specific department:
  function createAverageSalaryCalculator(department) {
    return function (employees) {
      const filteredEmployees = employees.filter(employee => employee.department === department);
      if (filteredEmployees.length === 0) {
        return 0;
      }
      const totalSalary = filteredEmployees.reduce((total, employee) => total + employee.salary, 0);
      return totalSalary / filteredEmployees.length;
    };
  }
  
  const calculateAverageSalaryInSales = createAverageSalaryCalculator("Sales");
  

  //Using array methods to find the employee with the highest salary:
  const employeeWithHighestSalary = employees.reduce((highest, current) => {
    return current.salary > highest.salary ? current : highest;
  }, employees[0]);

  //unction to filter employees with more than a certain number of years of service:
  function filterEmployeesByYearsOfService(employees, years) {
    return employees.filter(employee => employee.yearsOfService > years);
  }
  