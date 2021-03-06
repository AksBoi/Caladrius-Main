
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA8Se1u5bYf34kIGFVIdKahdB5WunXWg0Y",
  authDomain: "donateform-96861.firebaseapp.com",
  databaseURL: "https://donateform-96861-default-rtdb.firebaseio.com",
  projectId: "donateform-96861",
  storageBucket: "donateform-96861.appspot.com",
  messagingSenderId: "1035749904577",
  appId: "1:1035749904577:web:84fd06d1e9b0478ed0c440"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Reference messages collection
// var messagesRef = firebase.database().ref('messages'+phonenumber);

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var bloodgroup = getInputVal('bloodgroup');
  var state = getInputVal('state');
  var district = getInputVal('district');
  var pincode = getInputVal('pincode');
  var phone = getInputVal('phone');

  // Save message
  saveMessage(name, bloodgroup, state, district, pincode, phone);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, bloodgroup, state, district, pincode, phone) {
  firebase.database().ref('DONORS/' + phone).push();
  firebase.database().ref('DONORS/' + phone).set({
    name: name,
    bloodgroup: bloodgroup,
    state: state,
    district: district,
    pincode: pincode,
    phone: phone,

  });
}