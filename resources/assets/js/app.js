function navbarOffcanvasOpen(navbar) {
  navbar.style.display = "initial";
}

function navbarOffcanvasClose(navbar) {
  navbar.style.display = "none";
}

function modalShow(data){
  let candidates = getCandidates()
  const div = document.createElement("div")
  candidates = candidates[data.details]
  data.modal.style.display = "none"

  div.innerHTML = `
    <div class="modal-content">
      <h3>${candidates.fname} ${candidates.lname}</h3>
    </div>
    `
    
  if (data.modal.style.display == "none") {
    data.modal.style.display = "block"
  }else{
    data.modal.style.display = "none"
  }

  data.modal.appendChild(div)
  console.log(data.modal);
}

function getCandidates(){
  let candidateDetails = [
    {
      fname: 'oking',
      lname: 'Marapo',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'COMPUTER'
    },
    {
      fname: 'dfdfd',
      lname: 'dfdfd',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'CRIMINOLOGY'
    },
    {
      fname: 'okifdfdfdng',
      lname: 'dfdfdfd',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'COMMERCE'
    },
    {
      fname: 'fghfhfh',
      lname: 'fghfhfhf',
      quote: 'This is a quote just i don\'t know',
      img: "../assets/img/avatar.webp",
      course: 'EDUCATION'
    },
  ];

  return candidateDetails;
}

export default {navbarOffcanvasOpen , navbarOffcanvasClose, modalShow, getCandidates};
