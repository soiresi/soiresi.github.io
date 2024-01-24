
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.send("service_e4ojo08", "template_juq56y9", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        attendance: document.getElementById('attendance').value,
        guests: document.getElementById('guests').value,
        comments: document.getElementById('comments').value,
        kehr: document.getElementById('kehr').value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        window.location.href = 'confirmation.html';
    }, function(error) {
        console.log('FAILED...', error);
        alert("Das hat nicht funktioniert :( Wende dich an Theresa oder versuch es später nochmal! ")
    });
});

