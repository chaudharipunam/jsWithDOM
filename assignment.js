// Task: CRUD Functionality
// Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address.
// Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
// Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
// Delete a contact: Allow users to delete a contact by entering their name.
// Feel free to reach out if you have any questions.


function phoneContacts(stdname,mobile,Email){
      return{
        name:stdname,
        "phone no.":mobile,
        email: Email,
      }
}

let punam=phoneContacts("punam", 1234567890, "punam@gmail.com");
let Rutu=phoneContacts("Rutu", 1234567890, "rutu@gmail.com");
let Sonam=phoneContacts("Sonam", 2357896432, 'sonam@gmail.com');
let Rinky=phoneContacts("Rinky", 1357980642, 'rinky@gmail.com');
let seema =phoneContacts("seema", 9876543221, 'seema@gmail.com');

console.log(punam);
console.log(Rutu);
console.log(Sonam);
console.log(Rinky);
console.log(seema);

let arr1=[punam,Rutu,Sonam,Rinky,seema];
console.log(arr1);

// Add Contacts.....
function addNewContact(name, phone, email){
    const hi={
       "name":name,
       "phone no.":phone,
       "email":email,
    }
    arr1.push(hi);
    console.log(arr1);
}
//Enter the Name, Phone no., Email-id for create contact Here, like this-
addNewContact("khushi",456779277, "khushi@gmail.com");   
// addNewContact();

// Search contact by entering "name of user"......
function searchContact(name, arr1){
    let isContact=false;
    for(let names=0; names<arr1.length; names++){
        if(arr1[names].name===name){
            console.log(arr1[names]);
            isContact=true;
           break;
        }            
    }
    if(!isContact){
        console.log("this type of name no in Contact");
    }
}
searchContact("punam",[punam,Rutu,Sonam,Rinky,seema]);

// update the number & email-id......
function updateContact(std_name,mob_no, mail_id){
    let issearchName=false;
    for(let key=0; key<arr1.length; key++){
        if(arr1[key].name===std_name){
            return{
                name2:std_name,
                mobile:mob_no,
                gmail:mail_id
            }
            issearchName=true;
            break;
        }
    }
    if(!issearchName){
        return ("This contact not found");
    }
}
console.log(updateContact("khushi",77665553,"tarun@gmail.com"));

// delete contact by entering their name......
function deleteContact(name3){
    for(let I=0; I<arr1.length; I++){
        if(arr1[I].name===name3){
            arr1.splice(I,1);
            console.log(arr1);
        }
    }
}
deleteContact("Sonam");