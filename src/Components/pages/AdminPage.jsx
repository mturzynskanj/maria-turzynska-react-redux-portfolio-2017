import React, { Component } from 'react';
import app_firebase  from '../../firebase'




class AdminPage extends Component {
    constructor(props){
        super(props);

    this.updateProject= this.updateProject.bind(this);
    }

    updateProject(){
           alert ('inside update project....');
            // app_firebase.database().ref('projects/Celina').set({
            //   information: '....'
            // });   
    }
    render() {
        return (
            <div className="page">
                <h3>Admin Page ... </h3>
                <button onClick={this.updateProject}>Update Project </button>
            </div>
        );
    }
}

export default AdminPage;