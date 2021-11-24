//Importing React 
import React from "react";

//Importing Nav
import Nav from '../../Ui/Navbar/Nav';

//Importing Aux Component
import Aux from '../../Auxiliary/Auxiliary';

//Importing css file
import classes from './Home.css';

//Importing Service Page
import Service from "../../Services/Pages/Service";
import MaterialProvider from "../../Material Providers/Pages/MaterialProviders";

//Creating Home Functional Component
const Home = () =>{
    return(
        <Aux>
            <Nav first={"Hire Workers"}
                second={"Find Work"} 
                third={"Resources"} 
                fourth={"TRY GET WORKERS"} 
                fifth={"Login"}
            />
            <div className={classes.outerDiv}>
                <div className={classes.browse}>
                    <h1 className={classes.browseText}>Browse Workers</h1>
                    <p>Search Worker Profiles to Find the Right person for your join right now</p>
                    <div className={classes.skill}>
                        <h2 className={classes.bySkill}>By Skills</h2>
                        <p>Browse over 3000 Skills</p>
                        <input placeholder="Search Skills"/>
                        <br />
                        <br />
                    </div>
                    <div className={classes.region}>
                        <h2>By Region</h2>
                        <p>Browse our top Regions</p>
                        <input placeholder="Search Region"/>
                        <br />
                        <br />
                    </div>
                    <br />
                </div>
            </div>
            <br />
            <br />
            <p>From coast to coast, SSP has thousands of available Workers looking for their next Gig. Use our worker search functionality to identify skilled Workers in your area.</p>
            <div className={classes.localOuter}>
                <h1 className={classes.local}>Hire Local Workers</h1>
                <p>Whether your job requires an experienced hospitality Worker, security professional, or customer service skills, SSP will source the expertise you seek. Browse our top skill categories below.</p>
            </div>
            <Service />
            <MaterialProvider />
        </Aux>
    )
}

//Exporting Home
export default Home;