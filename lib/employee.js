class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    if (typeof name !== "string" || name.trim().length <= 2) {
      throw new Error("Employee's name cannot be less than 2 characters");
    }
    if (typeof id !== "string" || id.toString().length < 4) {
      throw new Error("Employee's ID cannot be less than 4 digits");
    }
    if (typeof email !== "string" || email.trim().length <= 7) {
      throw new Error("Employee's email cannot be less than 7 characters");
    }
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
