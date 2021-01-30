$( document ).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      console.log('form-data==>' + JSON.stringify($(this).serialize()));
      var email = $(this).find('#form_email').val();
      var subject = $(this).find('#form_need').val();
      var message = $(this).find('#form_message').val();
      if (email != null) {
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "theviajerosfamily@gmail.com",
          Password : "B79118B24D3405FA536BC0EFE6235DDDB382",
          To : 'weeklyulamplanner@gmail.com',
          From : 'theviajerosfamily@gmail.com',
          Subject : subject,
          Body : message
        }).then(
            message => alert(message)
        );
      }
    });
});
