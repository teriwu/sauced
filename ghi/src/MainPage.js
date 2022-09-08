import React from 'react';
import { Link } from 'react-router-dom';


class MainPage extends React.Component {
  render () {
    return (
      <>
        <div className='container'>
          <div className="px-4 py-5 my-5 text-center">
            <img className="bg-white rounded shadow d-block mx-auto mb-4" src="https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB11h0Lae3tHKVjSZSgq6x4QFXaK%2Fvanzlife-Plastic-squeeze-sauce-bottle-home-ketchup-salad-squeeze-bottle-seasoning-bottle-sauce-honey-jam-juice.jpg" width="600"/>
            <h1 className="display-5 fw-bold">LOST IN THE SAUCE</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Find reviews of restaurants or review them yourself!
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/restaurants" className="btn btn-primary btn-lg px-4 gap-3">Find a Restaurant</Link>
              </div>
            </div>
          </div>
        </div>   
      </>
    );
  }
}

  export default MainPage;
  