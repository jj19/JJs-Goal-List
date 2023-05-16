let goalAction = document.querySelector('.goalAction');

let goalSubmit =  document.querySelector('.goalSubmit');

let goalItem = document.querySelectorAll('.goalItem');

let submitButton = document.querySelector('.goalSubmit').addEventListener('click', buttonClick);

let footer = document.querySelector('footer');

/* -------------------
Add new List Item Code
----------------------
let newGoal = document.createElement('li')
newGoal.className = 'goalItem'

newGoal.innerHTML = `
  <label>
    <input type="checkbox" name="goal" class="goalCheckbox"> Complete Freecodecamp.org certifications
  </label>
`;

let goalList = document.querySelector('.goalList');
let footer = document.querySelector('footer');

goalList.appendChild(newGoal);
*/



/* --------------------
Add new goal function
-----------------------*/
// function addNewGoal(goal) {
//   let newGoal = document.createElement('li');
//   newGoal.className = 'goalItem';

//   newGoal.innerHTML = `
//     <label>
//       <input type="checkbox" name="goal" class="goalCheckbox"> ${goal}
//     </label>
//   `;

//   let goalList = document.querySelector('.goalList');
//   let footer = document.querySelector('footer');

//   goalList.appendChild(newGoal);
// }



  
  function addNewGoal(goal) {
    let newGoal = document.createElement('li');
    newGoal.className = 'goalItem';
  
    newGoal.innerHTML = `
      <label>
        <input type="checkbox" name="goal" class="goalCheckbox"> ${goal}
      </label>
    `;
  
    let goalList = document.querySelector('.goalList');
  
    goalList.appendChild(newGoal);
  }
    function buttonClick(){
      event.preventDefault();
      let goalValue = document.querySelector('.goalAction').value;
      addNewGoal(goalValue);
      goalValue = " ";
  }
  