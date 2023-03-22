//Calculations to be passed by net salary generator//
function calcSalary(){
    let calc = parseInt(salary.value) + parseInt(benefits.value); 
    let nssf = 0.12
    let nhif = 0.02
    let paye = 0.12
    let all = nssf * paye * nhif
  
    final = calc - calc * all
  
    console.log(final)
    calculate.innerText = `Your net salary is ${final}`
  }