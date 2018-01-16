
import React from 'react'
import {NavLink} from 'react-router-dom'

/*
 <li><NavLink to='/aboutThisSite'><span>&#123;</span>About this site<span>&#125;</span></NavLink></li>
                    <li><NavLink to='/aboutMe'><span>&#123;</span>About Me<span>&#125;</span></NavLink></li>
                    <li><NavLink to='/resume'><span>&#123;</span>Resume<span>&#125;</span></NavLink></li>
                    <li><NavLink to='/portfolio'><span>&#123;</span>Portfolio<span>&#125;</span></NavLink></li>



*/

const  Home = ()=> {
    return (
        <section className='page'>
            <h2>Better, Faster, Cleaner Code </h2>
            <section className="spinning-nav">
                <div className="spinner-block">

                    <div className="icon-wrap">
                        <NavLink className="effect-opacity " to='/aboutThisSite'>
                            <div className="effect-spin"><i className="fa fa-thumb-tack"></i></div>
                            <div className='md-txt'> About this site  <i className="fa fa-caret-right"></i></div>
                        </NavLink>
                    </div>
                </div>
                <div className="spinner-block">
                    <div className="icon-wrap">
                        <NavLink className="effect-opacity" to='/aboutMe'>
                            <a className="effect-opacity effect-spin" href="aboutMe"><i className="fa fa-user"></i></a>                      
                            <div className='md-txt'>About Me <i className="fa fa-caret-right"></i></div>
                        </NavLink>
                    </div>
                </div>
                <div className="spinner-block">
                    <div className="icon-wrap">
                        <NavLink className="effect-opacity" to='/resume'>
                            <a className="effect-opacity effect-spin" href="myResume"><i className='fa fa-thumbs-o-up'></i></a>                      
                            <div className="md-txt"> My Resume <i className="fa fa-caret-right"></i></div>
                        </NavLink>
                    </div>
                </div>
                <div className="spinner-block">
                    <div className="icon-wrap">
                        <NavLink className="effect-opacity"  to="/portfolio">
                            <a className="effect-opacity effect-spin" href="portfolio"><i className='fa fa-gears'></i></a>                       
                            <div className="md-txt"> My Portfolio <i className="fa fa-caret-right"></i></div>
                        </NavLink>
                    </div>
                </div>
            </section>
        </section>
    )  
}

export default  Home