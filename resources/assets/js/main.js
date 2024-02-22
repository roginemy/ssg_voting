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


  appFunctions.addCandidateCard(candidates)

  const candidateDetails = appFunctions.getCandidates();
  const viewCandidateBtn = document.querySelectorAll(".view-profile");
  const candidatesMain = document.querySelector("#candidates-main .wrapper")

  for (let i = 0; i < viewCandidateBtn.length; i++) {
    viewCandidateBtn[i].onclick = () => {

      appFunctions.viewCandidateProfile(candidatesMain,candidates,candidateDetails[i])

    }
  }





