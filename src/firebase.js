

import firebase  from 'firebase'

var config = {
    apiKey: "AIzaSyDmHtzS5qsZ1I_uQ79YsMxBQOwDbsHFz4M",
    authDomain: "mariaturzynska-portfolio.firebaseapp.com",
    databaseURL: "https://mariaturzynska-portfolio.firebaseio.com",
    projectId: "mariaturzynska-portfolio",
    storageBucket: "mariaturzynska-portfolio.appspot.com",
    messagingSenderId: "442209210216"
  };

  var app_firebase= firebase.initializeApp(config);

  export default app_firebase;