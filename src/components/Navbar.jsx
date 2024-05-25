

function Navbar() {
  return (
    <>
    <div className="navigator__menu">
        <div className="logoArea">
          <div className="logo__div">
          <img className="logo__oflife" alt="" src="./logo.jpeg"/>
        </div>
          <div className="companyname">
            <p className="logo__text">Cloudtop G</p>
          </div>

        </div>

        <div className=" menu__area">
          <div>
            <p className="menu">Home</p>
          </div>
          <div>
            <p className="menu">About</p>
          </div>
          <div>
            <p className="menu">Services</p>
          </div>
          <div>
            <p className="menu">Contact</p>
          </div>

        </div>

        <div className="button__area">
          <div>
            <button className="menu__buttonone"> Get started  </button>
          </div>
          <div>
            <button className="menu__buttontwo"> Log out  </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
