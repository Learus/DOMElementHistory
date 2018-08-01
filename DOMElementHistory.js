// Given an element this class can go back or forward to that element's history
class History {

    constructor(element) {
        this.element = element;
        this.currentIndex = 0;
        this.historyArray = [element.innerHTML]
    }

    goBack() {
        let i = this.currentIndex - 1;

        if (i < 0) {
            return;
        }
        else {
            this.currentIndex = i;
            this.element.innerHTML = this.historyArray[this.currentIndex];
        }
    }

    goForward() {
        let i = this.currentIndex + 1;

        if (i >= this.historyArray.length) {
            return;
        }
        else {
            this.currentIndex = i;
            this.element.innerHTML = this.historyArray[this.currentIndex];
        }
    }

    saveState() {
        for (let i = this.currentIndex + 1; i < this.historyArray.length; i++) {
            this.historyArray.pop();
        }

        this.historyArray.push(this.element.innerHTML);
        this.currentIndex++;
    }
}

module.exports.History = History;