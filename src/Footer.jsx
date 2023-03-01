import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import github from './images/github.png';
import bootstrap from './images/bootstrap.png';

const Footer = () => {
  return (
    <div className='container'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">

          <span className="mb-3 mb-md-0 text-muted">
          <img src={bootstrap} width={24} height={24} alt='bootstrap'/> &copy; 2022 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><img src={github} width={24} height={24} alt='github' /></li>
          <li className="ms-3"><img src={twitter} width={24} height={24}  alt='twitter'/></li>
          <li className="ms-3"><img src={facebook} width={24} height={24}  alt='facebook'/></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer