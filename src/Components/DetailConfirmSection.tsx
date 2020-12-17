import React from 'react';


const DetailConfirmSection = () => {
    return (
      <div className="row">
          <div className="col-10">
              <input type="text" className="form-control" placeholder="Phone number"/>
          </div>
          <button className="btn btn-danger col-2">Verify</button>
      </div>
    );
}

export default DetailConfirmSection;