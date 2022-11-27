import "./App.css";
import useATM from "./useATM";
import atmButtons from "./consts/buttons";
import ACTIONS from "./consts/actionsConsts"; 

function App() {
  const [
    actionText,
    sideText,
    mainText,
    handleActionButton,
    handleButtonClick,
  ] = useATM();
  
  return (
    <>
      <div className="App">
        <div className="atm">
          <span className="App-header">ATM</span>
          <div className="displayContainer">
            <div className="display">
              <div className="textContainer">
                <span>{sideText}</span>
                <div className="mainTextContainer">
                  <span className="mainText">{actionText}</span>
                  <span className="mainText">{mainText}</span>
                </div>
              </div>
              <div className="buttonContainer">
                <button onClick={() => handleActionButton(ACTIONS.WITHDRAW)}>
                  WITHDRAW
                </button>
                <button onClick={() => handleActionButton(ACTIONS.DEPOSIT)}>
                  DEPOSIT
                </button>
                <button onClick={() => handleActionButton(ACTIONS.BALANCE)}>
                  BALANCE
                </button>
              </div>
            </div>
          </div>

          <div className="atmKeyboard">
            {atmButtons.map((button) => {
              return (
                <button
                  onClick={() => handleButtonClick(button)}
                  className={button.style}
                >
                  {button.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
