const input = document.querySelector('.inputName')
const doneBtn = document.querySelector('.done')
const result = document.querySelector('.result')

doneBtn.addEventListener('click', fullName);

function fullName() {
    let fullName = input.value;
    fullName = fullName.split(' ');
    let firstName = fullName[0]
    let middleName = fullName[1]
    let lastName = fullName[2]


    let var1 = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let var2 = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
    let var3 = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    let output = `Имя: ${var1}, Фамилия: ${var2}, Отчество: ${var3}`;
    result.innerHTML = output;
    input.value = ''
}