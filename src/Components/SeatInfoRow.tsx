import React from "react";

import './SeatInfoRow.css';

interface Props {
    seat:string,
    seatClass: string,
    fare: number
}

const SeatInfoRow = (props:Props) => {
    return (
        <div className="seat-info-row text-uppercase">
            <div>
                {props.seat}
            </div>
            <div>
                {props.seatClass}
            </div>
            <div>
                {props.fare}
            </div>
        </div>
    )
}



export default SeatInfoRow;

SeatInfoRow.defaultProps = {
    seat: 'Seats',
    seatClass: 'Class',
    fare: 'Fare'
}