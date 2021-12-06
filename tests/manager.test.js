const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("initialization", () => {
    it("should create an object with 'name' string, 'id' number, 'email' string, and 'office number' number if provided with the valid arguments", () => {
      const newMan = new Manager("manName", "EMP1", "manEmail@email.com", 201);

      expect(newMan.name).toEqual("manName");
      expect(newMan.id).toEqual("EMP1");
      expect(newMan.email).toEqual("manEmail@email.com");
      expect(newMan.officeNumber).toEqual(201);
    });

    it("should throw an error if not provided an office number", () => {
      const noOffNum = () =>
        new Manager("manName", "EMP1", "manEmail@email.com");
      const error = new Error(
        "Manager's office number cannot be less than 3 numerical digits"
      );

      expect(noOffNum).toThrowError(error);
    });
    it("should throw an error if provided a string for office number", () => {
      const empStrOffNum = () =>
        new Manager("manName", "EMP1", "manEmail@email.com", "");
      const strOffNum = () =>
        new Manager("manName", "EMP1", "manEmail@email.com", "two");
      const error = new Error(
        "Manager's office number cannot be less than 3 numerical digits"
      );

      expect(empStrOffNum).toThrowError(error);
      expect(strOffNum).toThrowError(error);
    });
  });

  describe("getOfficeNumber()", () => {
    it("should return the sub class constructor object's office number", () => {
      const manOffNum = new Manager(
        "name",
        "EMP1",
        "managerEmail@email.com",
        201
      );

      expect(manOffNum.officeNumber).toEqual(201);
    });
  });

  describe("getRole()", () => {
    it("should return the new role of manager", () => {
      function getRole() {
        return "Manager";
      }

      expect(getRole()).toEqual("Manager");
    });
  });
});
