var skillShowBtn = document.querySelector('.skill-btn');
var skillsContainer = document.querySelector('.skills-container');
var skillIcon = document.querySelector('.skill-icon');
var progressSteps = document.querySelectorAll('.step');
var formSteps = document.querySelectorAll('.form-step');
var nextBtn = document.getElementById('form-btn-next');
var active = 1;
progressSteps.forEach(function (step, i) {
    step.addEventListener('click', function () {
        active = i + 1;
        updateForm();
    });
});
// Personal Info Input elements (where the user provides input)
var userImageInput = document.querySelector('#form-img');
var userFirstNameInput = document.querySelector('#form-first-name');
var userLastNameInput = document.querySelector('#form-last-name');
var userOccupationInput = document.querySelector('#form-occupation');
var userAboutInput = document.querySelector('#form-about-me');
var userPersonalInfoBtn = document.getElementById('add-personal-info-btn');
// Personal Info DOM elements (where the inputs will be displayed)
var userImageDOM = document.querySelector('#cv-image-preview');
var userFirstNameDOM = document.querySelector('.cv-first-name');
var userLastNameDOM = document.querySelector('.cv-last-name');
var userOccupationDOM = document.querySelector('.cv-occupation');
var userAboutDom = document.querySelector('.about-child');
// Input Declarations for Contact
var userEmailInput = document.querySelector('#form-email');
var userContactInput = document.querySelector('#form-contact');
var userAddressInput = document.querySelector('#form-address');
var userContactBtn = document.getElementById('add-contact-btn');
// Selecting DOM Elements for Contact
var userEmailDOM = document.querySelector('.cv-user-email');
var userPhoneDOM = document.querySelector('.cv-user-phone');
var userAddressDOM = document.querySelector('.cv-user-address');
// Input Declarations for Skill
var userSkillTitleInput = document.querySelector('#form-skill-title');
var userSkillProficiencyInput = document.querySelector('#form-skill-proficiency');
var userSkillBtn = document.getElementById('add-skill-btn');
var skillsContainerDOM = document.querySelector('.skills-container');
// Input Declarations for Education
var userEducationTitleInput = document.querySelector('#form-education-title');
var userEducationInstituteInput = document.querySelector('#form-education-institute');
var userEducationStartInput = document.querySelector('#form-education-start-date');
var userEducationEndInput = document.querySelector('#form-education-end-date');
var userEducationPercentageInput = document.querySelector('#form-education-percentage');
var userEducationBtn = document.getElementById('add-education-btn');
// Selecting DOM container for education section
var educationContainer = document.querySelector('.cv-right-education');
// Input Declarations for Experience
var userExperienceTitleInput = document.querySelector('#form-experience-role');
var userExperienceCompanyInput = document.querySelector('#form-experience-company');
var userExperienceStartInput = document.querySelector('#form-experience-start-date');
var userExperienceEndInput = document.querySelector('#form-experience-end-date');
var userExperienceDescriptionInput = document.querySelector('#form-experience-description');
var userExperienceBtn = document.getElementById('add-experience-btn');
// Selecting DOM container for Experience section
var experienceContainer = document.querySelector('.cv-right-experience');
var cvPersonalInfoSection = document.querySelector('.cv-left-intro');
var formMsg = document.querySelector('.form-msg');
var cvContactSection = document.querySelector('.cv-left-contact');
var cvskillsSection = document.querySelector('.cv-left-skills');
var cvSkillWrapper = document.querySelector('.skill-wrpr');
var cvEducationSection = document.querySelector('.cv-right-education');
var cvExperienceSection = document.querySelector('.cv-right-experience');
cvPersonalInfoSection === null || cvPersonalInfoSection === void 0 ? void 0 : cvPersonalInfoSection.addEventListener('click', function () {
    active = 1;
    loadToPersonalInfoForm();
    scrollTop();
    updateForm();
});
userImageDOM === null || userImageDOM === void 0 ? void 0 : userImageDOM.addEventListener('click', function () {
    active = 1;
    scrollTop();
    updateForm();
});
cvContactSection === null || cvContactSection === void 0 ? void 0 : cvContactSection.addEventListener('click', function () {
    active = 2;
    updateForm();
    scrollTop();
    loadToContactForm();
});
cvskillsSection === null || cvskillsSection === void 0 ? void 0 : cvskillsSection.addEventListener('click', function () {
    active = 3;
    updateForm();
    console.log(cvSkillWrapper);
    scrollTop();
    FormMessageShow('Loaded Successfully, You Can add Skill');
});
cvEducationSection === null || cvEducationSection === void 0 ? void 0 : cvEducationSection.addEventListener('click', function () {
    active = 4;
    updateForm();
    scrollTop();
    FormMessageShow('Loaded Successfully, You Can add Education');
});
cvExperienceSection === null || cvExperienceSection === void 0 ? void 0 : cvExperienceSection.addEventListener('click', function () {
    active = 5;
    updateForm();
    scrollTop();
    FormMessageShow('Loaded Successfully, You Can add Experience');
});
function areFieldsFilled(inputs) {
    return inputs.every(function (input) { return (input === null || input === void 0 ? void 0 : input.value.trim()) !== ''; });
}
function formatMonthYear(dateValue) {
    var _a = dateValue.split('-'), year = _a[0], month = _a[1]; // Split the YYYY-MM format
    var monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    return "".concat(monthNames[parseInt(month, 10) - 1], " ").concat(year);
}
userPersonalInfoBtn === null || userPersonalInfoBtn === void 0 ? void 0 : userPersonalInfoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputs = [
        userFirstNameInput,
        userLastNameInput,
        userOccupationInput,
        userAboutInput,
        userImageInput
    ];
    if (!areFieldsFilled(inputs)) {
        FormMessageShow('Please fill in all fields in Personal Info!');
        return;
    }
    updatePersonalInfo();
    clearPersonalInfoForm();
});
userContactBtn === null || userContactBtn === void 0 ? void 0 : userContactBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputs = [userEmailInput, userContactInput, userAddressInput];
    if (!areFieldsFilled(inputs)) {
        FormMessageShow('Please fill in all fields in Contact Info!');
        return;
    }
    updateContactInfo();
    clearContactInfoForm();
});
userSkillBtn === null || userSkillBtn === void 0 ? void 0 : userSkillBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputs = [userSkillTitleInput, userSkillProficiencyInput];
    if (!areFieldsFilled(inputs)) {
        FormMessageShow('Please fill in all fields in Skills!');
        return;
    }
    addSkill();
    FormMessageShow('Skill Added Successfully..You can Add More');
    clearSkillForm();
});
userEducationBtn === null || userEducationBtn === void 0 ? void 0 : userEducationBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputs = [
        userEducationTitleInput,
        userEducationStartInput,
        userEducationEndInput,
        userEducationInstituteInput,
        userEducationPercentageInput
    ];
    if (!areFieldsFilled(inputs)) {
        FormMessageShow('Please fill in all fields in Education!');
        return;
    }
    addEducation();
    FormMessageShow('Education Added Successfully..You can Add More');
    clearEducationForm();
});
userExperienceBtn === null || userExperienceBtn === void 0 ? void 0 : userExperienceBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputs = [
        userExperienceTitleInput,
        userExperienceStartInput,
        userExperienceEndInput,
        userExperienceCompanyInput,
        userExperienceDescriptionInput
    ];
    if (!areFieldsFilled(inputs)) {
        FormMessageShow('Please fill in all fields in Experience!');
        return;
    }
    addExperience();
    FormMessageShow('Experience Added Successfully..You can Add More');
    clearExperienceForm();
});
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (active > formSteps.length - 1) {
        active = active - 1;
    }
    active++;
    updateForm();
});
function updateForm() {
    formSteps.forEach(function (step, i) {
        if (i == active - 1) {
            step.classList.add('active');
            progressSteps[i].classList.add('active');
        }
        else {
            step.classList.remove('active');
            progressSteps[i].classList.remove('active');
        }
    });
}
function updatePersonalInfo() {
    // Update First Name
    if (userFirstNameInput && userFirstNameDOM) {
        userFirstNameDOM.textContent = userFirstNameInput.value;
    }
    // Update Last Name
    if (userLastNameInput && userLastNameDOM) {
        userLastNameDOM.textContent = userLastNameInput.value;
    }
    // Update Occupation
    if (userOccupationInput && userOccupationDOM) {
        userOccupationDOM.textContent = userOccupationInput.value;
    }
    //Update About
    if (userAboutInput && userAboutDom) {
        userAboutDom.textContent = userAboutInput.value;
    }
    // Update Image (if a file is chosen)
    if (userImageInput &&
        userImageInput.files &&
        userImageInput.files[0] &&
        userImageDOM) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) && typeof e.target.result === 'string') {
                userImageDOM.src = e.target.result; // Set image source to the uploaded file
            }
        };
        reader.readAsDataURL(userImageInput.files[0]);
    }
}
function updateContactInfo() {
    // Update Email
    if (userEmailInput && userEmailDOM) {
        userEmailDOM.textContent = userEmailInput.value;
    }
    // Update Phone/Contact
    if (userContactInput && userPhoneDOM) {
        userPhoneDOM.textContent = userContactInput.value;
    }
    // Update Address
    if (userAddressInput && userAddressDOM) {
        userAddressDOM.textContent = userAddressInput.value;
    }
}
function addSkill() {
    var skillTitle = userSkillTitleInput === null || userSkillTitleInput === void 0 ? void 0 : userSkillTitleInput.value;
    var skillProficiency = userSkillProficiencyInput === null || userSkillProficiencyInput === void 0 ? void 0 : userSkillProficiencyInput.value;
    var newSkill = document.createElement('div');
    newSkill.classList.add('skill-wrpr');
    newSkill.innerHTML = "\n    <p class=\"user-skill\">".concat(skillTitle, "</p>\n    <div class=\"level\">\n      <div class=\"internal-level\" style=\"width: ").concat(skillProficiency, "%;\"></div>\n    </div>\n  ");
    skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.appendChild(newSkill);
    console.log(newSkill);
}
function addEducation() {
    var educationTitle = userEducationTitleInput === null || userEducationTitleInput === void 0 ? void 0 : userEducationTitleInput.value;
    var educationStartDate = userEducationStartInput === null || userEducationStartInput === void 0 ? void 0 : userEducationStartInput.value;
    var educationEndDate = userEducationEndInput === null || userEducationEndInput === void 0 ? void 0 : userEducationEndInput.value;
    var educationInstitute = userEducationInstituteInput === null || userEducationInstituteInput === void 0 ? void 0 : userEducationInstituteInput.value;
    var educationPercentage = userEducationPercentageInput === null || userEducationPercentageInput === void 0 ? void 0 : userEducationPercentageInput.value;
    var formattedStartDate = educationStartDate
        ? formatMonthYear(educationStartDate)
        : '';
    var formattedEndDate = educationEndDate
        ? formatMonthYear(educationEndDate)
        : '';
    var newEducation = document.createElement('div');
    newEducation.classList.add('education-child');
    newEducation.innerHTML = "\n    <div class=\"title-name\">\n      <h4 id=\"form-education-title\">".concat(educationTitle, "</h4>\n        <div class=\"date\">\n          <span class=\"start-date\">").concat(formattedStartDate, " to</span>\n          <span class=\"end-date\">").concat(formattedEndDate, "</span>\n        </div>\n    </div>\n    <h6 id=\"form-education-institute\">").concat(educationInstitute, "</h6>\n    <p>Percentage: <span>").concat(educationPercentage, "%</span></p>\n  ");
    educationContainer === null || educationContainer === void 0 ? void 0 : educationContainer.appendChild(newEducation);
}
function addExperience() {
    var experienceTitle = userExperienceTitleInput === null || userExperienceTitleInput === void 0 ? void 0 : userExperienceTitleInput.value;
    var experienceStartDate = userExperienceStartInput === null || userExperienceStartInput === void 0 ? void 0 : userExperienceStartInput.value;
    var experienceEndDate = userExperienceEndInput === null || userExperienceEndInput === void 0 ? void 0 : userExperienceEndInput.value;
    var experienceCompany = userExperienceCompanyInput === null || userExperienceCompanyInput === void 0 ? void 0 : userExperienceCompanyInput.value;
    var userExperienceDescription = userExperienceDescriptionInput === null || userExperienceDescriptionInput === void 0 ? void 0 : userExperienceDescriptionInput.value;
    var formattedStartDate = experienceStartDate
        ? formatMonthYear(experienceStartDate)
        : '';
    var formattedEndDate = experienceEndDate
        ? formatMonthYear(experienceEndDate)
        : '';
    var newExperience = document.createElement('div');
    newExperience.classList.add('experience-child');
    newExperience.innerHTML = "\n    <h4 class=\"cv-experience-title\">".concat(experienceTitle, "</h4>\n        <div class=\"date\">\n          <span class=\"start-date\">").concat(formattedStartDate, " to</span>\n          <span class=\"end-date\">").concat(formattedEndDate, "</span>\n          </div>\n          <h6>").concat(experienceCompany, "</h6>\n          <p>\n            ").concat(userExperienceDescription, "\n          </p>\n        </div>\n  ");
    experienceContainer === null || experienceContainer === void 0 ? void 0 : experienceContainer.appendChild(newExperience);
}
function clearPersonalInfoForm() {
    // Clear text inputs
    if (userFirstNameInput)
        userFirstNameInput.value = '';
    if (userLastNameInput)
        userLastNameInput.value = '';
    if (userOccupationInput)
        userOccupationInput.value = '';
    if (userAboutInput)
        userAboutInput.value = '';
    // Clear the file input
    if (userImageInput)
        userImageInput.value = '';
}
function clearContactInfoForm() {
    if (userEmailInput)
        userEmailInput.value = '';
    if (userContactInput)
        userContactInput.value = '';
    if (userAddressInput)
        userAddressInput.value = '';
}
function clearSkillForm() {
    if (userSkillTitleInput)
        userSkillTitleInput.value = '';
    if (userSkillProficiencyInput)
        userSkillProficiencyInput.value = '';
}
function clearEducationForm() {
    if (userEducationTitleInput)
        userEducationTitleInput.value = '';
    if (userEducationStartInput)
        userEducationStartInput.value = '';
    if (userEducationEndInput)
        userEducationEndInput.value = '';
    if (userEducationInstituteInput)
        userEducationInstituteInput.value = '';
    if (userEducationPercentageInput)
        userEducationPercentageInput.value = '';
}
function clearExperienceForm() {
    if (userExperienceTitleInput)
        userExperienceTitleInput.value = '';
    if (userExperienceStartInput)
        userExperienceStartInput.value = '';
    if (userExperienceEndInput)
        userExperienceEndInput.value = '';
    if (userExperienceCompanyInput)
        userExperienceCompanyInput.value = '';
    if (userExperienceDescriptionInput)
        userExperienceDescriptionInput.value = '';
}
function FormMessageShow(msg) {
    if (formMsg) {
        formMsg.textContent = msg || '';
        formMsg.classList.add('active');
        setTimeout(function () {
            formMsg === null || formMsg === void 0 ? void 0 : formMsg.classList.remove('active');
        }, 2000);
    }
}
function loadToPersonalInfoForm() {
    if (userFirstNameInput && userFirstNameDOM) {
        userFirstNameInput.value = userFirstNameDOM.textContent || '';
    }
    if (userLastNameInput && userLastNameDOM) {
        userLastNameInput.value = userLastNameDOM.textContent || '';
    }
    if (userOccupationInput && userOccupationDOM) {
        userOccupationInput.value = userOccupationDOM.textContent || '';
    }
    if (userAboutInput && userAboutDom) {
        userAboutInput.value = userAboutDom.textContent || '';
    }
    FormMessageShow('Loaded Successfully... You can edit Personal Info');
    if (userPersonalInfoBtn)
        userPersonalInfoBtn.textContent = 'Update Personal Info!';
}
function loadToContactForm() {
    // Load Email
    if (userEmailInput && userEmailDOM) {
        userEmailInput.value = userEmailDOM.textContent || '';
    }
    // Load Phone/Contact
    if (userContactInput && userPhoneDOM) {
        userContactInput.value = userPhoneDOM.textContent || '';
    }
    // Load Address
    if (userAddressInput && userAddressDOM) {
        userAddressInput.value = userAddressDOM.textContent || '';
    }
    // Update the button text for clarity
    if (userContactBtn) {
        userContactBtn.textContent = 'Update Contact Info';
    }
    FormMessageShow('Loaded successfully.. You can Edit');
}
function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
