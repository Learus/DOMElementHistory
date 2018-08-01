# DOM Element History

## Methods

* **constructor()**:    
    * *parameters*: A DOM element  
    * *functionality*: Initializes the historyArray for the specific DOM element and saves current innerHTML as initial state.

* **saveState()**:
    * *parameters*: None
    * *functionality*: Saves current DOM element innerHTML state in historyArray

* **goBack()**:
    * *parameters*: None
    * *functionality*: Moves back one state in the historyArray

* **goForward()**:
    * *parameters*: None
    * *functionality*: Any states after current state are deleted. Moves forward one state in the historyArray.

## Example Usage

```javascript
var domElementHistory = require("domelementhistory");
var main = document.getElementsByTagName("main")[0];
var mainHistory = new domElementHistory.History(main);

// Let's say something changes here in the main element

mainHistory.saveState();

// Let's say for some reason you would wish to go back or forward

mainHistory.goBack();
mainHistory.goForward();
```