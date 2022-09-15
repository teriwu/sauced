function MainPage () {

  return (
    <>
      <div className='container'>
        <div className="px-4 py-5 my-5 text-center">
          <img className="bg-white rounded shadow d-block mx-auto mb-4" src="../sauce.png" alt="sauce" width="600"/>
          <h1 className="display-5 fw-bold">LOST IN THE SAUCE</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Find reviews of restaurants or review them yourself!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/restaurants" className="btn btn-primary btn-lg px-4 gap-3">Find a Restaurant</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;