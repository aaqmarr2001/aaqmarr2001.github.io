function sendEmail(){
  Email.send({
    Host : "slect your smtp server",
    Username : "aqmar2001@live.com",
    Password : "fix it",
    To : 'aqmar2001@live.com',
    From : document.getElementById("email").value,
    Subject : "New contact form in query",
    Body : "Name: " + document.getElementById("name").value
     + "<br> Email: " + document.getElementById("email").value
     + "<br> Phone: " + document.getElementById("phone").value
     + "<br> Message: " + document.getElementById("msg").value
    }).then(
      message => alert(message)
    );
}