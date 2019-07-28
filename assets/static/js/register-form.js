// Process contact form
$('#contact-form').submit(function (event) {
  event.preventDefault();
  setTimeout(function () {
    // Get data
    var data = {
      'entry.913235457': $('#name').val(),
      'entry.1542297706': $('#email').val(),
      'entry.456759634': $('#phone').val(),
      'entry.565163288': $('#social').val(),
      'entry.1399640839': $('#about').val(),
      'entry.893870923': $('#photo').val(),
      'entry.1562648896': $('#title').val(),
      'entry.1759052249': $('#audience').val(),
      'entry.166635436': $('#description').val(),
      'entry.789053992': $('#requirements').val(),
      'entry.1519077548': $('#comments').val(),
    }

    var isValid = true;
    if (
      !data['entry.913235457'] ||
      !data['entry.1542297706'] ||
      !data['entry.456759634'] ||
      !data['entry.565163288'] ||
      !data['entry.1399640839'] ||
      !data['entry.1562648896'] ||
      !data['entry.1759052249'] ||
      !data['entry.166635436'] ||
      !data['entry.789053992']
    ) {
      isValid = false
    }

    if (isValid) {
      // Validate for
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdSsHtpe0q_SrATfRtlFH_9RlwS9HM97OuBjwrey0cn9MPv-A/formResponse',
        type: 'POST',
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function (response) {
          $('#contact-form').hide()
          $('#feedback').show();
        },
        error: function (error) {
          $('#contact-form').hide()
          $('#feedback').show();
        }
      });
    }

  }, 300);
});