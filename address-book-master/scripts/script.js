"use strict";
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        let newContact = new Contact(name, email, phone, relation);
        this.contacts.push(newContact);
    }
    display() {
        document.querySelector(".contact_container").innerHTML = "";
        this.contacts.forEach((person, index) => {
            const contact = document.createElement("div");
            contact.classList.add("contact_card");
            contact.setAttribute("index", index);
            contact.innerHTML = `
                <p>Name: ${person.name}</p>
                <p>Email: ${person.email}</p>
                <p>Phone: ${person.phone}</p>
                <p>Relation: ${person.relation}</p>
                <i class="fas fa-trash delete_btn" index=${index}></i>
            `; 
            document.querySelector(".contact_container").append(contact);
        });
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        this.display();
    }
}


const addressBook = new AddressBook(); 
addressBook.add("Ishanki Verma","ishankiverma4@gmail.com","367-787-898","Family");
addressBook.add("Juveria Rasool","juveriarasool@gmail.com","8764496512","Friend");
addressBook.add("John","moon12233","7454154589","Coworker");
addressBook.display();
function handleSubmit(event) {
    event.preventDefault();
    addressBook.add(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value);
    form.reset(); 
    addressBook.display();
}

function deleteHandler(event) {
    console.dir(event)
    if (event.target.classList.contains("fa-trash")) {
        const index = event.target.getAttribute("index");
        addressBook.deleteAt(index);
        addressBook.display();
    }
}

const form = document.querySelector("form");
const contactContainer = document.querySelector(".contact_container");

form.addEventListener("submit", handleSubmit);
contactContainer.addEventListener("click", deleteHandler);