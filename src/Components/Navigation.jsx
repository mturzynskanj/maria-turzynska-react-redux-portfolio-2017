
import React from 'react'
import {NavLink} from 'react-router-dom'



const Navigation = () => 
<header className="banner">
    <div className="header-content">
        <section className="layout">
            <div className="branding v-align"><NavLink to='/'><img src= {require("../images/logo.png")} alt="logo"/></NavLink><span className="sml-txt">201-398-8954</span>
                <ul className="nav">
                    <li><NavLink to='/aboutThisSite'><span>&#123;</span>About this  site<span>&#125;</span></NavLink></li>
                    <li><NavLink to='/aboutMe'><span>&#123;</span>About Me<span>&#125;</span></NavLink></li>
                    <li><NavLink to='/resume'><span>&#123;</span>Resume<span>&#125;</span></NavLink></li>
                    <li><NavLink to='/portfolio'><span>&#123;</span>Portfolio<span>&#125;</span></NavLink></li>
                </ul>
            </div>
        </section>
    </div>
</header>
  
export default Navigation