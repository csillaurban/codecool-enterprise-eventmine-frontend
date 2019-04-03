import React, {Component} from 'react';
import ReservedList from './ReservedList';
import AvailableList from  './AvailableList';

class DrawGrid extends Component {
    render() {
        return (
            <div className="container right-align">
                <table className="grid">
                    <tbody>
                    <tr>
                        { this.props.seat.map( row =>
                            <td
                                className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                                key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                    </tr>
                    </tbody>
                </table>
                {/*<AvailableList available = { this.props.available } />*/}
                {/*<ReservedList reserved = { this.props.reserved } />*/}
            </div>
        );
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }


}

export default DrawGrid;