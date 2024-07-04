// tasks ---
// should calculate total
// calculate percentage
// calculate grade
// calculate pass/fail
// show output

let mm=document.getElementById('mm');
function calcY(){
    let phy = document.getElementById('PHYSICS').value;
    let math = document.getElementById('MATHS').value;
    let comp = document.getElementById('COMPUTER').value;
    let chem = document.getElementById('CHEMISTRY').value;
    let grades = "";
  
  
    let totalGrades = (parseFloat(phy) + parseFloat(math) + parseFloat(comp) + parseFloat(chem)).toFixed(2);
  
    let perc =(((totalGrades/400) * 100).toFixed(2));
    
  
    debugger;
  
    if(perc <= 100  && perc >= 80){
      grades = 'A';
    }else if(perc <= 79  && perc >= 60){
       grades = 'B';
    }else if(perc <= 59  && perc >= 40){
       grades = 'C';
    }else{
       grades = 'F';
    }
  console.log(grades);
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}.  `
      document.getElementById('result').innerHTML = ` PASS `
    }
    else{
      document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. `
      document.getElementById('result').innerHTML = ` FAIL `
    }
  
    
  }
  mm.addEventListener('click',calcY)
 