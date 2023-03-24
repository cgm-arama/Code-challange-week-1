//*We declare a function that we assign declared values of paye, nssf ,nhif and benefits*//
function calcSalary(){
    let calc = parseInt(salary.value) + parseInt(benefits.value); //*parseInt is used to convert the  assigned values to integers*//
    let nssf = 0.12
    let nhif = 0.02
    let paye = 0.12
    let all = nssf * paye * nhif
  
    final = calc - calc * all
  
    console.log(final)
    calculate.innerText = `Your net salary is ${final}`
  }