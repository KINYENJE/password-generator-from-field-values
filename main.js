const genBtn = document.querySelector('#generatePass');


genBtn.addEventListener('click', generatePassword);

function generatePassword () {
    const firstName = document.querySelector('#first').value;
    const lastName = document.querySelector('#second').value;
    const contact = document.querySelector('#phone').value;


    let password =''
    let values =`${firstName}${lastName}${contact}`
    console.log(`Your FUKUSWI name: ${firstName}${lastName}  and contact: ${contact}`)
    
    
    for(let i = 0; i < 8; i++){
        password += values.charAt(Math.floor(Math.random() * (values.length))) 
    }
    console.log(`Password :${password}`)
    return password    
}
// console.log(generatePassword())
