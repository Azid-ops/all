//Importing React
import React from 'react';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

//Importing Nav
import Nav from '../../../Ui/Navbar/Nav';

//Importing Css
import classes from './ServiceSeeker.css';

const ServiceSeeker = (props) => {
    return(
        <Aux>
            <Nav 
                first={"Forgot Password"}
                second={"Trouble Logging In"}
                third={"Sign In"}
                fourth={"About Us"}
            />
            <div className={classes.outerDiv}>
                <h1 className={classes.signup}>SignUp</h1>
            </div>
            <div className={classes.outerDiv1}>
                <form>
                    <input 
                        value={props.user.fname}
                        onChange={props.handleInput}
                        name="fname" 
                        placeholder="Enter Your Email id"/>
                    <br />
                    <br />
                    <button onClick={props.PostData} className={classes.button}>Reset</button>
                </form>
            </div>
        </Aux>
    )
}

export default ServiceSeeker;