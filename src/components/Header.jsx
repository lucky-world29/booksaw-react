import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg main-header">
      <div className="container header-container">

        <a className="logo navbar-brand"><h1>BOOKSAW</h1></a>

        {/* Hamburger */}
        <button
  className="navbar-toggler animated-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#booksawNav"
>
  <span></span>
  <span></span>
  <span></span>
</button>
        {/* Menu */}
        <div className="collapse navbar-collapse" id="booksawNav">
          <ul className="navbar-nav ms-auto nav-menu">

            <li className="nav-item"><a className="nav-link ">Home</a></li>
            <li className="nav-item"><a className="nav-link">Featured</a></li>
            <li className="nav-item"><a className="nav-link">Popular</a></li>
            <li className="nav-item"><a className="nav-link">Offer</a></li>
            <li className="nav-item"><a className="nav-link">Articles</a></li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

