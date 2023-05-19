let contactos = [
  { name: "John Doe", email: "john.email" },
  { name: "Lisa Carbonara", email: "lisacar@gmail.com" },
];

function AddContact(contact, email) {
    const exists = contactos.find(c => c.name === contact);
  if (!exists) {
    contactos.push({ name: contact, email: email });
  } else {
    console.log("Contact already exists");
  }
}

function RemoveContact(contact){
    contactos = contactos.filter(c => c.name !== contact);
}

function PrintContacts(){
    for(let contact of contactos){
        console.log("nombre: " + contact.name + " email: " + contact.email);
    }
}

console.log("Starting");

AddContact("Pedro Kabron","pedro@hotmail.com");
AddContact("Pedro Kabron","pedro@hotmail.com");
RemoveContact("John Doe");

PrintContacts();

//console.log(contactos);
