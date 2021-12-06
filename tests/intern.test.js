const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("initialization", () => {
    it("should create an object with 'name' string, 'id' number, 'email' string, and 'school' string if provided with the valid arguments", () => {
      const newInt = new Intern(
        "intName",
        "EMP1",
        "intEmail@email.com",
        "intSchool"
      );

      expect(newInt instanceof Employee);
      expect(newInt.name).toEqual("intName");
      expect(newInt.id).toEqual("EMP1");
      expect(newInt.email).toEqual("intEmail@email.com");
      expect(newInt.school).toEqual("intSchool");
    });

    it("should throw an error if not provided a school", () => {
      const noSchool = () =>
        new Intern("intName", "EMP1", "intEmail@email.com");
      const error = new Error(
        "Intern's school name cannot be less than 3 characters"
      );

      expect(noSchool).toThrowError(error);
    });

    it("should throw an error if provided a number or empty string for school", () => {
      const numSchoolName = () =>
        new Intern("intName", "EMP1", "intEmail@email.com", 22);
      const empStrSchoolName = () =>
        new Intern("intName", "EMP1", "intEmail@email.com", "");
      const error = new Error(
        "Intern's school name cannot be less than 3 characters"
      );

      expect(numSchoolName).toThrowError(error);
      expect(empStrSchoolName).toThrowError(error);
    });
  });

  describe("getSchool()", () => {
    it("should return the sub class constructor object's school", () => {
      const intSchool = new Intern(
        "name",
        "EMP1",
        "internEmail@email.com",
        "intSchool"
      );

      expect(intSchool.getSchool()).toEqual("intSchool");
    });
  });

  describe("getRole()", () => {
    it("should return the new role of intern", () => {
      const intRole = new Intern(
        "intName",
        "EMP1",
        "intEmail@email.com",
        "intSchool"
      );

      expect(intRole.getRole()).toEqual("Intern");
    });
  });
});
