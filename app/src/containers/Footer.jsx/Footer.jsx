import './Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__div links__container">
        <a href="" className='links__container__element'>
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="" className='links__container__element'>
          <i className="fab fa-github-alt"></i>
        </a>
        <a href="" className='links__container__element'>
          <i className="fab fa-youtube"></i>
        </a>
        <a href="" className='links__container__element'>
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <div className="Footer__div">
        <p>Copyright © 2022 KodeMeet by KodePrint</p>
        <p>Created by Kevin Palma</p>
      </div>
    </footer>    
  )
}

export default Footer