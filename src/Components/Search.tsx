import React from 'react';

import Filter from "./Filter";
import FilterResult from "./FilterResult";


export default class Search extends React.Component<{districts: string[]}, any> {
    state = {buses: []};
    resultedBuses(buses:object[]) {
      this.setState({buses: buses});
    }
    render() {
        return (
            <section>
                <Filter districts={this.props.districts} callback={this.resultedBuses.bind(this)}/>
                <FilterResult buses={this.state.buses}/>
            </section>
        );
    }
}