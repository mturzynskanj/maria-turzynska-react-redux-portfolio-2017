
import React from 'react'

import ConnectedProjectList from '../../Containers/ProjectListContainer.jsx'

import {Wrapper, Page } from '../../styled/styledGlobal'

const Portfolio = () => {
    return (
        <Page>
            <h2>Portfolio</h2>  
            <ConnectedProjectList />        
        </Page>
    )
}

export default Portfolio