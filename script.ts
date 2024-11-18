const skillShowBtn: HTMLElement | null = document.querySelector('.skill-btn')
const skillsContainer: HTMLElement | null =
  document.querySelector('.skills-container')
const skillIcon: HTMLElement | null = document.querySelector('.skill-icon')

const progressSteps: NodeListOf<HTMLElement> =
  document.querySelectorAll('.step')
const formSteps: NodeListOf<HTMLElement> =
  document.querySelectorAll('.form-step')
const nextBtn: HTMLElement | null = document.getElementById('form-btn-next')

let active = 1
progressSteps.forEach((step, i) => {
  step.addEventListener('click', () => {
    active = i + 1
    updateForm()
  })
})

// Personal Info Input elements (where the user provides input)
const userImageInput: HTMLInputElement | null =
  document.querySelector('#form-img')
const userFirstNameInput: HTMLInputElement | null =
  document.querySelector('#form-first-name')
const userLastNameInput: HTMLInputElement | null =
  document.querySelector('#form-last-name')
const userOccupationInput: HTMLInputElement | null =
  document.querySelector('#form-occupation')
const userAboutInput: HTMLInputElement | null =
  document.querySelector('#form-about-me')
const userPersonalInfoBtn: HTMLElement | null = document.getElementById(
  'add-personal-info-btn'
)

// Personal Info DOM elements (where the inputs will be displayed)
const userImageDOM: HTMLImageElement | null =
  document.querySelector('#cv-image-preview')
const userFirstNameDOM: HTMLElement | null =
  document.querySelector('.cv-first-name')
const userLastNameDOM: HTMLElement | null =
  document.querySelector('.cv-last-name')
const userOccupationDOM: HTMLElement | null =
  document.querySelector('.cv-occupation')
const userAboutDom: HTMLElement | null = document.querySelector('.about-child')

// Input Declarations for Contact
const userEmailInput: HTMLInputElement | null =
  document.querySelector('#form-email')
const userContactInput: HTMLInputElement | null =
  document.querySelector('#form-contact')
const userAddressInput: HTMLInputElement | null =
  document.querySelector('#form-address')
const userContactBtn: HTMLElement | null =
  document.getElementById('add-contact-btn')
// Selecting DOM Elements for Contact
const userEmailDOM: HTMLElement | null =
  document.querySelector('.cv-user-email')
const userPhoneDOM: HTMLElement | null =
  document.querySelector('.cv-user-phone')
const userAddressDOM: HTMLElement | null =
  document.querySelector('.cv-user-address')

// Input Declarations for Skill
const userSkillTitleInput: HTMLInputElement | null =
  document.querySelector('#form-skill-title')
const userSkillProficiencyInput: HTMLInputElement | null =
  document.querySelector('#form-skill-proficiency')
const userSkillBtn: HTMLElement | null =
  document.getElementById('add-skill-btn')
const skillsContainerDOM: HTMLElement | null =
  document.querySelector('.skills-container')

// Input Declarations for Education
const userEducationTitleInput: HTMLInputElement | null = document.querySelector(
  '#form-education-title'
)
const userEducationInstituteInput: HTMLInputElement | null =
  document.querySelector('#form-education-institute')
const userEducationStartInput: HTMLInputElement | null = document.querySelector(
  '#form-education-start-date'
)
const userEducationEndInput: HTMLInputElement | null = document.querySelector(
  '#form-education-end-date'
)
const userEducationPercentageInput: HTMLInputElement | null =
  document.querySelector('#form-education-percentage')
const userEducationBtn: HTMLElement | null =
  document.getElementById('add-education-btn')

// Selecting DOM container for education section
const educationContainer: HTMLElement | null = document.querySelector(
  '.cv-right-education'
)

// Input Declarations for Experience
const userExperienceTitleInput: HTMLInputElement | null =
  document.querySelector('#form-experience-role')
const userExperienceCompanyInput: HTMLInputElement | null =
  document.querySelector('#form-experience-company')
const userExperienceStartInput: HTMLInputElement | null =
  document.querySelector('#form-experience-start-date')
