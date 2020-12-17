import React from 'react';

import ResultRow from "./ResultRow";
import DetailSeatSection from "./DetailSeatSection";
import DetailConfirmSection from "./DetailConfirmSection";
import SelectedSeats from "./SelectedSeats";
import SeatTypes from "./SeatTypes";

import './SeatDetail.css';

class SeatDetail extends React.Component<{}, any> {
    render() {
        return (
            <div className="container">
                <ResultRow/>
                <SeatTypes/>
                <div className="seat-detail-section">
                    <div className="detail-seat-section">
                        <div className="detail-section-wrapper">
                            <DetailSeatSection/>
                        </div>
                        <div className="selected-seats-wrapper">
                            <SelectedSeats/>
                        </div>

                    </div>
                    <div className="detail-confirm-section">
                        <DetailConfirmSection/>
                    </div>

                </div>
            </div>
        );
    }
}

export default SeatDetail;