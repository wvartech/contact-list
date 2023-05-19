let contactos = [
  { names: "John", surname:"Doe", phone:404, locations:[{ciudad:"Winsconsin",direccion:"Nose Que"}] , email: "john.email" },
  { names: "Lisa",surname:"Carbonara", phone:444,locations:[{ciudad:"North Park", direccion:"El Valle"}], email: "lisacar@gmail.com" },
];

function AddContact(nombres, apellidos, telefono, ubicaciones, email) {
    const exists = contactos.find(c => c.names === nombres);
  if (!exists) {    
    contactos.push({ names: nombres, surname: apellidos, phone: telefono, locations: ubicaciones,  email: email });
  } else {
    console.log("Contact already exists");
  }
}

function RemoveContact(contact){
    contactos = contactos.filter(c => c.names !== contact);
}

function PrintContacts(){
    for(let contact of contactos){

        console.log("nombre: " + contact.names + " " + contact.surname + " telefono: " + contact.phone + " ubicaciones: " + contact.locations + " email: " + contact.email);
    }
}

console.log("Starting");

AddContact("Pedro", "Kabron",911,[{ciudad:"Kabronia",direccion:"Calle del arroz"}], "pedro@hotmail.com");
AddContact("Pedro", "Kabron",911,[{ciudad:"Kabronia",direccion:"Calle del arroz"}], "pedro@hotmail.com");
RemoveContact("John Doe");

PrintContacts();

//console.log(contactos);
