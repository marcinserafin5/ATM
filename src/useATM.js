import { useEffect, useState } from "react";

const useATM = () => {
  const [value, setValue] = useState(0);
  const [action, setAction] = useState("balance");
  const [accountBalance, setAccountBalance] = useState(0);
  const [actionText, setActionText] = useState("Account Balance:");
  const [sideText, setSideText] = useState(" ");
  const [mainText, setMainText] = useState(accountBalance);

  useEffect(() => {
    if (action !== "balance") setSideText("Account Balance: " + accountBalance);
    if (action !== "balance" && action !== "fin")
      setActionText("To " + action + ":");
    if (action === "balance") {
      setSideText("");
      setActionText("Account Balance:");
      setMainText(accountBalance);
    }
  }, [action, accountBalance]);


  useEffect(() => {
    if (action !== "balance" && action !== "fin") {
      setMainText(value);
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
    setAction("fin");
  };

  const depositFunction = () => {
    setMainText("Thank you for deposit the funds");
    setAccountBalance(accountBalance + value);
    setActionText("");
    setAction("fin");
  };

  const handleButtonClick = (button) => {
    switch (button.value) {
      case "clear":
        setValue(0);
        break;
      case "submit":
        switch (action) {
          case "balance":
            break;
          case "withdraw":
            withdrawFunction();
            break;
          case "deposit":
            depositFunction();
            break;
          default:
            break;
        }
        break;
      case "cancel":
        value > 9 ? setValue(Math.floor(value / 10)) : setValue(0);
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
