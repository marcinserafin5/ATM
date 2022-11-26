import "./App.css";
import useATM from "./useATM";
import atmButtons from "./consts/buttons";

function App() {
  const [
    actionText,
    sideText,
    mainText,
    handleActionButton,
    handleButtonCLick,
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
                <button onClick={() => handleActionButton("withdraw")}>
                  WITHDRAW
                </button>
                <button onClick={() => handleActionButton("deposit")}>
                  DEPOSIT
                </button>
                <button onClick={() => handleActionButton("balance")}>
                  BALANCE
                </button>
              </div>
            </div>
          </div>

          <div className="atmKeyboard">
            {atmButtons.map((button) => {
              return (
                <button
                  onClick={() => handleButtonCLick(button)}
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
