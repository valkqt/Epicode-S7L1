const pets = []
const petImages = ['/img/cheems.jpg', '/img/doge.jpg', '/img/terry.png', '/img/frank.png', '/img/gavin.png', ]

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }

    compareAge(user) {
        if (this.age > user.age) {
            `${this.firstName} è più vecchio di ${user.name}!`
        } else if (this.age === user.age){
            `${this.firstName} ha la stessa età di ${user.name}!`
        } else {
            `${user.name}è più vecchio di ${this.firstName}!`
        }
    }
}

let a = new User('plofi', 'briccoli', '33', 'cesena')

class Pet {
    constructor (petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }

    hasSameOwner(pet) {
        if (this.ownerName === pet.ownerName) {
            return true
        } else {
            return false
        }
    }
}

function petForm() {
    let name = document.getElementById("petName").value
    let owner = document.getElementById("ownerName").value
    let species = document.getElementById("species").value
    let breed = document.getElementById('breed').value

    for (prop of [name, owner, species, breed]) {
        if (!prop) {
            alert('pls write some stuff')
            return
        }
    }

    const newPet = new Pet(name, owner, species, breed)
    pets.push(newPet)
    showPetData(name, owner, species, breed)
    console.log(name)
    name = ""
    owner = ""
    species = ""
    breed = ""

}

function showPetData(name, owner, species, breed) {

    const container = document.querySelector('.showData')
    container.style.display = 'block'
    const outerBox = document.createElement('div')
    const imgContainer = document.createElement('div')
    const textContainer = document.createElement('div')
    container.appendChild(outerBox)
    outerBox.appendChild(imgContainer)
    outerBox.appendChild(textContainer)
    outerBox.classList.add('showPet')
    textContainer.classList.add('showPetText')


    const image = document.createElement('img')
    imgContainer.appendChild(image)
    image.setAttribute('src', `${petImages[Math.floor(Math.random() * 5)]}`)


    const text1 = document.createElement('div')
    const text2 = document.createElement('div')
    textContainer.appendChild(text1)
    textContainer.appendChild(text2)


    const paragraph1 = document.createElement('p')
    const paragraph2 = document.createElement('p')
    const paragraph3 = document.createElement('p')
    const paragraph4 = document.createElement('p')
    paragraph1.textContent = name
    paragraph2.textContent = breed
    paragraph3.textContent = species
    paragraph4.textContent = `Owner: ${owner}`

    text1.appendChild(paragraph1)
    text1.appendChild(paragraph2)
    text2.appendChild(paragraph3)
    text2.appendChild(paragraph4)



}

function formSubmit() {
    const submit = document.querySelector("[type='submit']")
    submit.addEventListener('click', (e) => {e.preventDefault()})
    submit.addEventListener('click', petForm)
}


formSubmit()