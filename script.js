document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill out all fields!');
    }
});
