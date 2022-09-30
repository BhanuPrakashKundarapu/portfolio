
function sendEmail(){
    
Email.send({
    SecurityToken: "939265e0-99e6-4f1b-b908-c0d80b1e06f7",
    // Host : "smtp.elasticemail.com",
    // Username : "bhanukundarapu55@gmail.com",
    // Password : "92D9487728246FF305C7FE8E9175F2ED8530",
    To : 'bhanuchary765@gmail.com',
    From : document.getElementsByClassName('email').value,
    Subject :"A IMPORTANT Query ",
    Body : "And this is the body"
}).then(
  message => alert("message sent")
);

}
sendEmail();
// 92D9487728246FF305C7FE8E9175F2ED8530
console.log('nothing')
// "k"