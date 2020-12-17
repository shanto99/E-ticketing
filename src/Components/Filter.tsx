import React, {useState} from 'react';
import Datepicker from 'react-datepicker';

import DBFunctions from '../API/DBFunctions'

import './Filter.css';
import "react-datepicker/dist/react-datepicker.css";

interface Props{
    districts: string[],
    callback: any
}

const Filter = (props:Props) => {

    let [journeyFrom, setJourneyFrom] = useState('');
    let [journeyTo, setJourneyTo] = useState('');

    const dateSelected = (selectedDate: Date) => {
        console.log(selectedDate);
    }

    const fromChanged = (e:any) => {
        let value = e.target && e.target.value;
        setJourneyFrom(value);
    }

    const toChanged = (e:any) => {
        let value = e.target && e.target.value;
        setJourneyTo(value);
    }

    const searchBuses = () => {
        let busList:string[] = DBFunctions.searchBuses({from: journeyFrom, to: journeyTo});
        props.callback(busList);
    }

    return (
      <div className="container filter-section">
          <div className="filter-row">
            <div className="filter-column">
                <p>FROM</p>
                <select onChange={fromChanged} id="journey-from" className="custom-select" defaultValue={""}>
                    <option value="" disabled>Select starting point</option>
                    {
                        props.districts.map<any>(function(district:string) {
                        return <option value={district} key={district}>{district}</option>
                    })}
                </select>
            </div>
            <div className="filter-column">
                <p>TO</p>
                <select onChange={toChanged} id="journey-to" className="custom-select" defaultValue={""}>
                    <option value="" disabled>Select starting point</option>
                    {
                        props.districts.map<any>(function(district:string) {
                            return <option value={district} key={district}>{district}</option>
                        })}
                </select>
            </div>
            <div className="filter-column">
                <p>JOURNEY DATE</p>
                <div className="date-picker input-group">
                    <Datepicker
                        selected = {new Date()}
                        onChange={dateSelected}
                        name="journey_date"
                        dateFormat="MM/dd/yyyy"
                    />
                </div>

            </div>
            <div style={{backgroundColor: 'sky'}} className="filter-column">
                <p>RETURN DATE(OPTIONAL)</p>
                <div className="date-picker input-group">
                    <Datepicker
                        selected = {new Date()}
                        onChange={dateSelected}
                        name="return_date"
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
            </div>
            <div className="filter-column button-column">
                <button onClick={searchBuses} className="btn btn-danger">Search Buses</button>
            </div>
          </div>
      </div>
    );
}

export default Filter;

Filter.defaultProps = {
    districts: []
}