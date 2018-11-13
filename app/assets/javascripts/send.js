$(function (){
  function buildHTML(message) {
    if (message.text && message.image) {
    var html =
      `<div class="message">
        <div class="user">${ message.user }</div>
        <div class="time">${ message.time }</div>
        <div class="text">
          <p class="lower-message__text">${ message.text }</p>
          <img class="lower-message__image" src="${ message.image }">
        </div>
      </div>`

  } else if (message.text) {
    var html = `<div class="message">
        <div class="user">${ message.user }</div>
        <div class="time">${ message.time }</div>
        <div class="text">
          <p class="lower-message__text">${ message.text }</p>
        </div>
      </div>`

  } else if (message.image) {
    var html = `<div class="message">
        <div class="user">${ message.user }</div>
        <div class="time">${ message.time }</div>
        <img class="lower-message__image" src="${ message.image }">
      </div>`
  };
  return html;
 };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var $form = $(this);
    formData = new FormData(this);
    $.ajax({
      url: './messages',
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var insertHTML = buildHTML(data);
      $('.main-bar__content').append(insertHTML)
      $('.main-bar__content__messages').val('')
      $('.main-bar__content').animate({scrollTop: $('.main-bar__content')[0].scrollHeight},'fast');
      $('#new_message')[0].reset();
      console.log(data)
    })
    .fail(function(){
      alert('error');
    })
  })
})
