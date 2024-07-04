$(document).ready(function(){
    let isFirstClick = true;
    $("#slideDownButton").click(function(){
        $("#slideDownTest").slideToggle("slow");
        if(isFirstClick){
            $("#manageUser").text("arrow_drop_up");
        } else{
            $("#manageUser").text("arrow_drop_down");
        }
        isFirstClick = !isFirstClick;
    });
});

$(document).ready(function(){
    $("#slideDownButtoninfo").click(function(){
        $("#slideDowninfo").slideToggle("slow");
    });
});

$(document).ready(function(){
    let isFirstClickArticle = true;
    $("#slideDownButtoninfo").click(function(){
        $("#slideDowninfo").slideToggle("slow");
        if(isFirstClickArticle){
            $("#manageArticle").text("arrow_drop_up");
        } else{
            $("#manageArticle").text("arrow_drop_down");
        }
        isFirstClickArticle = !isFirstClickArticle;
    });
});




 
$(document).ready(function(){
    $("#dashboardLink").click(function() {
        $(this).addClass("is-active")
    });
});

$(document).ready(function(){
    let isFirstClick = true;
    $("#slideDownButton").click(function(){
        $("#slideDownTest").slideToggle("slow");
        if(isFirstClick){
            $("#manageUser").text("arrow_drop_up");
        } else{
            $("#manageUser").text("arrow_drop_down");
        }
        isFirstClick = !isFirstClick;
    });
});

$(document).ready(function(){
    let isFirstClickArticle = true;
    $("#slideDownButtoninfo").click(function(e){
        $("#slideDowninfo").slideToggle("slow", function(){
            if(isFirstClickArticle){
                $("#manageArticle").text("arrow_drop_up");
               
            } else{
                $("#manageArticle").text("arrow_drop_down");
            }
            isFirstClickArticle = !isFirstClickArticle;
        });
    });
});


var links = document.querySelectorAll('.CommonElement');

function handleClick(event) {
  links.forEach(function(link) {
    link.classList.remove('is-active');
  });
  event.currentTarget.classList.add('is-active');
  return false;
}

Array.from(links).map(function(link) {
  link.addEventListener('click', handleClick);
});

console.log('current location',window.location.href.slice(22));

switch(window.location.href.slice(22)){
    case'index.html':
        document.querySelector('#dashboard-btn').classList.add('is-active');
        break
    case'addUser.html':
        document.querySelector('#adduserLink').classList.add('is-active');
        break
    case'UserList.html':
        document.querySelector('#userList').classList.add('is-active');
        break
    case'addArticle.html':
        document.querySelector('#addArticle').classList.add('is-active');
        break
    case'ArticleList.html':
        document.querySelector('#ArticleList').classList.add('is-active');
        break
}


///////////////////////////////////////////////////

var sendme = "";
var send = "";
if(window.innerWidth <= 363){
    send = document.getElementById('send');
    sendme = send.textContent || send.innerText;
    toContinue();
}
if(window.innerWidth >=363){
    changeValues();
}

function changeValues() {
    send.innerText = sendme;
}

function toContinue(){
    let sendeeee = document.getElementById('send');
    let sendmeeee = send.textContent || send.innerText;
    sendeeee.innerText = 'ادامه';
}

function saveValuesUser(){
    
    if(document.getElementById('name').value !=="" && document.getElementById('family').value !==""){
        let name2 = document.getElementById('name').value;
        let family = document.getElementById('family').value;
        let nameFields = document.getElementById('nameFields');
        nameFields.style.setProperty('display', 'none', 'important');
        let phoneFields = document.getElementById('phoneFields');
        phoneFields.style.setProperty('display', 'block', 'important');
        send = document.getElementById('send');
        send.style.backgroundColor = '#9F9F9F';
        let backgroundColorOne = document.getElementById("numbers1");
        backgroundColorOne.style.setProperty('background', '#00643C', 'important');
        backgroundColorOne.style.setProperty('color', 'white', 'important');

        let backgroundColorTwo = document.getElementById("numbers2");
        backgroundColorTwo.style.setProperty('background', 'white', 'important');
        backgroundColorTwo.style.setProperty('color', '#00643C', 'important');
        backgroundColorTwo.style.setProperty('border-color', '#00643C', 'important');
    } 
    if(document.getElementById('phone').value !==""){

        let phone = document.getElementById('phone').value;
        let role = document.getElementById('role').value;
        phoneFields.style.setProperty('display', 'none', 'important');
        let passwordFields = document.getElementById('passwordFields');
        passwordFields.style.setProperty('display', 'block', 'important');
        send.style.backgroundColor = '#9F9F9F';
        changeValues();
        let backgroundColorTwo = document.getElementById("numbers2");
        backgroundColorTwo.style.setProperty('background', '#00643C', 'important');
        backgroundColorTwo.style.setProperty('color', 'white', 'important');

        let backgroundColorThree = document.getElementById("numbers3");
        backgroundColorThree.style.setProperty('background', 'white', 'important');
        backgroundColorThree.style.setProperty('color', '#00643C', 'important');
        backgroundColorThree.style.setProperty('border-color', '#00643C', 'important');


    } 
    if(document.getElementById('password').value !=="" && document.getElementById('confrimPassword').value !==""){
        let password = document.getElementById('password').value;
        let confrimPassword = document.getElementById('confrimPassword').value;
        
    }
}

