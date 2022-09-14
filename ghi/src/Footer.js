import { Link } from 'react-router-dom'

function Footer() {

  return(
    <footer className="text-center text-lg-start bg-light text-muted mt-auto">
      <section className="d-flex justify-content-between p-4 border-bottom">
        <div className="me-5 d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="/" className="me-4 text-reset">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i class="bi bi-google"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Lost In The Sauce
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="https://www.linkedin.com/in/bennyhuang97/"
                target="_blank" className="text-reset">Benny</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/jkim14/"
                target="_blank" className="text-reset">Jacob</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/lakhvinder-dhanoya-b82695184/"
                target="_blank" className="text-reset">Lucky</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/ryanspurlock/"
                target="_blank" className="text-reset">Ryan</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/teriwu/"
                target="_blank" className="text-reset">Teri</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="https://gitlab.com/lost-in-the-sauce/mod-3-group-11"
                target="_blank" className="text-reset">Git</a>
              </p>
              <p>
                <Link to="/about" className="text-reset">About</Link>
              </p>
              <p>
                <Link to="/credits" className="text-reset">Credits</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="bi bi-house-door-fill"></i> New York, NY 10012, US</p>
              <p><i class="bi bi-envelope-fill"></i> info@lostinthesauce.com</p>
              <p><i class="bi bi-telephone-fill"></i> + 01 234 567 88</p>
              <p><i class="bi bi-printer-fill"></i> + 01 234 567 89</p>
            </div>

          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: '#eeeeee'}}>
        <a className="text-reset fw-bold" href="https://gitlab.com/lost-in-the-sauce/mod-3-group-11">&copy; 2022 Lost In The Sauce</a>
      </div>
    </footer>
    
  )
}

export default Footer;