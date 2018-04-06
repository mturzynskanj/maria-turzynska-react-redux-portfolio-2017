
import React from 'react'
import app from './firebase'

import _ from 'lodash'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects : []
        }
    }
   
    componentWillMount(){     
        let projectsRef = app.database().ref('projects').once('value')
            .then((snapshot)=>this.setState({projects: snapshot.val()}))    
    }
  

    render(){
        console.log('this state ', this.state.projects);
       
        let sortedProjects = _.sortBy(this.state.projects, (project) => project.id).reverse()
          
        return (       
             <ul>  
                    {
                        _.map(sortedProjects, (project)=>{
                            return <li key={project.name}>{project.name} -- {project.url}</li>
                        }) 
                    }                     
            </ul>         
        )  
    }
}


export default App;


/*

  _.map(this.state.projects, (project)=>(
                    return <li>{project.name} -- {project.url}</li>
                    ))   



*/