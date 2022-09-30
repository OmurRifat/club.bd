import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div>
            <div className="questions">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyzMEuvhVrHcEWnarEh-VtRi6uzFIZ-r58w&usqp=CAU" alt="" />
                </div>
                <div>
                    <h2>How does React works?</h2>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
            </div>
            <div className="questions">
                <div>
                    <img src="https://tutorialslink.com/Article_img/Blog_image/1d6e92fd-04f5-40e5-8051-94fd72b914df.jpg" alt="" />
                </div>
                <div>
                    <h2>Difference between Props & State.</h2>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
            </div>
            <div className="questions">
                <div>
                    <img src="https://blog.alexdevero.com/wp-content/uploads/2021/04/26-04-21-react-usestate-hook-in-action-blog.jpg" alt="" />
                </div>
                <div>
                    <h2>What is the use of useEffect except data fetch?</h2>
                    <p>useEffect uses except data fatching: <br />
                        Running on state change: validating input field.
                        Running on state change: live filtering.
                        Running on state change: trigger animation on new array value.
                        Running on props change: update paragraph list on fetched API data update.
                        Running on props change: updating fetched API data to get BTC updated price. </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;