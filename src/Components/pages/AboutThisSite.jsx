
import React from 'react'
import { Wrapper, Page } from '../../styled/styledGlobal'


const AboutThisPage = () =>
    <Page>
        <h2>About this site </h2>
        <ul className="indented-list">
            <strong>This site was created using following technologies:</strong>
            <li>
                1. Webpack
                <p>
                    Used style-loader, css-loader and sass-loader to minify and bundle stylesheets files <br />
                    Used babel-loader for processing jsx pages <br />
                    Used file-loader for processing jpeg and png files <br />
                    Used HtmlWebpackPlugin to dynamically generate index.html  <br />
                    Used ExtractTextPlugin to move all css modules into one bundled css file <br />
                </p>
            </li>

            <li>2. React, Redux, React Router v4, Firebase
                <p>
                    This website is implemented as a Single Page Application. <br />
                    Database of the projects is stored as JSON in the Firebease Realtime Database  <br />
                    The application state is managed in the Redux store through actions and reducers<br />
                    Routing of this applications is manged with React Router v4
                </p>
            </li>

            <li>2. Sass
                <p>
                    Layout of the page is implemented with Flexbox. <br />
                    For styling and visual effects I used Sass preprocessor.<br />
                    I created multiple sass mixin functions that I repeatedly used  to
                    implement animations and transitions.

                </p>
            </li>

            <li>3. Font Awesome Library</li>
        </ul>
    </Page>



export default AboutThisPage