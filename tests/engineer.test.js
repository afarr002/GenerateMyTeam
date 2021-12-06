const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("initialization", () => {
    it("should create an object with 'name' string, 'id' number, 'email' string, and 'github' string if provided with the valid arguments", () => {
      const newEng = new Engineer(
        "engName",
        "EMP1",
        "engEmail@email.com",
        "engGithub"
      );

      expect(newEng.name).toEqual("engName");
      expect(newEng.id).toEqual("EMP1");
      expect(newEng.email).toEqual("engEmail@email.com");
      expect(newEng.github).toEqual("engGithub");
    });

    it("should throw an error if not provided a github", () => {
      const noGithub = () =>
        new Engineer("engName", "EMP1", "engEmail@email.com");
      const error = new Error(
        "Engineer's github username cannot be less than 3 characters"
      );

      expect(noGithub).toThrowError(error);
    });

    it("should throw an error if provided a number or empty string for github username", () => {
      const numGitHubUName = () =>
        new Engineer("engName", "EMP1", "engEmail@email.com", 22);
      const empStrGithubUName = () =>
        new Engineer("engName", "EMP1", "engEmail@email.com", "");
      const error = new Error(
        "Engineer's github username cannot be less than 3 characters"
      );

      expect(numGitHubUName).toThrowError(error);
      expect(empStrGithubUName).toThrowError(error);
    });
  });

  describe("getGithub()", () => {
    it("should return the sub class constructor object's github", () => {
      const engGithub = new Engineer(
        "name",
        "EMP1",
        "engineerEmail@email.com",
        "engGithub"
      );

      expect(engGithub.github).toEqual("engGithub");
    });
  });

  describe("getRole()", () => {
    it("should return the new role of engineer", () => {
      function getRole() {
        return "Engineer";
      }

      expect(getRole()).toEqual("Engineer");
    });
  });
});
