class Database{
    constructor() {
        this.storeDistricts();
        this.storeBuses();
    }

    storeDistricts() {
        if(!localStorage.getItem('districts')) {
            let districts = ['Dhaka', 'Cumilla'];

            localStorage.setItem('districts', JSON.stringify(districts));
        }
    }

    storeBuses() {
        if(!localStorage.getItem('buses')) {
            let buses = [
                {
                    name: 'Shaymoli poribahan',
                    type: 'AC',
                    from: 'Dhaka',
                    to: 'Cumilla',
                    fare: 500
                },
                {
                    name: 'Shaymoli poribahan',
                    type: 'Non-AC',
                    from: 'Dhaka',
                    to: 'Cumilla',
                    fare: 400
                },
                {
                    name: 'Shaymoli poribahan',
                    type: 'AC',
                    from: 'Non-Dhaka',
                    to: 'Cumilla',
                    fare: 450
                },
                {
                    name: 'Shaymoli poribahan',
                    type: 'AC',
                    from: 'Dhaka',
                    to: 'Cumilla',
                    fare: 550
                }
            ];

            localStorage.setItem('buses', JSON.stringify(buses));
        }
    }
}

export default Database;