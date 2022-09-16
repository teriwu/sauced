const About = () => {

  return (
    <div className="container mt-5">
      <h1 className="text-center text-uppercase my-5 display-1">LOST IN THE SAUCE</h1>
      <div className="row">
        <div className="align-self-center col-md-6">
          <img className="mx-auto" src="https://cdn-icons-png.flaticon.com/512/3985/3985098.png" alt="collab" width="250px" />
          {/* <p className="h3 text-center">H3 text</p> */}
        </div>
        <div className="d-flex align-content-center flex-wrap col-md-6">
          <p className="text-start">Hello there! Our team members are <strong>Benny</strong>, <strong>Jacob</strong>, <strong>Lucky</strong>, <strong>Ryan</strong>,and <strong>Teri</strong>. We wanted to create a web app of information about restaurants. Users are able to create a new restaurant and fill in details such as its business hours and location. Afterwards any user can create a review for any listed restaurant. </p>
        </div>
      </div>
    </div>
  )
}

export default About;