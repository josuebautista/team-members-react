import { Link } from 'react-router-dom';
import home from './images/home.png'

const Nav = () => {
  return (
    <div className="container-fluid" style={{background: '#FCFAFD'}}>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img className="bi me-2" width="40" height="35" src={home} alt='Logo'/>
          <span className="fs-4">Simple header</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
          <li className="nav-item"><Link to="/GroupedTeamMembers" className="nav-link">Teams</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link">Pricing</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link">FAQs</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link">About</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Nav