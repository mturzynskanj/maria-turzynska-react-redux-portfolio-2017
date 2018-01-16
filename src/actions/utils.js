

import {GET_PROJECTS} from '../actionTypes'

import _ from 'lodash'


export const fromDB = (db, dispatch) => {
    db.ref('projects').once('value')
        .then((snapshot) =>  dispatch ( 
            { 
                type: GET_PROJECTS, 
                projects: _.sortBy(_.values(snapshot.val()),(project)=> project.id).reverse()
            } 
        ))
        }
    


/*
 let projectsRef = fire.database().ref('projects').once('value')
            .then((snapshot)=>this.setState({projects: snapshot.val()}))  

*/
