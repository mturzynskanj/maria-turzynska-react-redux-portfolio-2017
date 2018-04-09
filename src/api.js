import app_firebase from './firebase'

import _ from "lodash"

//_.sortBy(_.values(snapshot.val()),(project)=> project.id).reverse()

let db = app_firebase.database();
let auth = app_firebase.auth();
console.log('inside api...');

export default {
    projects: {
        get: () => db.ref('projects').once('value')
            .then(snapshot => _.sortBy(_.values(snapshot.val()), (project) => project.id).reverse())
        //.then(snapshot => console.log('snapshot...',snapshot.val()))
    },

    user: {
        login: (credential) => auth.signInWithEmailAndPassword(credential.email, credential.password)
                .then(currentUser => currentUser)
                // .catch((error) => {
                //     console.log('login error ', error.message);
                //  }) 
    }
}
