var firebaseConfig = {
    apiKey: "AIzaSyBPPs2vC1vuZV3uQKSNWyAqEelZwR2NT0U",
    authDomain: "githubio-b4a77.firebaseapp.com",
    databaseURL: "https://githubio-b4a77-default-rtdb.firebaseio.com",
    projectId: "githubio-b4a77",
    storageBucket: "githubio-b4a77.appspot.com",
    messagingSenderId: "243003904340",
    appId: "1:243003904340:web:abd4b6f3305fa9953cb8c1",
    measurementId: "G-ZZDP4QSF3R"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function boardWhite(){
    let fb= firebase.database()



    fb.ref('board/projects').set({
        project:project,
        ts:ts,
        technical:technical,
        during:during,
        team:team,
        target:target,
        develop:develop,
        description:description,
        issue:issue,
        url:url,
    });
}

function boardRead(){
    let fb= firebase.database()
    fb.ref("board/projects").on("value", function(data){
        console.log(data.val())
    })
}

$(document).ready(function() {
    boardRead();
});