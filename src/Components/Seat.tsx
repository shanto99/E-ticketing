import React from "react";

const Seat = (props:{status:string}) => {
    let colorSigns = {
        'available': '#5f9ea0'
    }
    return(
        <div className="seat">
                <span className={props.status}>
                    <i className="fas fa-couch"></i>
                </span>
        </div>
    )
}

export default Seat;