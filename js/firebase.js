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
};

function boardRead(){
    let fb= firebase.database()
    let fbdata;

    fb.ref("board/projects").on("value", function(data){
        fbdata = data.val();

        let projectDiv = document.getElementById('projects');

        if (fbdata != null){
            for (let pro in fbdata){
                let proName = null;
                let proTeam = null;
                let proDev = null;
                let proDesc = null;
                let proTraget = null;
                let proTech = null;
                let proUrl = null;
                let proTs = null;
                let proDuring = null;

                proName = fbdata[pro]['name'];
                proTeam = fbdata[pro]['team'];
                proDev = fbdata[pro]['develop'];
                proDesc = fbdata[pro]['desciption'];                proName = fbdata[pro]['name'];
                proTraget = fbdata[pro]['target'];                proName = fbdata[pro]['name'];
                proTech = fbdata[pro]['technical'];                proName = fbdata[pro]['name'];
                proUrl = fbdata[pro]['url'];                proName = fbdata[pro]['name'];
                proTs = fbdata[pro]['ts'];
                proDuring = fbdata[pro]['during'];               

                let addDiv = document.createElement('div');
                addDiv.setAttribute('id', `pro_${proName}`)
                addDiv.setAttribute('class',"d-flex flex-column flex-md-row justify-content-between mb-5" )

                let text = `
                    <div class="flex-grow-1">
                        <h4 class="mb-0">${proName}</h4>
                        <li>구성원 : ${proTeam}</li>
                        <li>개발 내용 : ${proDev}</li>
                        <li>설명 : ${proDesc}</li>
                        <li>사용 대상 : ${proTraget}</li>
                        <li>사용된 기술 : ${proTech}</li>
                        <li>참고 URL : ${proUrl}</li>
                        <li>제작 기간 : ${proDuring}</li>
                    </div>
                `;

                addDiv.innerHTML = text;
                projectDiv.appendChild(addDiv)

            }
        }else{
            return
        }

    })
};
