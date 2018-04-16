
import React from 'react'
import {Wrapper, Page } from '../../styled/styledGlobal'


const AboutMe = () =>
    <Page>
        <h2>About Me</h2>
        <div className="about-me-wrapper">
            <ul className="indented-list">
                <p><strong> This is the online home of Maria Turzynska, a web developer living and working in Bergen County, NJ.</strong></p>
                <p>
                    While I am well-versed in core front end web languages such as HTML, JavaScript, and CSS from my 10 years of experience,
                I am excited by the dynamic and evolving web environment.<br />
                    I have been particularly interested in libraries like Raect, Redux  and have spent a lot of my spare time learning these new technologies.
                <br />
                    By using modern standards like CSS3, Flexbox, Ecma6, Lodash.js, I can dramatically reduce the cost of building and maintaining a website.
            </p>
                <p>
                    I helped  shape design decisions related to performance while accounting for the needs of end users and businesses.
                <br />
                    I am strong advocate for development best practices including progressive enhancement, accessibility, performance, scalability, and maintainability.
            </p>
                <li><strong>Hobbies</strong>
                    <p>Biking, Gardening, Beading, Hiking in  the Wild West and volunteering in no kill Animal Shelter</p>
                </li>

                <li><strong>Weaknesses</strong>
                    <p>Chooocooolate !!!</p>
                </li>
            </ul>
        </div>
   </Page>


export default AboutMe
