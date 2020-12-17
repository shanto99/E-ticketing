class Database{
    constructor() {
        this.checkForDistricts();
    }

    checkForDistricts() {
        if(!localStorage.getItem('districts')) {
            let districts = ['Dhaka', 'Cumilla'];

            localStorage.setItem('districts', JSON.stringify(districts));
        }
    }
}

export default Database;