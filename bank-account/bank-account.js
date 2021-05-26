//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.Estado;
    this.Ingreso;
  }

  open() {
    if (this.Ingreso){
      throw new ValueError;
    } else {
      this.Ingreso = true;
      this.Estado = 0;
  }

  close()
    if (this.Ingreso) {
      this.Ingreso = false;
    } else {
      throw new ValueError;
    }
  }

  deposit(num) {
    if (this.Ingreso) {
      if (num > 0) {
        this.Estado += num;
      } else {
        throw new ValueError;
      }
  }
  else {
    throw new ValueError;
  }
}

  withdraw(num) {
    if (this.Ingreso) {
      if (num <= this.Estado && num > 0) {
        this.Estado -= num;
      } else {
        throw new ValueError;
      }
  }
  else {
    throw new ValueError;
  }
  }  
  get balance() {
    if (this.Ingreso) {
      return this.Estado;
    }
    else {
      throw new ValueError;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Error');
  }
}