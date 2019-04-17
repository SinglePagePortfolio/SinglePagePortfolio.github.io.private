function buildMessageBody($form) {
  var message = 'Contact form message received! <br><br>';

  var name = $form.find('#name-field').val();
  var email = $form.find('#email-field').val();
  var phoneNumber = $form.find('#phone-number-field').val();
  var query = $form.find('#query-field').val();

  message = message + 'Name: ' + name + '<br>';
  message = message + 'Email: ' + email + '<br>';
  message = message + 'Phone Number: ' + phoneNumber + '<br>';
  message = message + 'Query: ' + query;

  return message;
}

$(document).ready(function () {
  $('#contact-form').submit(function (e) {
    e.preventDefault();

    $('#contact-form-submit-button').prop('disabled', true);

    $.post('https://mailthis.to/singlepageportfolioemails@gmail.com', {
      email: 'johndoe@github.io',
      _subject: 'Contact Form Submission',
      message: buildMessageBody($(this))
    }).then(function () {
      location.href = 'https://mailthis.to/confirm';
    }).catch(function () {
      $('#contact-form-submit-button').prop('disabled', false);
      alert('There was a problem submitting your contact enquiry. Please try again later.');
    });
  });

  $('#portfolio-button').click(function () {
    $('html, body').animate({
      scrollTop: $('#portfolio-section').offset().top
    }, 1500);
  });
})
