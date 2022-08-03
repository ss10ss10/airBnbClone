import hamilton from '../Styles/Images/hamilton.jpg';
import alex from '../Styles/Images/alex.png';

import '../Styles/mainbody.css';

const Mainbody = () => {
    return (
        <div className='container'>
            <img src={hamilton} className="card1"></img>
            <img src={alex} className="card2"></img>
        </div>
    );
}

export default Mainbody;