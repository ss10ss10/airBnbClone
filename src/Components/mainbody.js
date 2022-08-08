import hamilton from '../Styles/Images/hamilton.jpg';
import alex from '../Styles/Images/alex.png';

import '../Styles/mainbody.css';

const Mainbody = () => {
    return (
        <div className='card'>
            <img src={hamilton} className="card1-image"></img>
            <div className="card1-stats">
                <span>5.0</span>
                <span className="gray">(6) • USA</span>
            </div>
            <p className='card1-stats'>Life Lessons with Hamilton</p>
            <p className='card1-stats'><span className="bold">From $136</span> / person</p>
            <img src={alex} className="card2-image"></img>
        </div>
    );
}

export default Mainbody;