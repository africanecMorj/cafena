$('#signupBtn').click(()=>{
    let login = $('#signupEntry').val();
    
    axios.post('http://localhost:3000/signup', {userName: login})
    .then(res => {
        console.log(res);
    })
});


$(`#usersBtn`).click(()=>{
    $(`.usersPopup`).css(`display`, `flex`);
    $(`.usersPopup`).empty();
    $('.usersPopup').append(`<i id="btnClose" class="fa-solid fa-xmark" ></i>`)
    axios.get('http://localhost:3000/getusers')    
    .then(res => {
        console.log(res.data);
        for(let el of res.data){
            $('.usersPopup').append(`<div class="item">${el}</div>`)
    }
    })
});

document.onclick = (e)=>{
    console.log(e.target.id)
    if(e.target.id == `btnClose`){
        $(`.usersPopup`).css(`display`, `none`);
    }
};