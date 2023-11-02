

//start btn display form


const app = document.querySelector('#app');
const studentArea = document.querySelector('#studentArea');
const hogwarts = document.querySelector('#hogwarts');
const deathEaters = document.querySelector('#deathEaters');


const renderForm = () => {
nsform.style.display = "flex";
}

const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", (event) => {
  renderForm();
})

//sort function

const sort = () => {
  let randomNum = Math.random();
  let house = '';
  if (randomNum >= 0 && randomNum < .25) {
    house = 'Hufflepuff';
  } else if (randomNum >= .25 && randomNum < .5) {
    house = 'Gryffindor';
  } else if (randomNum >= .5 && randomNum < .75) {
    house = 'Slytherin';
  } else if (randomNum >= .75 && randomNum < 1) {
    house = 'Ravenclaw';
  }
  return house;
}

//sort btn function

let students = [];

const submitBtn = document.querySelector("#submitBtn");
document.querySelector('#form').addEventListener("submit", (event) => {
    event.preventDefault();

    const newStudent = {
    id: students.length + 1,
    firstname: document.querySelector('#first-name').value,
    lastname: document.querySelector('#last-name').value,
    house: sort()
  }
  students.push(newStudent);
  displayCards(students, hogwarts);
  form.reset();
})

//render to dom fun

const displayCards = (array, place) => {
  let cards = '';
    for (object of array) {
      cards += 
     `<div class="card element" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title id="studentName" ">${object.firstname} ${object.lastname}</h5>
          <p id="house" >house: ${object.house}</p>
            <button id="delete--${object.id}" class="delete"
            >Expel</button>
          </p> 
        </div>
      </div>`;
    }
  place.innerHTML = cards;
  }


  //expel function

  let deathEaterArray = [];
  studentArea.addEventListener('click', (e) => {
    if (e.target.id.includes('delete')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((e) => e.id === Number(id));
      const indexDE = deathEaterArray.length - 1;
      const newDE = [];
      newDE.house = 'Voldy Lover';
      newDE.firstname = students[index].firstname;
      newDE.lastname = students[index].lastname;
      deathEaterArray.push(newDE);
      students.splice(index, 1);
      displayCards(students, hogwarts);
      displayCards(deathEaterArray, deathEaters);
    }
  })
  

//trouble shooting
// prevent default
// document selector for form

//refactoring 
//combine eventlistener and function for render form and start btn
