const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("initialization", () => {
    it("should create an object with 'name' string, 'id' number, 'email' string, and 'office number' number if provided with the valid arguments", () => {
      const newMgr = new Manager("mgrName", "EMP1", "mgrEmail@email.com", 201);

      expect(newMgr instanceof Employee);
      expect(newMgr.name).toEqual("mgrName");
      expect(newMgr.id).toEqual("EMP1");
      expect(newMgr.email).toEqual("mgrEmail@email.com");
      expect(newMgr.officeNumber).toEqual(201);
    });

    it("should throw an error if not provided an office number", () => {
      const noOffNum = () =>
        new Manager("mgrName", "EMP1", "mgrEmail@email.com");
      const error = new Error(
        "Manager's office number cannot be less than 3 numerical digits"
      );

      expect(noOffNum).toThrowError(error);
    });
    it("should throw an error if provided a string for office number", () => {
      const empStrOffNum = () =>
        new Manager("mgrName", "EMP1", "mgrEmail@email.com", "");
      const strOffNum = () =>
        new Manager("mgrName", "EMP1", "mgrEmail@email.com", "two");
      const error = new Error(
        "Manager's office number cannot be less than 3 numerical digits"
      );

      expect(empStrOffNum).toThrowError(error);
      expect(strOffNum).toThrowError(error);
    });
  });

  describe("getOfficeNumber()", () => {
    it("should return the sub class constructor object's office number", () => {
      const mgrOffNum = new Manager(
        "name",
        "EMP1",
        "managerEmail@email.com",
        201
      );

      expect(mgrOffNum.officeNumber).toEqual(201);
    });
  });

  describe("getRole()", () => {
    it("should return the new role of manager", () => {
      const mgrRole = new Manager("mgrName", "EMP1", "mgrEmail@email.com", 202);

      expect(mgrRole.getRole()).toEqual("Manager");
    });
  });
});
