import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./overView.module.css";
import { displayMonth } from "../../library/methods";

const OverView = props => {
  let { expensesList, incomesList} = props;

  const calTotalIncome = () => {
    return incomesList.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
  };

  const calTotalExpense = () => {
    return expensesList.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
  };

  const calAccountBalance = () => {
    let balance = calTotalIncome() - calTotalExpense();
    return balance;
  };

  console.log(expensesList, incomesList);
  return (
    <Aux>
      <div className={classes.overViewTitle}>Account Balance</div>
      <div className={classes.todayIs}>Hel, Today is '{displayMonth()}' :D</div>
      <div className={classes.overViewWrapper}>
        <div className={classes.overViewContent}>
          Total balance :{" "}
          <span className={(calAccountBalance() < 0)? classes.minusBalance : classes.plusBalance}>
            {calAccountBalance()} {"\u20AC"}
          </span>
        </div>
        <div className={classes.overViewContent}>
          Total Income :{" "}
          <span className={classes.hightlightIncome}>
            {" "}
            {calTotalIncome()} {"\u20AC"}{" "}
          </span>
        </div>
        <div className={classes.overViewContent}>
          Total Expense :{" "}
          <span className={classes.hightlightExpense}>
            {calTotalExpense()} {"\u20AC"}
          </span>
        </div>
      </div>
    </Aux>
  );
};

export default OverView;
