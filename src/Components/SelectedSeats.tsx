import React, {Component} from 'react';

import SeatInfoRow from "./SeatInfoRow";

import './SelectedSeats.css';

class SelectedSeats extends Component<{}, any> {
    render() {
        return (
            <div className="selected-seats">
                <h4>SEAT INFORMATION:</h4>

                <div className="seat-info">
                    <SeatInfoRow/>
                    <SeatInfoRow seat="B-4" seatClass="E-class" fare={500}/>
                </div>

                <div className="seat-cost">
                   <div className="cost-row sub-total">
                       <span className="label flex-2">Sub total</span>
                       <span className="value flex-1">500</span>
                   </div>
                   <div className="cost-row service-charge">
                       <span className="label flex-2">Service charge</span>
                       <span className="value flex-1">30</span>
                   </div>
                   <div className="cost-row insurance-fee">
                       <span className="label flex-2">Insurance fee</span>
                       <span className="value flex-1">20</span>
                   </div>
                   <div className="cost-row grand-total">
                       <span className="label flex-2">Grand total</span>
                       <span className="value flex-1">550</span>
                   </div>
                </div>
            </div>
        );
    }
}

export default SelectedSeats;