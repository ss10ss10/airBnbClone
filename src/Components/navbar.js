import bnbLogo from '../Styles/Images/airbnb.png';
import one from '../Styles/Images/one.jpg';
import two from '../Styles/Images/two.jpg';
import three from '../Styles/Images/three.jpg';
import four from '../Styles/Images/four.jpg';
import five from '../Styles/Images/five.jpg';
import six from '../Styles/Images/six.jpg';
import seven from '../Styles/Images/seven.jpeg';
import eight from '../Styles/Images/eight.jpeg';
import nine from '../Styles/Images/nine.jpeg';
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <div>
        <header className="header" >
            <img src={bnbLogo} className="logo"/>
        </header>
        <div>
            <img src={one} className="im1"/>
            <img src={two} className="im2"/>
            <img src={three} className="im3"/>
            <img src={four} className="im4"/>
            <img src={five} className="im5"/> 
            <img src={six} className="im6"/>
            <img src={seven} className="im7"/>
            <img src={eight} className="im8"/>
            <img src={nine} className="im9"/>
        </div>
        <div className="body">
            <h4>Online Experiences</h4>
            <p className="bodyPara">
                Join unique interactive activities led 
                by one-of-a-kind hosts-all without 
                leaving home.
            </p>
        </div>
    </div>
  );
}

export default Navbar;
