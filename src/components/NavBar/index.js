import "./navBar.css"
import TVSEurogrip from '../../images/TVSEurogrip.jpg'
import tvsMobility from '../../images/tvsMobility.png';

export const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary biasnavbar">
            <div className="container-fluid">
                <img src={TVSEurogrip} alt='company logo' />
                <span className="navbar-brand mb-0 h1">BIAS CUTTER</span>
                <img src={tvsMobility} alt='company logo' />
            </div>
        </nav>
    )
}