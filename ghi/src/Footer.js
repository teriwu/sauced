import { Link } from 'react-router-dom'

function Footer() {

  return(
    <footer className="text-center text-lg-start bg-light text-muted mt-auto">
      
      <section className="">
        <div className="container text-center text-md-start my-5">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold mb-3">
                Lost In The Sauce
              </h6>
              <p>What's that sauce?</p>
              <Link to="/"><i className="bi bi-egg-fried"></i></Link>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-3">
                Products
              </h6>
              <p>
                <a href="https://www.linkedin.com/in/bennyhuang97/"
                target="_blank" rel="noreferrer" className="text-reset">Benny</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/jkim14/"
                target="_blank" rel="noreferrer" className="text-reset">Jacob</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/lakhvinder-dhanoya-b82695184/"
                target="_blank" rel="noreferrer" className="text-reset">Lucky</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/ryanspurlock/"
                target="_blank" rel="noreferrer" className="text-reset">Ryan</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/teriwu/"
                target="_blank" rel="noreferrer" className="text-reset">Teri</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-3">
                Useful links
              </h6>
              <p>
                <a href="https://gitlab.com/lost-in-the-sauce/mod-3-group-11"
                target="_blank" rel="noreferrer" className="text-reset">Git</a>
              </p>
              <p>
                <Link to="/about" className="text-reset">About</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
              <p><i className="bi bi-house-door-fill"></i> Lost, Sauce 72823, US</p>
              <p><i className="bi bi-envelope-fill"></i> info@lostinthesauce.com</p>
              <p><i className="bi bi-telephone-fill"></i> + 01 234 567 88</p>
              <p><i className="bi bi-printer-fill"></i> + 01 234 567 89</p>
            </div>

          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: '#e6e6e6'}}>
        <p><a className="text-reset fw-bold" href="https://gitlab.com/lost-in-the-sauce/mod-3-group-11">&copy; 2022 Lost In The Sauce</a></p>
        <p><a href="https://www.flaticon.com/free-icons/sauces" target="_blank" rel="noreferrer" title="sauces icons">Sauces icons created by iconixar - Flaticon</a></p>
        <p><a href="https://www.flaticon.com/free-icons/teamwork" target="_blank" rel="noreferrer" title="teamwork icons">Teamwork icons created by Freepik - Flaticon</a></p>
      </div>
    </footer>
    
  )
}

export default Footer;