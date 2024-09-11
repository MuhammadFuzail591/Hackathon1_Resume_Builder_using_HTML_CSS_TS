var skillShowBtn = document.querySelector(".skill-btn");
var skillsContainer = document.querySelector(".skills-container");
var skillicon = document.querySelector(".skill-icon");
skillShowBtn === null || skillShowBtn === void 0 ? void 0 : skillShowBtn.addEventListener("click", function () {
    skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.classList.toggle("show");
    if (skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.classList.contains("show")) {
        skillShowBtn.innerHTML = "<button class=\"skill-btn\">Show Less<i class=\"ri-arrow-up-s-line skill-icon\"></i></button>";
    }
    else {
        skillShowBtn.innerHTML = "<button class=\"skill-btn\">Show<i class=\"ri-arrow-down-s-line skill-icon\"></i></button>";
    }
});
