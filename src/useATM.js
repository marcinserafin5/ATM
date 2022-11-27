import { useEffect, useState } from "react";
import ACTIONS from "./consts/actionsConsts";
import BUTTONS_OPERATION from "./consts/buttonsOperationConsts";

const useATM = () => {
  const [value, setValue] = useState(0);
  const [action, setAction] = useState(ACTIONS.BALANCE);
  const [accountBalance, setAccountBalance] = useState(0);
  const [actionText, setActionText] = useState("Account Balance:");
  const [sideText, setSideText] = useState(" ");
  const [mainText, setMainText] = useState(accountBalance);

  useEffect(() => {
    if (action !== ACTIONS.BALANCE)
      setSideText(
        "Account Balance: " +
          new Intl.NumberFormat("pl-pl").format(accountBalance) +
          ".00"
      );
    if (action !== ACTIONS.BALANCE && action !== ACTIONS.FINAL)
      setActionText("To " + action + ":");
    if (action === ACTIONS.BALANCE) {
      setSideText("");
      setActionText("Account Balance:");
      setMainText(
        new Intl.NumberFormat("pl-pl").format(accountBalance) + ".00"
      );
    }
  }, [action, accountBalance]);

  useEffect(() => {
    if (action !== ACTIONS.BALANCE && action !== ACTIONS.FINAL) {
      if (value > Number.MAX_SAFE_INTEGER) {
        setMainText("Too much amount");
        setAction(ACTIONS.FINAL);
      } else {
        setMainText(new Intl.NumberFormat("pl-pl").format(value) + ".00");
      }
    }
  }, [value, action]);

  const handleActionButton = (acionType) => {
    setValue(0);
    setAction(acionType);
  };

  const withdrawFunction = () => {
    if (value > accountBalance) {
      setMainText("Insufficient funds");
    } else {
      setMainText("Thank you for withdrawing funds");
      setAccountBalance(accountBalance - value);
    }
    setActionText("");
    setAction(ACTIONS.FINAL);
  };

  const depositFunction = () => {
    setMainText("Thank you for deposit the funds");
    setAccountBalance(accountBalance + value);
    setActionText("");
    setAction(ACTIONS.FINAL);
  };

  const handleButtonClick = (button) => {
    switch (button.value) {
      case BUTTONS_OPERATION.CLEAR:
        setValue(0);
        break;
      case BUTTONS_OPERATION.SUBMIT:
        if (value > 0) {
          switch (action) {
            case ACTIONS.BALANCE:
              break;
            case ACTIONS.WITHDRAW:
              withdrawFunction();
              break;
            case ACTIONS.DEPOSIT:
              depositFunction();
              break;
            default:
              break;
          }
        }
        break;
      case BUTTONS_OPERATION.REMOVE:
        value > 9 ? setValue(Math.floor(value / 10)) : setValue(0);
        break;
      case BUTTONS_OPERATION.CANCEL:
        setAction(ACTIONS.BALANCE);
        break;
      case null:
        break;
      default:
        if (value === 0) setValue(button.value);
        else setValue(parseInt(value + button.value.toString()));
        break;
    }
  };

  return [
    actionText,
    sideText,
    mainText,
    handleActionButton,
    handleButtonClick,
  ];
};

export default useATM;
