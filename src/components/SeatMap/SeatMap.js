import React, {Component} from 'react';
import DrawGrid from './DrawGrid';
import './SeatMap.css';

class SeatMap extends Component {

        constructor() {
                super();
                this.state = {
                        seat: [
                                'F1','F2','F3',
                                'F4','F5','F6',
                                'M1','M2','M3',
                                'M4','M5','M6',
                                'B1','B2','B3',
                                'B4','B5','B6'
                        ],
                        seatAvailable: [
                                'F1','F2','F3',
                                'F4','F5','F6',
                                'M1','M2','M3',
                                'M4','M5','M6',
                                'B1','B2','B3',
                                'B4','B5','B6'
                        ],
                        seatReserved: []
                }
        }

        onClickData(seat) {
                if(this.state.seatReserved.indexOf(seat) > -1 ) {
                        this.setState({
                                seatAvailable: this.state.seatAvailable.concat(seat),
                                seatReserved: this.state.seatReserved.filter(res => res !== seat)
                        })
                } else {
                        this.setState({
                                seatReserved: this.state.seatReserved.concat(seat),
                                seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
                        })
                }
        }
    render() {
        return (
            <div>
                    <h1>Seat Reservation System</h1>
                    <DrawGrid
                        seat = { this.state.seat }
                        available = { this.state.seatAvailable }
                        reserved = { this.state.seatReserved }
                        onClickData = { this.onClickData.bind(this) }
                    />
            </div>
        );
    }
}

export default SeatMap;