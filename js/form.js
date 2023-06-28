const url = 'https://script.google.com/macros/s/AKfycbxlaZVCZ8ryptbaqqkwbMS8PMjMjnG4MiypNttH0Cdpb95GFjFwTO18EGjytqYseoQI/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const language = document.querySelector('#language');
const address = document.querySelector('#address');
const country = document.querySelector('#country');
const gender = document.querySelector('#gender');
const myMessage = document.querySelector('#message');
const subBtn = document.querySelector('input[type="submit"]');
const main = document.querySelector('.form')

myForm.addEventListener('submit', submitter);

function submitter(e) {
    e.preventDefault();
    // subBtn.disabled = true;
    let message = ''
    if(myName.value.length < 5) {
        myName.style.borderColor = '#993300';
        message += `<br>Name needs to be 5 characters`;
    }

    if(myEmail.value.length < 5) {
        myEmail.style.borderColor = '#993300';
        message += `<br>Enter your email`;
    }

    if(message){
        const div = document.createElement('div');
        div.innerHTML = message;
        div.style.color = '#993300';
        myForm.append(div);
        setTimeout(() => {
            div.remove();
            myName.style.borderColor = '';
            myEmail.style.borderColor = '';
        },5000);
        // subBtn.disabled = false;
    }else{
        const myObj = {
            name: myName.value,
            email: myEmail.value,
            language: language.value,
            address: address.value,
            country: country.value,
            gender: gender.value,
            message: myMessage.value
        }
        addSendMail(myObj);
        myName.value = '',
        myEmail.value = '',
        language.value = '',
        address.value = '',
        country.value = '',
        gender.value = '',
        myMessage.value = ''
    }
}



function addSendMail(data) {
    console.log(data);  
    const repDiv = document.createElement('div');
    repDiv.textContent = 'Submitting.....';
    main.append(repDiv);
    fetch(url,{
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json);
        if(json.rowval){
            repDiv.textContent = `Message Sent & Your ID is ${json.rowval}`;
            repDiv.style.color = '#993300';
            setTimeout(() => {
                repDiv.remove()
            },5000);
        }else{
            repDiv.remove();
        }
    })
}


// function addSendMailGet(data) {
//     const url1 = url + '?id=200';
//     fetch(url1)
//     .then(res => res.json())
//     .then(json => {
//         console.log(json);
//     })
// }




