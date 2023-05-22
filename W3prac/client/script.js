function submitForm(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  console.log(name);
  var user = {
    name,email,password
  }

  console.log(user);
  var xhr = new XMLHttpRequest();
  xhr.open('POST','http://localhost:3000/',true);
  xhr.setRequestHeader('Content-Type','application/json');

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        window.location.href = "datalist.html";
      }else{
        alert("error pccured while adding data");
      }
    }
  }
  xhr.send(JSON.stringify(user));
}

document.getElementById('submit-btn').addEventListener('click',submitForm);