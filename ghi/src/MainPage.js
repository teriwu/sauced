function MainPage () {

  return (
    <>
      <div className='container'>
        <div className="sauce-container sauce-font text-white px-4 py-5 text-center">
          <img className="bg-white rounded shadow d-block mx-auto" src="https://cdn-icons-png.flaticon.com/512/3082/3082037.png
" alt="sauce" width="600"/>
          <h1 className="centered display-5 fw-bold">LOST IN THE SAUCE</h1>
        </div>
        <div className="col-lg-6 mx-auto">
          <p className="text-center lead mb-4">
            Find reviews of restaurants or review them yourself!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/restaurants" className="btn btn-primary btn-lg px-4 gap-3">Find a Restaurant</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;