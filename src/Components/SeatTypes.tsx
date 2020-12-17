import React from "react";

import './SeatTypes.css';

const SeatTypes = () => {
 return (
    <div className="seat-status-signs text-uppercase">
        <div className="seat-sign">
            <span className="booked-male">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Booked(M)
            </span>
        </div>
        <div className="seat-sign">
            <span className="booked-female">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Booked(F)
            </span>
        </div>
        <div className="seat-sign">
            <span className="blocked">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Blocked
            </span>
        </div>
        <div className="seat-sign">
            <span className="available">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Available
            </span>
        </div>
        <div className="seat-sign">
            <span className="selected">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Selected
            </span>
        </div>
        <div className="seat-sign">
            <span className="sold-male">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Sold(M)
            </span>
        </div>
        <div className="seat-sign">
            <span className="sold-female">
                <i className="fas fa-couch"></i>
            </span>
            <span>
                Sold(F)
            </span>
        </div>
    </div>
 );
}

export default SeatTypes;