$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var modalSuccess = $('#modal-success');
  var close = $('.modal-dialog__close');
  var cardLink = $('.card__link');

  button.on('click', function(){
    modal.addClass('modal_active');
  });

  cardLink.on('click', function(event){
    event.preventDefault();
    modal.addClass('modal_active');
  });


  close.on('click', function(){
    modal.removeClass('modal_active');
  });

  close.on('click', function(){
    modalSuccess.removeClass('modal_active');
  });
});