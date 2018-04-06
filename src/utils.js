
import app from './firebase'

export function getProjects(){
    return  app.database().ref('projects').once('value')
}