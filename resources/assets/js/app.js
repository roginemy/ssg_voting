function navbarOffcanvasOpen(navbar) {
  navbar.style.display = "initial";
}

function navbarOffcanvasClose(navbar) {
  navbar.style.display = "none";
}

function getCandidates(){
  let candidateDetails = [
    {
      fname: 'Lawrence',
      lname: 'Marapo',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'COMPUTER'
    },
    {
      fname: 'Mark Daniel',
      lname: 'Santillan',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'CRIMINOLOGY'
    },
    {
      fname: 'Samuel',
      lname: 'Chavez',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'COMMERCE'
    },
    {
      fname: 'Vince Kenneth',
      lname: 'Jumawan',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
    {
      fname: 'Earl Bryan',
      lname: 'Espinosa',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
    {
      fname: 'John Ralph',
      lname: 'Sayson',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
    {
      fname: 'Dame Ruds',
      lname: 'Escaña',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
    {
      fname: 'Jeo Marc',
      lname: 'Fernandez',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
    {
      fname: 'Brent',
      lname: 'Carallas',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
  ];

  return candidateDetails;
}

function viewCandidateProfile(card, candidateContainer, data){

    const div = document.createElement("div")
    
    div.innerHTML = `
      <div class="candidate-card-details">
      ;dshhfjkdshkfjhsdhfkshksh
      </div>
    `
    card.appendChild(div)

    candidates.remove()
}

export default {navbarOffcanvasOpen , navbarOffcanvasClose, getCandidates, viewCandidateProfile};
