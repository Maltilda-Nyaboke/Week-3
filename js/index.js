function myButton() {
    var result = 0;
    var moja = document.que.question.value;
    var mbili = document.que.question0.value;
    var tatu = document.que.question1.value;
    var nne = document.que.question2.value;
    var tano = document.que.question3.value;

    // declare the total sum

    var all = document.getElementById("answer");

    if (moja=="quiz1") { result+=20 };
    if (mbili=="quiz5") { result+=20 };
    if (tatu=="quiz7") { result+=20 };
    if (nne=="quiz10") { result+=20 };
    if (tano=="quiz14") { result+=20 };

    // document.write(result); {

    // }
qeue.style.display = "none";


 if(result>=100) {
     alert("You have performed excellently!");
  all.textContent=(result)
  
 }else if(result>=50){
    alert("You have performed fairly!");
  all.textContent= (result)
    
  }else if(result<=50){ 
      alert("You have performed poorly kindly retake the test!")
    all.textContent= (result)
    ;
 }

}