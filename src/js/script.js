var offerForm = $('#offer-form');

offerForm.on('submit', function(event){
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(){
      $('#modal-success').addClass('modal_active');
      $('.input').val('');
    }
  });
});