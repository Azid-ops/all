//Importing React from react;
import React from "react";

//Importing Images
import first from '../../Images/first.png';
import second from '../../Images/second.png';
import third from '../../Images/third.png';
import fourth from '../../Images/fourth.jpg';
import fifth from '../../Images/fifth.png';
import sixth from '../../Images/sixth.png';
import seventh from '../../Images/seventh.png';
import eighth from '../../Images/eight.png';
import ninth from '../../Images/ninth.jpg';
import tenth from '../../Images/tenth.jpg';
import eleventh from '../../Images/eleventh.jpg';

//Importing Css
import classes from './Service.css';

const Service = () => {
    return(
        <div className={classes.workers}>
            <div className={classes.first}>
                <img src={first} alt="Construction Crew" />
                <p>Construction Crew</p>
            </div>
            <div className={classes.first}>
                <img src={second} alt="Commerical Installer and Assembler"/>
                <p>Commerical Installer and Assembler</p>
            </div>
            <div className={classes.first}>
                <img src={third} alt="Warehouse Staff"/>
                <p>Warehouse Staff</p>
            </div>
            <div className={classes.first}>
                <img src={fourth} alt="Movers" />
                <p>Movers</p>
            </div>
            <div className={classes.first}>
                <img src={sixth} alt="Land Scapers" />
                <p>Land Scapers</p>
            </div>
            <div className={classes.first}>
                <img src={seventh} alt="Resturant Staffing" />
                <p>Resturant Staffing</p>
            </div>
            <div className={classes.first}>
                <img src={eighth} alt="Commercial Cleaners" />
                <p>Commercial Cleaners</p>
            </div>
            <div className={classes.first}>
                <img src={ninth} alt="Customer Service Representative" />
                <p>Customer Service Representative</p>
            </div>
            <div className={classes.first}>
                <img src={tenth} alt="Electrician" />
                <p>Electrician</p>
            </div>
            <div className={classes.first}>
                <img src={eleventh} alt="Plumber" />
                <p>Plumber</p>
            </div>
        </div>
    )
}

export default Service;