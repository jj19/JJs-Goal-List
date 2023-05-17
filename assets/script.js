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
    
  
      function buttonClick(event){
      event.preventDefault();
      let goalValue = document.querySelector('.goalAction');
      addNewGoal(goalValue.value);
      goalValue.value = "";
  }
  
  let goalcheckboxes = document.querySelectorAll(".goalCheckbox");
let completedGoalsList = document.querySelector('.completedGoalList');
let myGoalsList = document.querySelector('.goalList');
// let myGoalItem =  document.querySelectorAll('.goalItem')
// let myCompletedGoalItem = document.querySelector('.completedGoalItem')

goalcheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let listItem = this.closest('.goalItem');
    let clonedListItem = listItem.cloneNode(true);
    
    if (this.checked) {
      console.log("Checkbox is checked..");
      completedGoalsList.appendChild(clonedListItem);
      clonedListItem.classList.add('completedGoalItem');
      clonedListItem.classList.remove('goalItem')
      listItem.remove();
    } else {
      console.log("Checkbox is not checked..");
      myGoalsList.appendChild(clonedListItem);
      // listItem.remove();
    }
  });
});

let completedcheckboxes = document.querySelectorAll('.goalCompletedCheckbox')

completedcheckboxes.forEach(function(checkbox) {
checkbox.addEventListener('change', function() {
    let completeItem = this.closest('.completedGoalItem');
    let clonedCompletedListItem = completeItem.cloneNode(true);

    if (this.checked == false) {
      console.log("Checkbox is unchecked..");
      myGoalsList.appendChild(clonedCompletedListItem);
      clonedListItem.classList.add('goalItem');
      clonedListItem.classList.remove('completedGoalItem')
      completeItem.remove();
    } else {
      console.log("Checkbox is checked..");
      completedGoalsList.appendChild(clonedCompletedListItem);
      
    }
  
});
});
