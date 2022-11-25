import logo from "./logo.svg";
import "./App.css";

function App() {
  const atmButtons = [
    { label: "1", value: "1", style: "atmButton" },
    { label: "2", value: "2", style: "atmButton" },
    { label: "3", value: "3", style: "atmButton" },
    { label: "CANCEL", value: "cancel", style: "bigAtmButton yellow" },

    { label: "4", value: "4", style: "atmButton" },
    { label: "5", value: "5", style: "atmButton" },
    { label: "6", value: "6", style: "atmButton" },
    { label: "CLEAR", value: "clear", style: "bigAtmButton red" },

    { label: "7", value: "7", style: "atmButton" },
    { label: "8", value: "8", style: "atmButton" },
    { label: "9", value: "9", style: "atmButton" },
    { label: "ENTER", value: "enter", style: "bigAtmButton green" },

    { label: "", value: "", style: "atmButton" },
    { label: "0", value: "0", style: "atmButton" },
    { label: "", value: "", style: "atmButton" },
    { label: "", value: "", style: "bigAtmButton" },
  ];
  return (
    <>
      <div className="App">
        <div className="atm">
          <span className="App-header">ATM</span>
          <div className="displayContainer">
            <div className="display">
              <div className="textContainer">
                <span>Account Balance: 23213PLN</span>
                
                <span>To withdraw</span>
              </div>
              <div className="buttonContainer">
                <button>WITHDRAW</button>
                <button>DEPOSIT</button>
              </div>
            </div>
          </div>
         
            <div className="atmKeyboard">
              {atmButtons.map((button) => {
                return (
                  <button
                    onClick={() => console.log(button.value)}
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
