

let conform = confirm("Would You Like To Find Minimum or Maximum ");
if (conform) {
  // User Input No of Times
  let entry2 = Number(prompt("How Many Number you want Insert ?"))
  
  // Coverting input into Array
    let entry3 = [];
    for (i = 0; i <= entry2-1; i++){
        entry3[i] = Number(prompt("Enter Your Number"));
        
    }
    console.log(entry3);
  document.getElementById("MinMax").innerHTML = `<h2>Your Input : ${entry3}</h2>`;

  // User inpurt - Max or Minimum
  let entry4 = prompt("What Should I Find Among These Number Maximum or Minimum ?")

  let choice = "";
  if (entry4 == "max" || entry4 == "Maximum" || entry4 == "Max" || entry4 =="maximum") {
    choice = "Maximum";

  } else if (entry4 == "min" || entry4 == "Minimum" || entry4 == "Min" || entry4 == "minimum") {
    choice = "Minimum"
    
  } else {
    choice ="Spelling"
  }

 //Reduce Method - Find Max or Min
  
 let data = entry3;
  if(choice=="Minimum"){
    let min = (prev, curre) => {
      if (prev < curre) {
        return prev;
      } else {
        return curre;
      }
    };
    let final = data.reduce(min);
    console.log(final);

    document.getElementById("MinMax").innerHTML = `
  <h2>Your Input : ${data}</h2>
  <h3>You Have Selected To Find "<b>${choice}</b>" Number</h3>
  <h3>${choice} No. :${final}</h3> `;
  } else if (choice == "Maximum") {
    let max = (prev, curre) => {
      if (prev > curre) {
        return prev;
      } else {
        return curre;
      }
    };
    let final = data.reduce(max);
    console.log(final);

    document.getElementById("MinMax").innerHTML = `
  <h2>Your Input : ${data}</h2>
  <h3>You Have Selected To Find "<b>${choice}</b>" Number</h3>
  <h4>${choice} No : ${final}</h4> `;
  } else {
    document.getElementById("MinMax").innerHTML = `
  <h2>Your Input : ${data}</h2>
  <h3>You Have Entered Wrong "<b>${choice}</b>"</h3>
  <h5>📑Input Accepted :- Min,min,Minimum,minimum,
  max,Max,Maximum,maximum</h5>  `;
  }
  
} else {
   document.getElementById("MinMax").innerHTML = `<h1>Have a Nice Day  😃</h1>`;
}
