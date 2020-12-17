import React from 'react';
import {Link} from "react-router-dom";

import './ResultRow.css';

const ResultRow = () => {
    return (
        <div className="result-row">
            <div className="result-cell flex-2 heading-cell">
                <h4 className="text-capitalize font-weight-bold">Falgunimodhumoti poribahan</h4>
            </div>
            <div className="font-weight-bold result-cell flex-2 departure-cell">
                <p className="text-capitalize">Departure time</p>
                <p>6:34PM</p>
            </div>
            <div className="font-weight-bold result-cell flex-2 arrival-cell">
                <p className="text-capitalize">Arrival time</p>
                <p>6:34AM</p>
            </div>
            <div className="font-weight-bold result-cell flex-2 seat-cell">
                <p className="text-capitalize">Seats available</p>
                <p>34</p>
            </div>
            <div className="font-weight-bold result-cell flex-2 fare-cell">
                <p>500 Taka</p>
            </div>
            <div className="result-cell flex-2">
                <Link className="btn btn-danger" to="/seat-detail">View Seats</Link>
                {/*<button className="btn btn-danger">View Seats</button>*/}
            </div>
        </div>
    )
}

export default ResultRow;