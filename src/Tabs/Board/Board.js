import React, { Component } from "react";
import './Board.css'
import { observer } from "mobx-react";
import { RiErrorWarningLine } from 'react-icons/ri';
import Buttons from './Button/Button'
import { stores } from "../../Store/Store";

class Board extends Component {

    render() {
        return (
            <div className="outline">
                {this.props.uniqueboard.count > 0 && this.props.uniqueboard.count < this.props.uniqueboard.system && <div>  <p className="info"> <RiErrorWarningLine fontSize='1.8rem' /> &nbsp;   select {this.props.uniqueboard.system - this.props.uniqueboard.count} numbers</p> </div>}
                {this.props.uniqueboard.count > this.props.uniqueboard.system && <div> <p className="info">  <RiErrorWarningLine fontSize='1.8rem' /> &nbsp;  Remove {this.props.uniqueboard.count - this.props.uniqueboard.system} numbers</p> </div>}
                <Buttons uniqueboard={this.props.uniqueboard} />
                <div className="systemDiv" >
                    <span className="systemChar" >SYSTEM</span>
                    {this.props.uniqueboard.systems.map((x, i) => <button className={this.props.uniqueboard.system === x ? 'activeSys' : 'systemBtn'} onClick={() => this.props.uniqueboard.setSystem(x)} key={i}>{x}</button>)}
                </div>
                <div className="btnContainer">
                    <button className="clrBtn" onClick={() => this.props.uniqueboard.clearBoard(6)} >CLR</button>
                    <div className="cornerRight">
                        <div>
                            <p className="boardPrice" >Board Price</p>
                            <input readOnly type='number' value={this.props.uniqueboard.inputValue}
                                onChange={this.props.uniqueboard.system === this.props.uniqueboard.count ? () => this.props.uniqueboard.calcBoardPrice(this.props.uniqueboard.system) : () => { }} />
                            {this.props.uniqueboard.system === this.props.uniqueboard.count && <button className="testBtn" onClick={() => stores.calcTotal()} > Total Amount</button>}
                            {<input readOnly type='number' value={stores.totalValue} />}

                        </div>
                        <button className="playBtn" disabled={this.props.uniqueboard.system !== this.props.uniqueboard.count} >Play All</button>
                    </div>
                </div>
                <button className="testBtn" onClick={() => stores.clrAll()}> Clear all</button>
                <button className="testBtn" onClick={() => this.props.uniqueboard.randomPicker(this.props.uniqueboard.system)}> Quick Pick</button>
                <button className="testBtn" onClick={() => stores.randomPickerAll()} > Quick Pick All</button>
            </div>
        )
    }
}
export default (observer(Board))