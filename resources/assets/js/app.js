function navbarOffcanvasOpen(navbar) {
  navbar.style.display = "initial";
}

function navbarOffcanvasClose(navbar) {
  navbar.style.display = "none";
}

function getCandidates() {
  let candidateDetails = [
    {
      fname: "Lawrence",
      lname: "Marapo",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "COMPUTER",
      partyList: "OKING1",
    },
    {
      fname: "Mark Daniel",
      lname: "Santillan",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "CRIMINOLOGY",
      partyList: "OKING1",
    },
    {
      fname: "Samuel",
      lname: "Chavez",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "COMMERCE",
      partyList: "OKING1",
    },
    {
      fname: "Vince Kenneth",
      lname: "Jumawan",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "EDUCATION",
      partyList: "OKING1",
    },
    {
      fname: "Earl Bryan",
      lname: "Espinosa",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "EDUCATION",
      partyList: "OKING1",
    },
    {
      fname: "John Ralph",
      lname: "Sayson",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "EDUCATION",
      partyList: "OKING1",
    },
    {
      fname: "Dame Ruds",
      lname: "Escaña",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "EDUCATION",
      partyList: "OKING1",
    },
    {
      fname: "Jeo Marc",
      lname: "Fernandez",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "EDUCATION",
      partyList: "OKING1",
    },
    {
      fname: "Brent",
      lname: "Carallas",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni id, sit molestiae harum incidunt libero ex doloremque perspiciatis laboriosam.",
      img: "../assets/img/avatar.webp",
      course: "EDUCATION",
      partyList: "OKING1",
    },
  ];

  return candidateDetails;
}

function addCandidateCard(candidates) {
  const candidateDetails = getCandidates();
  for (let i = 0; i < candidateDetails.length; i++) {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="candidate-card">
      <div>
      <img src="${candidateDetails[i].img}" alt="candidate-1">
      <span>Party-list : ${candidateDetails[i].partyList}</span>
      </div>
      <h3>${candidateDetails[i].fname} ${candidateDetails[i].lname}</h3>
      <p class="testimony">${candidateDetails[i].quote}</p>
      <p class="course">${candidateDetails[i].course}</p>
      <button type="button" class="view-profile">View Profile</button>
      </div>
  `;

    candidates.appendChild(div);
  }
}

function viewCandidateProfile(card, candidateContainer, data) {
  const div = document.createElement("div");

  div.innerHTML = `
      <div class="candidate-card-details">
        <div class="container">
          <div class="col">
          <img src="${data.img}" />
          <p>${data.course}</p>
          <span>Party-list : ${data.partyList}</span>
        </div>
        <div class="col">
          <h1>${data.fname} ${data.lname}</h1>
          <p class="subtitle">Party-list : ${data.partyList}</p>
          <p class="testimony"><i>'</i> ${data.quote} <i>'</i></p>
          <div>
          <button type="button" id="back-btn"><i class="fa fa-arrow-left-long"></i> Back</button>
          <button type="button" id="vote-btn">Vote Now</button>
          </div>
        </div>
        </div>
      </div>
    `;

  card.appendChild(div);

  candidateContainer.style.display = "none";

  let backBtn = document.getElementById("back-btn")

  backBtn.onclick = () => {
    candidateContainer.style.display = "grid";
    const profileCards = document.querySelectorAll(".candidate-card-details")
    profileCards.forEach(profileCard => {
      profileCard.remove();      
    });
  }
}

function backToCandidates(card, candidateProfile) {
    console.log(card);
}

export default {
  navbarOffcanvasOpen,
  navbarOffcanvasClose,
  getCandidates,
  viewCandidateProfile,
  addCandidateCard
};
