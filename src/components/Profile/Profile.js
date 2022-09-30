import React, { useState } from 'react';
import './Profile.css';
import img from '../../images/Rifat.jpg';

const Profile = ({ duration, gap }) => {
    // const duration = props.duration;
    const [breaktime, setBreaktime] = useState(0);
    const { a, b, c, d } = gap;
    const handleBreak = (time) => {
        setBreaktime(time);
    }

    return (
        <div className='user-info'>
            <div className="display-user">
                <img src={ img } alt="" />
                <div>
                    <h4>Omur Rifat</h4>
                    <small>Comilla, Bagladesh</small>
                </div>
            </div>
            <div className="user-details">
                <div>
                    <p> <strong>75</strong>kg</p>
                    <p>Wight</p>
                </div>
                <div>
                    <p> <strong>6.5</strong></p>
                    <p>Height</p>
                </div>
                <div>
                    <p> <strong>25</strong>yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className="user-break">
                <p onClick={ () => { handleBreak(a) } }>{ a }s</p>
                <p onClick={ () => { handleBreak(b) } }>{ b }s</p>
                <p onClick={ () => { handleBreak(c) } }>{ c }s</p>
                <p onClick={ () => { handleBreak(d) } }>{ d }s</p>
            </div>
            <h3>Exercise Details</h3>
            <div className="exercise-detail">
                <h5>Playing time :</h5>
                <p>{ duration }s</p>
            </div>
            <div className="exercise-detail">
                <h5>Break time :</h5>
                <p>{ breaktime }s</p>
            </div>
            <button>Game Over</button>
        </div>
    );
};

export default Profile;