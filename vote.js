function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var res = document.getElementById("res");
    alert(age)
      if(age>=18){
        alert("eligible to vote")
      }else{
        alert("your are still a child")
      }
 if(age>=18){
    res.innerHTML=name+" "+"eligible to vote"
 }else{
    res.innerHtml=name+" "+"you are still a child"
 }
 }   