const userExperienceEndInput: HTMLInputElement | null = document.querySelector(
  '#form-experience-end-date'
)
const userExperienceDescriptionInput: HTMLInputElement | null =
  document.querySelector('#form-experience-description')
const userExperienceBtn: HTMLElement | null =
  document.getElementById('add-experience-btn')

// Selecting DOM container for Experience section
const experienceContainer: HTMLElement | null = document.querySelector(
  '.cv-right-experience'
)
const cvPersonalInfoSection: HTMLElement | null =
  document.querySelector('.cv-left-intro')
const formMsg: HTMLElement | null = document.querySelector('.form-msg')
const cvContactSection: HTMLElement | null =
  document.querySelector('.cv-left-contact')
const cvskillsSection: HTMLElement | null =
  document.querySelector('.cv-left-skills')
const cvSkillWrapper: HTMLElement | null = document.querySelector('.skill-wrpr')
const cvEducationSection: HTMLElement | null = document.querySelector(
  '.cv-right-education'
)
const cvExperienceSection: HTMLElement | null = document.querySelector(
  '.cv-right-experience'
)

cvPersonalInfoSection?.addEventListener('click', () => {
  active = 1
  loadToPersonalInfoForm()
  scrollTop()
  updateForm()
})
userImageDOM?.addEventListener('click', () => {
  active = 1
  scrollTop()
  updateForm()
})
cvContactSection?.addEventListener('click', () => {
  active = 2
  updateForm()
  scrollTop()
  loadToContactForm()
})
cvskillsSection?.addEventListener('click', () => {
  active = 3
  updateForm()
  console.log(cvSkillWrapper)
  scrollTop()
  FormMessageShow('Loaded Successfully, You Can add Skill')
})
cvEducationSection?.addEventListener('click', () => {
  active = 4
  updateForm()
  scrollTop()
  FormMessageShow('Loaded Successfully, You Can add Education')
})
cvExperienceSection?.addEventListener('click', () => {
  active = 5
  updateForm()
  scrollTop()
  FormMessageShow('Loaded Successfully, You Can add Experience')
})

