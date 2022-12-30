import { action, computed, makeObservable, observable } from "mobx"
import { UniqueBoard } from "./UniqueBoard"

class AllBoards {
    boards = [];
    board = 0;
    totalValue = 0;
    newValue = 0;
    allValid = false;
    constructor() {
        for (var i = 1; i <= 3; i++) {
            this.boards.push(new UniqueBoard());
        }

        makeObservable(this, {
            board: observable,
            boards: observable,
            changeBoard: action,
            addBoard: action,
            clrAll: action,
            randomPickerAll: action,
            calcTotal: action,
            totalValueFn: computed,
            totalValue: observable,
            newValue: observable,
            allValid: observable,
            removeBoard: action,
        })
    }

    clrAll() {
        this.boards.map(x => {
            x.count = 0;
            x.inputValue = 0;
            x.clearBoard()
            x.system = 6;
            x.totalValue = 0;

        })
        this.totalValue = 0
    }

    randomPickerAll() {
        this.boards.map(x => {
            x.setSystem(x.system);
            x.randomPicker(x.system);
        })
    }

    changeBoard(x) {
        this.board = x;
    }

    addBoard() {
        const extraBoard = new UniqueBoard();
        if (this.boards.length < 6) {
            this.boards.push(extraBoard);
        }
    }

    removeBoard() {
        if (this.boards.length > 3 ) {
            this.boards.pop();
        }
    }

    calcTotal() {
        let total = 0;
        this.boards.forEach(a => {
            if (a.count === a.system)
            total += a.inputValue;
        });
        this.totalValue = total
        return this.totalValue;
    }

    get totalValueFn() {
        return this.totalValue
    }
}

export const stores = new AllBoards();