function changeButtonColorNameInput(){
    var name2 = document.getElementById('name').value;
    var family = document.getElementById('family').value; 
    send = document.getElementById('send');
    if (name2.length > 0 && family.length > 0) {
      send.style.backgroundColor = '#00643C';
    } 
}

function changeButtonColorPhoneInput(){
    var phone = document.getElementById('phone').value;
    var role = document.getElementById('role').value;
    let send = document.getElementById('send');
    send.style.backgroundColor = '#9F9F9F';
    if (phone.length > 0 && role.length > 0) {
      send.style.backgroundColor = '#00643C';
    } 
}

function changeButtonColorPassInput(){
    var password = document.getElementById('password').value;
    var confrimPassword = document.getElementById('confrimPassword').value;
    let send = document.getElementById('send');
    if (password.length > 0 && confrimPassword.length > 0) {
      send.style.backgroundColor = '#00643C';
    } 
}


function openDeleteUserForm(){
    document.getElementById("deleteUserFormOpen").style.display = "block";
    document.getElementById("leftSide").style.opacity = 0.2;
    document.getElementById("rightSide").style.opacity = 0.2;
    document.getElementById("buttonBack").style.opacity = 0.2;
    document.getElementById("img").style.opacity = 0.2;
    document.getElementById("buttonBack").href ="javascript:void(0)";

}
function closeDeleteUserForm(){
    document.getElementById("deleteUserFormOpen").style.display = "none";
    document.getElementById("leftSide").style.opacity = 1;
    document.getElementById("rightSide").style.opacity = 1;
    document.getElementById("buttonBack").style.opacity = 1;
    document.getElementById("img").style.opacity = 1;
}

function openOffUserForm(){
    document.getElementById("offUserFormOpen").style.display = "block";
    document.getElementById("leftSide").style.opacity = 0.2;
    document.getElementById("rightSide").style.opacity = 0.2;
    document.getElementById("buttonBack").style.opacity = 0.2;
    document.getElementById("img").style.opacity = 0.2;
    document.getElementById("buttonBack").href ="javascript:void(0)";
}
function closeOffUserForm(){
    document.getElementById("offUserFormOpen").style.display = "none";
    document.getElementById("leftSide").style.opacity = 1;
    document.getElementById("rightSide").style.opacity = 1;
    document.getElementById("buttonBack").style.opacity = 1;
    document.getElementById("img").style.opacity = 1;
}



function openDeleteArticleForm(){
    document.getElementById("openDeleteArticleForm").style.display = "block";
    document.getElementById("leftSide").style.opacity = 0.2;
    document.getElementById("rightSide").style.opacity = 0.2;
    document.getElementById("buttonBack").style.opacity = 0.2;
    document.getElementById("img").style.opacity = 0.2;
    document.getElementById("articleText").style.opacity = 0.2;
    document.getElementById("buttonBack").href ="javascript:void(0)";

}
function closeDeleteArticleForm(){
    document.getElementById("openDeleteArticleForm").style.display = "none";
    document.getElementById("leftSide").style.opacity = 1;
    document.getElementById("rightSide").style.opacity = 1;
    document.getElementById("buttonBack").style.opacity = 1;
    document.getElementById("img").style.opacity = 1;
    document.getElementById("articleText").style.opacity = 1;
}

function openOffArticleForm(){
    document.getElementById("openOffArticleForm").style.display = "block";
    document.getElementById("leftSide").style.opacity = 0.2;
    document.getElementById("rightSide").style.opacity = 0.2;
    document.getElementById("buttonBack").style.opacity = 0.2;
    document.getElementById("img").style.opacity = 0.2;
    document.getElementById("buttonBack").href ="javascript:void(0)";
}
function closeOffArticleForm(){
    document.getElementById("openOffArticleForm").style.display = "none";
    document.getElementById("leftSide").style.opacity = 1;
    document.getElementById("rightSide").style.opacity = 1;
    document.getElementById("buttonBack").style.opacity = 1;
    document.getElementById("img").style.opacity = 1;
}




