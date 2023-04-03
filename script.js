const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const  repassword=document.getElementById('repassword');

function error(input,message){
    input.className="form-control is-invalid"
    const div=input.nextElementSibling
    div.innerText=message;
    div.className='invalid-feedback'
    
}
function succsess(input){
    input.className="form-control is-valid"
}
const checkEmail=(input)=>{
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value)){
        succsess(input);
 }else{
    error(input,'hatali bir email adresi')
 }
      
  };
  function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value===''){
            error(input,`${input.id} isrequired`)
        }else{
            succsess(input)
        }
    })
   
  };
  function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} en az ${min} karakter olmalidir`)
     }
     else if(input.value.length>max){
        error(input,`${input.id} en fazla ${max} karakter ola biler`)

        
     }
     else{
        succsess(input);
     }
  };

  function checkPasswords(input1,input2){
    if(input1.value !==input2.value){
        error(input2,("paralolar eslesmiyor"));
    }
  }
  function checkPhone(input){
    var exp=/^\d{10}$/;
    if(!exp.test(input.value))
        error(input,'telefon 10 karakterli olmalidir.');
    
  }

form.addEventListener('submit', function(e){
    e.preventDefault()
   checkRequired([username,email,password,repassword,phone])
   checkEmail(email);
   checkLength(username,7,15);
   checkLength(password,7,12);
   checkPasswords(password,repassword)
   checkPhone(phone)
})
