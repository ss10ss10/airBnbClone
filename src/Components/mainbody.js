import hamilton from '../Styles/Images/hamilton.jpg';
import alex from '../Styles/Images/alex.png';

import '../Styles/mainbody.css';

const Mainbody = (props) => {
    return (
        <div className='card'>
            <img src={hamilton} className="card1-image"></img>
            <div className="card1-stats">
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • {props.country}</span>
            </div>
            <p className='card1-stats'>{props.title}</p>
            <p className='card1-stats'><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export default Mainbody;