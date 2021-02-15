class Calculator {
    constructor() {
      this._history = [];
    }
  
    //this code listen to every key on the calculator and add the value on the screen
    addValue() {
      document.querySelectorAll("#calculator span").forEach(key => {
        if (key.innerHTML !== "=") {
          key.addEventListener('click', e => {
              print(e.target.innerText);
              return e.target.innerText;
          });
        };
      });
    }
  
    // This function below write the value of the pressed key on the screen
    print(val) {
        let calculatorScreen = document.querySelector("#calculator .screen");
        calculatorScreen.innerHTML += val;
    }
  
    // This function clears the screen
    clear() {
        let calculatorScreen = document.querySelector("#calculator .screen");
        document.querySelector('#calculator .clear').addEventListener('click', () => (calculatorScreen.innerHTML = ""));
    }
  
    //history: once the = key is pressed, it keeps the last value in memory in an array
    history() {
        let equals = document.querySelector("#calculator .eval");
        let calculatorScreen = document.querySelector("#calculator .screen");
        equals.addEventListener('click', () => this._history.push(calculatorScreen));
    }
  
}
  
  
  
