//Importing React
import React from 'react';
import { NavLink } from 'react-router-dom';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

//Importing Nav
import Nav from '../../../Ui/Navbar/Nav';

//Importing Css
import classes from './ServiceSeeker.css';

const ServiceSeekerL = (props) => {
    return(
        <Aux>
            <Nav 
                first={"Forgot Password"}
                second={"Trouble Logging In"}
                third={"Sign In"}
                fourth={"About Us"}
            />
            <div className={classes.outerDiv}>
                <h1 className={classes.signup}>Login</h1>
            </div>
            <div className={classes.outerDiv1}>
                <form>
                    <input 
                        value={props.user.fname}
                        onChange={props.handleInput}
                        name="fname" 
                        placeholder="Enter First Name"/>
                    <br />
                    <br />
                    <input 
                        value={props.user.lname}
                        onChange={props.handleInput}
                        name="lname" 
                        placeholder="Enter Last Name"/>
                    <br />
                    <br />
                    <input
                        value={props.user.password}
                        onChange={props.handleInput} 
                        name="password" 
                        placeholder="Enter Password"/>
                    <br />
                    <button onClick={props.PostData} className={classes.button}>Login</button>
                    <br />
                    <NavLink to ="/signupService">New to SSP? SignUp</NavLink>
                </form>
            </div>
        </Aux>
    )
}

export default ServiceSeekerL;