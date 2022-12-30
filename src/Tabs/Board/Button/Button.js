import { observer } from 'mobx-react'
import React, { Component } from 'react'
import './Button.css'

class Buttons extends Component {

    render() {
        return (
            <div className='wrapperGrid'>
                {this.props.uniqueboard.allNumbers.map((x, i) =>
                    <button className={`innerbtns ${x.isActive ? "active" : ""}`}
                        key={i}
                        onClick={() => this.props.uniqueboard.selectNumber(i)} >
                        {x.number}
                    </button>
                )}
            </div>
        )
    }
}

export default (observer(Buttons))