function areFieldsFilled (inputs: (HTMLInputElement | null)[]): boolean {
  return inputs.every(input => input?.value.trim() !== '')
}
function formatMonthYear (dateValue: string): string {
  const [year, month] = dateValue.split('-') // Split the YYYY-MM format
  const monthNames = [
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
  ]
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`
}

userPersonalInfoBtn?.addEventListener('click', (e: Event) => {
  e.preventDefault()

  const inputs = [
    userFirstNameInput,
    userLastNameInput,
    userOccupationInput,
    userAboutInput,
    userImageInput
  ]

  if (!areFieldsFilled(inputs)) {
    FormMessageShow('Please fill in all fields in Personal Info!')
    return
  }

  updatePersonalInfo()
  clearPersonalInfoForm()
})

userContactBtn?.addEventListener('click', (e: Event) => {
  e.preventDefault()

  const inputs = [userEmailInput, userContactInput, userAddressInput]

  if (!areFieldsFilled(inputs)) {
    FormMessageShow('Please fill in all fields in Contact Info!')
    return
  }

  updateContactInfo()
  clearContactInfoForm()
})

userSkillBtn?.addEventListener('click', (e: Event) => {
  e.preventDefault()

  const inputs = [userSkillTitleInput, userSkillProficiencyInput]

  if (!areFieldsFilled(inputs)) {
    FormMessageShow('Please fill in all fields in Skills!')
    return
  }

  addSkill()
  FormMessageShow('Skill Added Successfully..You can Add More')
  clearSkillForm()
})

userEducationBtn?.addEventListener('click', (e: Event) => {
  e.preventDefault()

  const inputs = [
    userEducationTitleInput,
    userEducationStartInput,
    userEducationEndInput,
    userEducationInstituteInput,
    userEducationPercentageInput
  ]

  if (!areFieldsFilled(inputs)) {
    FormMessageShow('Please fill in all fields in Education!')
    return
  }

  addEducation()
  FormMessageShow('Education Added Successfully..You can Add More')
  clearEducationForm()
})

userExperienceBtn?.addEventListener('click', (e: Event) => {
  e.preventDefault()

  const inputs = [
    userExperienceTitleInput,
    userExperienceStartInput,
    userExperienceEndInput,
    userExperienceCompanyInput,
    userExperienceDescriptionInput
  ]

  if (!areFieldsFilled(inputs)) {
    FormMessageShow('Please fill in all fields in Experience!')
    return
  }

  addExperience()
  FormMessageShow('Experience Added Successfully..You can Add More')
  clearExperienceForm()
})

nextBtn?.addEventListener('click', e => {
  e.preventDefault()
  if (active > formSteps.length - 1) {
    active = active - 1
  }
  active++
  updateForm()
})

function updateForm () {
  formSteps.forEach((step, i) => {
    if (i == active - 1) {
      step.classList.add('active')
      progressSteps[i].classList.add('active')
    } else {
      step.classList.remove('active')
      progressSteps[i].classList.remove('active')
    }
  })
}
function updatePersonalInfo (): void {
  // Update First Name
  if (userFirstNameInput && userFirstNameDOM) {
    userFirstNameDOM.textContent = userFirstNameInput.value
  }

  // Update Last Name
  if (userLastNameInput && userLastNameDOM) {
    userLastNameDOM.textContent = userLastNameInput.value
  }

  // Update Occupation
  if (userOccupationInput && userOccupationDOM) {
    userOccupationDOM.textContent = userOccupationInput.value
  }

  //Update About
  if (userAboutInput && userAboutDom) {
    userAboutDom.textContent = userAboutInput.value
  }

  // Update Image (if a file is chosen)
  if (
    userImageInput &&
    userImageInput.files &&
    userImageInput.files[0] &&
    userImageDOM
  ) {
    const reader = new FileReader()
    reader.onload = function (e) {
      if (e.target?.result && typeof e.target.result === 'string') {
        userImageDOM.src = e.target.result // Set image source to the uploaded file
      }
    }
    reader.readAsDataURL(userImageInput.files[0])
  }
}
function updateContactInfo () {
  // Update Email
  if (userEmailInput && userEmailDOM) {
    userEmailDOM.textContent = userEmailInput.value
  }

  // Update Phone/Contact
  if (userContactInput && userPhoneDOM) {
    userPhoneDOM.textContent = userContactInput.value
  }

  // Update Address
  if (userAddressInput && userAddressDOM) {
    userAddressDOM.textContent = userAddressInput.value
  }
}
function addSkill (): void {
  const skillTitle = userSkillTitleInput?.value
  const skillProficiency = userSkillProficiencyInput?.value

  const newSkill = document.createElement('div')
  newSkill.classList.add('skill-wrpr')
  newSkill.innerHTML = `
    <p class="user-skill">${skillTitle}</p>
    <div class="level">
      <div class="internal-level" style="width: ${skillProficiency}%;"></div>
    </div>
  `
  skillsContainer?.appendChild(newSkill)
  console.log(newSkill)
}
function addEducation (): void {
  const educationTitle = userEducationTitleInput?.value
  const educationStartDate = userEducationStartInput?.value
  const educationEndDate = userEducationEndInput?.value
  const educationInstitute = userEducationInstituteInput?.value
  const educationPercentage = userEducationPercentageInput?.value

  const formattedStartDate = educationStartDate
    ? formatMonthYear(educationStartDate)
    : ''
  const formattedEndDate = educationEndDate
    ? formatMonthYear(educationEndDate)
    : ''
  const newEducation = document.createElement('div')
  newEducation.classList.add('education-child')
  newEducation.innerHTML = `
    <div class="title-name">
      <h4 id="form-education-title">${educationTitle}</h4>
        <div class="date">
          <span class="start-date">${formattedStartDate} to</span>
          <span class="end-date">${formattedEndDate}</span>
        </div>
    </div>
    <h6 id="form-education-institute">${educationInstitute}</h6>
    <p>Percentage: <span>${educationPercentage}%</span></p>
  `

  educationContainer?.appendChild(newEducation)
}
function addExperience (): void {
  const experienceTitle = userExperienceTitleInput?.value
  const experienceStartDate = userExperienceStartInput?.value
  const experienceEndDate = userExperienceEndInput?.value
  const experienceCompany = userExperienceCompanyInput?.value
  const userExperienceDescription = userExperienceDescriptionInput?.value

  const formattedStartDate = experienceStartDate
    ? formatMonthYear(experienceStartDate)
    : ''
  const formattedEndDate = experienceEndDate
    ? formatMonthYear(experienceEndDate)
    : ''

  const newExperience = document.createElement('div')
  newExperience.classList.add('experience-child')
  newExperience.innerHTML = `
    <h4 class="cv-experience-title">${experienceTitle}</h4>
        <div class="date">
          <span class="start-date">${formattedStartDate} to</span>
          <span class="end-date">${formattedEndDate}</span>
          </div>
          <h6>${experienceCompany}</h6>
          <p>
            ${userExperienceDescription}
          </p>
        </div>
  `

  experienceContainer?.appendChild(newExperience)
}

function clearPersonalInfoForm (): void {
  // Clear text inputs
  if (userFirstNameInput) userFirstNameInput.value = ''
  if (userLastNameInput) userLastNameInput.value = ''
  if (userOccupationInput) userOccupationInput.value = ''
  if (userAboutInput) userAboutInput.value = ''
  // Clear the file input
  if (userImageInput) userImageInput.value = ''
}
function clearContactInfoForm (): void {
  if (userEmailInput) userEmailInput.value = ''
  if (userContactInput) userContactInput.value = ''
  if (userAddressInput) userAddressInput.value = ''
}
function clearSkillForm (): void {
  if (userSkillTitleInput) userSkillTitleInput.value = ''
  if (userSkillProficiencyInput) userSkillProficiencyInput.value = ''
}
function clearEducationForm (): void {
  if (userEducationTitleInput) userEducationTitleInput.value = ''
  if (userEducationStartInput) userEducationStartInput.value = ''
  if (userEducationEndInput) userEducationEndInput.value = ''
  if (userEducationInstituteInput) userEducationInstituteInput.value = ''
  if (userEducationPercentageInput) userEducationPercentageInput.value = ''
}
function clearExperienceForm (): void {
  if (userExperienceTitleInput) userExperienceTitleInput.value = ''
  if (userExperienceStartInput) userExperienceStartInput.value = ''
  if (userExperienceEndInput) userExperienceEndInput.value = ''
  if (userExperienceCompanyInput) userExperienceCompanyInput.value = ''
  if (userExperienceDescriptionInput) userExperienceDescriptionInput.value = ''
}
function FormMessageShow (msg: string): void {
  if (formMsg) {
    formMsg.textContent = msg || ''
    formMsg.classList.add('active')
    setTimeout(() => {
      formMsg?.classList.remove('active')
    }, 2000)
  }
}

function loadToPersonalInfoForm (): void {
  if (userFirstNameInput && userFirstNameDOM) {
    userFirstNameInput.value = userFirstNameDOM.textContent || ''
  }

  if (userLastNameInput && userLastNameDOM) {
    userLastNameInput.value = userLastNameDOM.textContent || ''
  }

  if (userOccupationInput && userOccupationDOM) {
    userOccupationInput.value = userOccupationDOM.textContent || ''
  }

  if (userAboutInput && userAboutDom) {
    userAboutInput.value = userAboutDom.textContent || ''
  }

  FormMessageShow('Loaded Successfully... You can edit Personal Info')
  if (userPersonalInfoBtn)
    userPersonalInfoBtn.textContent = 'Update Personal Info!'
}
function loadToContactForm (): void {
  // Load Email
  if (userEmailInput && userEmailDOM) {
    userEmailInput.value = userEmailDOM.textContent || ''
  }

  // Load Phone/Contact
  if (userContactInput && userPhoneDOM) {
    userContactInput.value = userPhoneDOM.textContent || ''
  }

  // Load Address
  if (userAddressInput && userAddressDOM) {
    userAddressInput.value = userAddressDOM.textContent || ''
  }

  // Update the button text for clarity
  if (userContactBtn) {
    userContactBtn.textContent = 'Update Contact Info'
  }

  FormMessageShow('Loaded successfully.. You can Edit')
}

function scrollTop () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
