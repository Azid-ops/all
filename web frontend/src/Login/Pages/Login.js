//Importing React
import React from 'react';

//Importing Auxiliary Component
import Aux from '../../Auxiliary/Auxiliary';

//Importing Css
import classes from './Login.css';

//Importing Nav
import Nav from '../../Ui/Navbar/Nav';
import { NavLink } from 'react-router-dom';

//Creating Functional Component
const Login = () =>{
    return(
        <Aux>
            <Nav   
                first = {"Material Provider"}
                second = {"Service Provider"}
                third = {"Service Seeker"}
                fourth = {"Admin Login"}
            />
            <div className={classes.continue}>
                <h2>Login as:</h2>
                <div className={classes.material} >
                    <NavLink className={classes.materials} to="/materialProvider">
                        Login as Material Provider
                    </NavLink>
                </div>
                
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/serviceProvider">
                        Login as Service Provider
                    </NavLink>
                </div>
                
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/serviceSeeker">
                        Login as Service Seeker
                    </NavLink>
                </div>
                
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/serviceProvider">
                        Login as Administrator
                    </NavLink>
                </div>
                <br />
                <br />
                <p>Or</p>
                <p>Service Seeker can login with below services.</p>
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/">
                        Login as Google
                    </NavLink>
                </div>
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/">
                        Login as Facebook
                    </NavLink>
                </div>
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/">
                        Login as Apple
                    </NavLink>
                </div>
                <div className={classes.material}>
                    <NavLink className={classes.materials} to="/">
                        Login as Instagram
                    </NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default Login;