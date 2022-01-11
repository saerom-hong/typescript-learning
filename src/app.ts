//Classes
abstract class Department {
  static fiscalyear = 2020;
  // shorthand initialization
  //     private readonly id: string;
  //   private name: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    // console.log(this.fiscalyear) // can't access
    // console.log(Department.fiscalyear) // can
  }
  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    //   this.id = 'd2'; // Error bc It's read-only
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // check we already have an instance of the class or not
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  //override methods
  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department("d1", "Accounting");
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");

//Its possible but don't want to permit of accessibility from outside of the class -> 'private' keyword
// accounting.employees[2] = "Anna";
// console.log(accounting);
// accounting.describe();
// accounting.printEmployeeInformation();

// get Error
// const accountingCopy = { discribe: accounting.describe }; //passing the function itself
// accountingCopy.discribe(); //undefined or It's not this type matched

const engineers = new ITDepartment("d1", ["Max"]);
console.log(engineers);
engineers.describe();

// const newAccounting = new AccountingDepartment("d2", []);
//singleton pattern
const newAccounting = AccountingDepartment.getInstance();

//getter: access like a normal property
// console.log(newAccounting.mostRecentReport);
//setter
newAccounting.mostRecentReport = "There is an Error";
console.log(newAccounting);
newAccounting.addReport("Something went wrong");
console.log(newAccounting.mostRecentReport);
newAccounting.printReports();
newAccounting.addEmployee("Max");
newAccounting.addEmployee("Manu");
newAccounting.printEmployeeInformation();
newAccounting.describe();
//static method : call it directly on the class without 'new' keyword
const employee1 = Department.createEmployee("Max");

console.log(employee1, Department.fiscalyear);
