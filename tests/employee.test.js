const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("initialization", () => {
    it("should create an object with strings for name, id, and email", () => {
      const emp = new Employee("name", "EMP1", "employeeEmail@email.com");

      expect(emp.name).toEqual("name");
      expect(emp.id).toEqual("EMP1");
      expect(emp.email).toEqual("employeeEmail@email.com");
    });

    it("should throw an error if no arguments provided", () => {
      const emp = () => new Employee();

      expect(emp).toThrow();
    });

    it("should throw an error if not provided all three arguments", () => {
      const twoArgs = () => new Employee("name", "EMP1");
      const error = new Error(
        "Employee's email cannot be less than 7 characters"
      );

      expect(twoArgs).toThrowError(error);
    });

    it("should throw an error if name input is empty or not a-z", () => {
      const noName = () => new Employee("", "EMP1", "employeeEmail@email.com");
      const numName = () => new Employee(2, "EMP1", "employeeEmail@email.com");
      const error = new Error(
        "Employee's name cannot be less than 2 characters"
      );

      expect(noName).toThrowError(error);
      expect(numName).toThrowError(error);
    });

    it("should throw an error if id input is empty or in number format", () => {
      const noID = () => new Employee("name", "", "employeeEmail@email.com");
      const strID = () => new Employee("name", 200, "employeeEmail@email.com");
      const error = new Error("Employee's ID cannot be less than 4 digits");

      expect(noID).toThrowError(error);
    });

    it("should throw an error if email input is empty or less than 7 characters", () => {
      const noEmail = () => new Employee("name", "EMP1", "");
      const underSeven = () => new Employee("name", "EMP1", "123456");
      const error = new Error(
        "Employee's email cannot be less than 7 characters"
      );

      expect(noEmail).toThrowError(error);
      expect(underSeven).toThrowError(error);
    });
  });

  describe("getName()", () => {
    it("it should return the new constructor object's name", () => {
      const empName = new Employee("name", "EMP1", "employeeEmail@email.com");

      expect(empName.getName()).toEqual("name");
    });
  });

  describe("getId()", () => {
    it("it should return the new constructor object's id", () => {
      const empId = new Employee("name", "EMP1", "employeeEmail@email.com");

      expect(empId.getId()).toEqual("EMP1");
    });
  });

  describe("getEmail()", () => {
    it("it should return the new constructor object's email", () => {
      const empEmail = new Employee("name", "EMP1", "employeeEmail@email.com");

      expect(empEmail.getEmail()).toEqual("employeeEmail@email.com");
    });
  });

  describe("getRole()", () => {
    it("it should return the new constructor object's role", () => {
      const empRole = new Employee("name", "EMP1", "employeeEmail@email.com");

      expect(empRole.getRole()).toEqual("Employee");
    });
  });
});
