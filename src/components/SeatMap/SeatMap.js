import React, {Component} from 'react';
import DrawGrid from './DrawGrid';
import './SeatMap.css';

class SeatMap extends Component {

        constructor() {
                super();
                this.state = {
                        seat: [
                                '1','2','3',
                                '4','5','6',
                                '7','8','9',
                                '10','11','12',
                                '13','14','15',
                                '16','17','18',
                                '19','20','21',
                                '22','23','24',

                        ],
                        seatAvailable: [
                                '1','2','3',
                                '4','5','6',
                                '7','8','9',
                                '10','11','12',
                                '13','14','15',
                                '16','17','18',
                                '19','20','21',
                                '22','23','24',


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
                    <h3>Seat Reservation System</h3>
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