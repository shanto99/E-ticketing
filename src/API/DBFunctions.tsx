const Functions = {
    getDistricts: function() {
        let districts = localStorage.getItem('districts') || '';
        return JSON.parse(districts);
    },
    searchBuses: function(searchParam: {from:string, to:string}) {
        let buses = localStorage.getItem('buses') || '[]';
        let busList:string[] = JSON.parse(buses);
        console.log("Function buses: ", busList);
        busList = busList.filter((bus:any) => {
            return bus.from === searchParam.from && bus.to === searchParam.to;
        });
        console.log("Function buses: ", busList);
        return busList;
    }
};

export default Functions;