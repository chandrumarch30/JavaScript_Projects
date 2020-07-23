import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee';

//function to get employee information
function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + benefits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

//test inputs with employee input salary
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
