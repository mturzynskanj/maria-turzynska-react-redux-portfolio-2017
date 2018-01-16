
import fire from './firebase'

export function getProjects(){
    return  fire.database().ref('projects').once('value')
}