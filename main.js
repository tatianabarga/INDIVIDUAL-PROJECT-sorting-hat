
//all events
const events = () => {
  const app = document.querySelector('#app');
  const studentArea = document.querySelector('#studentArea');
  const hogwarts = document.querySelector('#hogwarts');
  const deathEaters = document.querySelector('#deathEaters');
  const filterbtns = document.querySelector('#filterbtns')
  const startBtn = document.querySelector("#startBtn");
  const submitBtn = document.querySelector("#submitBtn");
  
  let students = [];
  let hufflepuff = [];
  let slytherin = [];
  let gryffindor = [];
  let ravenclaw = [];
  let deathEaterArray = [];
  
  //render form
  startBtn.addEventListener("click", (event) => {
    nsform.style.display = "flex";
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

  //render to dom function
  const displayCards = (array, place) => {
    let cards = '';
    for (object of array) {
      cards += 
      `<div class="card stucard" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title id="studentName" ">${object.firstname} ${object.lastname}</h5>
      <p id="house" >house: ${object.house}</p>
      <button id="delete--${object.id}" class="delete btn"
        >Expel</button>
        </p> 
        </div>
        </div>`;
    }
    place.innerHTML = cards;
  }

  //expel function
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
  
  //filterbtns funcitons
  filterbtns.addEventListener('click', (e) => {
    if (e.target.id === 'hp') {
      const hp = students.filter((huff) => huff.house === 'Hufflepuff')
      displayCards(hp, hogwarts);
    }
    if (e.target.id === 'gr') {
      const gr = students.filter((gryff) => gryff.house === 'Gryffindor')
      displayCards(gr, hogwarts);
    }
    if (e.target.id === 'sl') {
      const sl = students.filter((slyth) => slyth.house === 'Slytherin')
      displayCards(sl, hogwarts);
    }
    if (e.target.id === 'rc') {
      const rc = students.filter((rav) => rav.house === 'Ravenclaw')
      displayCards(rc, hogwarts);
    }
    if (e.target.id === 'clear') {
      displayCards(students, hogwarts);
    }
  })
}

//startapp
const startApp = () => {
  events();
}

  startApp();

//trouble shooting

//refactoring 
//move css around for easier to find
//expel button remains on expel students
