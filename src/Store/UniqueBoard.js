import { action, makeObservable, observable } from "mobx"
import { stores } from "./Store";

export class UniqueBoard {
    systems = [6,7,8,9]; 
    system = 6;
    allNumbers = [];
    count = 0;
    inputValue = 0;

    constructor() {
        for (var i = 1; i <= 49; i++) {
            this.allNumbers.push({ number: i, isActive: false })
          }
        makeObservable(this, {
            allNumbers:observable,
            system:observable,
            count: observable,
            inputValue: observable,
            setSystem: action,
            selectNumber: action,
            clearBoard: action,
            randomPicker:action,
            calcBoardPrice: action,
        })
    }
     total(n,k){
        var result = 1;
        for(var i=1; i <= k; i++){
            result *= (n+1-i)/i;
        }
        return result
    }

    calcBoardPrice(columns) {
        const newInputValue = this.total(columns,6);
        this.inputValue = newInputValue;
        return this.inputValue;
    }
    setSystem(x) {
        this.system = x;
    }
   

    selectNumber(index) {
        let tmp = this.allNumbers;
        tmp[index].isActive = !tmp[index].isActive;
        let activeCount = tmp.filter(x => x.isActive !== false).length;
        this.allNumbers = tmp;
        this.count = activeCount;
        if (this.count === this.system) {
            this.calcBoardPrice(this.system) 
        }
    }

    clearBoard (system) {
        let tmp = this.allNumbers;
        tmp.map(x => {
            if (x.isActive) {
            x.isActive = !x.isActive
            }
        })
        this.allNumbers = tmp;
        this.system= system;
        this.count = 0;
        this.inputValue = 0;
        stores.totalValue = 0
    }
    randomPicker(system) {
        var randomArr = [];
        while (randomArr.length < system) {
            var r = Math.floor(Math.random() * 49) + 1;
            if (randomArr.indexOf(r) === -1) randomArr.push(r)
        }
        this.clearBoard(system);
        this.count = this.system;
        let tmp = this.allNumbers;
        tmp.map(x => {
            if (randomArr.includes(x.number)) {
                x.isActive = true
            }
        })
        this.allNumbers = tmp;
        this.calcBoardPrice(system)
    }
}



