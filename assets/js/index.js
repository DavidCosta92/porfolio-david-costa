(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('SY9HJBbS46YCiQfNz');
})();


window.onload = function() {
    const serviceID= "service_ikp6o26";
    const templateID= "template_9d1snnb";
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}