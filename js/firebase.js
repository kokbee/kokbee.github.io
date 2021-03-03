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

    // values
    let project = document.getElementById('project').value;
    let technical = document.getElementById('technical').value;
    let start = document.getElementById('startdate').value;
    let end = document.getElementById('enddate').value;
    let team = document.getElementById('team').value;
    let target = document.getElementById('target').value;
    let develop = $('#develop').val();
    let description = $('#description').val();
    let url = document.getElementById('url').value;
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let ts = date+' '+time;

    console.log(develop, description)

    // input
    fb.ref(`board/projects/${project}`).set({
        name:project,
        technical:technical,
        during:{
            "start":start,
            "end":end
        },
        team:team,
        target:target,
        develop:develop,
        description:description,
        url:url,
        ts:ts,
    });

    setTimeout(() => window.location.href='https://kokbee.github.io/index.html',1500);
}

function boardRead(){
    let fb= firebase.database()
    fb.ref("board/projects").on("value", function(data){
        console.log(data.val())
    })
}