function saveValuesArticle(){
    if(document.getElementById('ArticleTitle').value !=="" && document.getElementById('articleType').value !==""){

        let ArticleTitle = document.getElementById('ArticleTitle').value;
        let articleType = document.getElementById('articleType').value;
        let nameAddArticle = document.getElementById('nameAddArticle');
        nameAddArticle.style.setProperty('display', 'none', 'important');
        let uploadFile = document.getElementById('uploadFile');
        uploadFile.style.setProperty('display', 'block', 'important');
        send = document.getElementById('send');
        send.style.backgroundColor = '#9F9F9F';
        let backgroundColorOne = document.getElementById("numbers1");
        backgroundColorOne.style.setProperty('background', '#00643C', 'important');
        backgroundColorOne.style.setProperty('color', 'white', 'important');

        let backgroundColorTwo = document.getElementById("numbers2");
        backgroundColorTwo.style.setProperty('background', 'white', 'important');
        backgroundColorTwo.style.setProperty('color', '#00643C', 'important');
        backgroundColorTwo.style.setProperty('border-color', '#00643C', 'important');
    } 
    if(document.getElementById('customFile').value !==""){

        let customFile = document.getElementById('customFile').value;
        // let role = document.getElementById('role').value;
        let uploadFile = document.getElementById('uploadFile');
        uploadFile.style.setProperty('display', 'none', 'important');
        let explains = document.getElementById('explains');
        explains.style.setProperty('display', 'block', 'important');
        send.style.backgroundColor = '#9F9F9F';
        
        changeValues();
        let backgroundColorTwo = document.getElementById("numbers2");
        backgroundColorTwo.style.setProperty('background', '#00643C', 'important');
        backgroundColorTwo.style.setProperty('color', 'white', 'important');

        let backgroundColorThree = document.getElementById("numbers3");
        backgroundColorThree.style.setProperty('background', 'white', 'important');
        backgroundColorThree.style.setProperty('color', '#00643C', 'important');
        backgroundColorThree.style.setProperty('border-color', '#00643C', 'important');


    } 
    if(document.getElementById('explainsArea').value !==""){
        let explainsArea = document.getElementById('explainsArea').value;
        
    }
}



function changeButtonColorName(){
    var ArticleTitle = document.getElementById('ArticleTitle').value;
    var articleType = document.getElementById('articleType').value; 
    send = document.getElementById('send');
    if (ArticleTitle.length > 0 && articleType.length > 0) {
      send.style.backgroundColor = '#00643C';
    } 
}

function changeButtonColorPhone(){
    var customFile = document.getElementById('customFile').value;
    let send = document.getElementById('send');
    send.style.backgroundColor = '#9F9F9F';
    if (customFile.length > 0) {
      send.style.backgroundColor = '#00643C';
    } 
}

function changeButtonColorPass(){
    var explainsArea = document.getElementById('explainsArea').value;
    let send = document.getElementById('send');
    if (explainsArea.length > 0) {
      send.style.backgroundColor = '#00643C';
    } 
}
// function validateForm(event){
//     event.preventDefault();
//     let password = document.getElementById('password').value;
//     let confrimPassword = document.getElementById('confrimPassword').value;
//     if(password !== confrimPassword){
//         alert("پسورد و تکرار پسورد با هم برابر نیستند");
//         return false;
//     } 
//     return true;
// }





//     body: JSON.stringify({
//         name:'User3'
//     })



// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     method:'get',
//     headers: {
//         'Authorization': 'Basic ' + btoa('username:password'),
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     // body: 'A=1&B=2'
//     mode: 'cors',
//     // cache: 'defualt',
// })
// .then(response => response.json())
// .then(data => console.log(data));



// async function fetchLogin(){
    // const data = {name: "john"};
    // try{
    //     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
    //         method: 'get',
    //         headers: {
    //             'Authorization': 'Basic ' + btoa('username:password'),
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             // body: JSON.stringify({
    //             //     name:'User3'
    //             // }),

    //         mode: 'cors',
    //     });
    //     let data = await response.json();
    //     return data;
    // } catch(err){
    //     return err;
    // }
// }

// async function main(){
//     console.log('First');
//     let result = await fetchLogin();
//     console.log(result);
//     console.log('second');
// }

// main();
// import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.mjs';



// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js')
//         .then(registration => {
//             console.log('Service Worker registered with scope:', registration.scope);
//         })
//         .catch(error => {
//             console.error('Service Worker registration failed:', error);
//         });
// }


function login() {
    const usernameInput = document.getElementById('loginName');
    const passwordInput = document.getElementById('loginPassword');

    const userData = {
        username: usernameInput.value,
        password: passwordInput.value,
        // سایر اطلاعات کاربر
    };
    console.log(userData);

    fetch('https://api.blockstream.ir/api/Authentication/Login',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // 'Authorization': 'Bearer '   
        },
        mode: 'cors',
        cache:'default',
    })
    .then(response => {
        const token = response.data.token;
        console.log('Token:', token);
        // اینجا می‌توانید توکن را ذخیره کنید (به عنوان مثال در localStorage یا sessionStorage)
        // localStorage.setItem('token', token);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });
}


// const data = {
//     title: "This is title",
//     body: "This is post body",
//     userId: 2,
//     };
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//     "Content-type": "application/json",
//     },
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data));

function login(){
    var username = $("#loginName").val();
    var password = $("#loginPassword").val();
    $.ajax({
        url: "https://api.blockstream.ir/api/Authentication/Login",
        type: "POST",
        dataType: "json",
        data: {
            username: username,
            password: password
        },
        success: function(response) {
            var token = response.token;
            localStorage.setItem("accessToken", token);
            console.log("Login successful. Token stored:", token);
        },
        error: function(error) {
            console.error("Error:", error);
        }
    });
}

    

   