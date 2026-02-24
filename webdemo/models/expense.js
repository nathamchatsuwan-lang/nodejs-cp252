class Expense {
  /**
   * Represents an Expense.
   * @constructor
   * @param {string|Date} date - The date of the expense.
   * @param {number} income - The income amount.
   * @param {number} expense - The expense amount.
   * @param {string} detail - The details of the transaction.
  */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

  /** 
   * Add an expense object to the array.
   * @param {Expense} expense - An Expense object.
  */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }
  /**
   * Calculate the total income.
   * @return {number} The sum of all income.
  */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }
  /**
   * Calculate the total expense.
   * @return {number} The sum of all expenses.
  */

  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }
  /**
   * Calculate the money left (Total Income - Total Expense).
   * @return {number} The remaining money.
  */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
