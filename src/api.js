import app_firebase from './firebase'

import _ from "lodash"

//_.sortBy(_.values(snapshot.val()),(project)=> project.id).reverse()

let db = app_firebase.database();
let auth = app_firebase.auth();
console.log('inside api...');

// return app_firebase.database().ref('/projects/' + name).once('value').then(function (snapshot) {
//     //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//     // ...
//     console.log('snapshot', snapshot.val());
//     var project = snapshot.val()
//     console.log('here is the project ......', project);
// });

export default {
    projects: {
        get: () => db.ref('projects').once('value')
            .then(snapshot => _.sortBy(_.values(snapshot.val()), (project) => project.id).reverse())
    },

    project: {
        get: (name) => db.ref('/projects/' + name).once('value')
            .then(snapshot=>snapshot.val()),

        update: (data) => db.ref('/projects/'+ data.shortName).set(data).then(response => console.log('response is', response))
    },

   

    user: {
        login: (credential) => auth.signInWithEmailAndPassword(credential.email, credential.password)
                .then(currentUser => currentUser),

        logout: () => auth.signOut()             
    }
}
