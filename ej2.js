const buttonEl = document.getElementById('button');
const output = document.getElementById('output');
const textarea = document.getElementById('textarea');

buttonEl = addEventListener('click', checkSpam);

function checkSpam() {
    let message = textarea.value;
    message = message.toLowerCase()
    if (message.includes('viagra')){
        message = message.replace('viagra', '*****')
        output.innerHTML = message;
        textarea.value = '';
    } else if (message.includes('xxx')){
        message = message.replace('xxx', '***')
        output.innerHTML = message;
        textarea.value = '';
    } else {
        output.innerHTML = textarea.value;
        textarea.value = '';
    }
}