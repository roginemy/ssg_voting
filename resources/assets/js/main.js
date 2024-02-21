import app from "./app.js";
import appFunctions from "./app.js";

let navbarToggler = document.getElementById("navbar-toggler");
let navbarClose = document.getElementById("navbar-close");
let navbar = document.querySelector("nav");

navbarToggler.onclick = () => {
  appFunctions.navbarOffcanvasOpen(navbar);
};

navbarClose.onclick = () => {
  appFunctions.navbarOffcanvasClose(navbar);
};

let candidateProfileBtns = document.querySelectorAll(".view-profile");
let candidateModal = document.querySelectorAll("candidate-card");

for (let i = 0; i < candidateProfileBtns.length; i++) {
  candidateProfileBtns[i].onclick = () => {
    appFunctions.modalShow(candidateProfileBtns[i]);
  };
}

// CANDIDATES - candidates.html

let candidates = document.getElementById("candidates");
const candidateDetails = appFunctions.getCandidates();

for (let i = 0; i < candidateDetails.length; i++) {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="candidate-card">
    <img src="${candidateDetails[i].img}" alt="candidate-1">
    <h3>${candidateDetails[i].fname} ${candidateDetails[i].lname}</h3>
    <p>${candidateDetails[i].quote}</p>
    <p class="course">${candidateDetails[i].course}</p>
    <button type="button" class="view-profile">View Profile</button>
    </div>
`;

  candidates.appendChild(div);
}

const viewCandidateBtn = document.querySelectorAll(".view-profile");
const candidatesMain = document.querySelector("#candidates-main .wrapper")

for (let i = 0; i < viewCandidateBtn.length; i++) {
  viewCandidateBtn[i].onclick = () => {
    

    appFunctions.viewCandidateProfile(candidatesMain,candidates,candidateDetails[i])

  }
}
