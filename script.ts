const skillShowBtn: HTMLElement | null = document.querySelector(".skill-btn");
const skillsContainer: HTMLElement | null = document.querySelector(".skills-container");
const skillicon: HTMLElement | null = document.querySelector(".skill-icon");

skillShowBtn?.addEventListener("click", () => {
    skillsContainer?.classList.toggle("show");

    if (skillsContainer?.classList.contains("show")) {
        
        skillShowBtn.innerHTML = `<button class="skill-btn">Show Less<i class="ri-arrow-up-s-line skill-icon"></i></button>`;
    } else {

        skillShowBtn.innerHTML = `<button class="skill-btn">Show<i class="ri-arrow-down-s-line skill-icon"></i></button>`;
    }
});
