import React from 'react';

import Seat from "./Seat";

import './DetailSeatSection.css';

const DetailSeatSection = () => {
    const generateSeats = (rowCount:number) => {
        let seats = [];
        for(let i=1; i<=4; i++){
            seats.push(<Seat status="available"/>);
        }

        return seats;
    }
    const generateSeatRows = () => {
        let seatRows = [];
        for(let i=1; i<=10; i++) {
            let seatRow = <div className="seat-row">
                {generateSeats(i)}
            </div>;

            seatRows.push(seatRow);
        }

        return seatRows;
    }
    return (
      <div className="seat-orientation">
        <div className="driver-row">
            <div className="seat">
                <span>
                    <i className="fas fa-dharmachakra"></i>
                </span>
            </div>
        </div>
          {generateSeatRows()}
      </div>
    );
}

export default DetailSeatSection;