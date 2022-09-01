/* Taken from conference-go */
function MainPage() {
    return (
      <>
        <div className="my-5 containerw">
          <div className="input-group">
              <input type="search" className="form-control rounded" placeholder="Find sauce" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-secondary">Search</button>
          </div>
        </div>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">LOST IN THE SAUCE</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Find reviews of restaurants or review them yourself!
            </p>
          </div>
        </div>
      </>
    );
  }
  
  export default MainPage;
  