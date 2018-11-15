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
      var mainBarContent = $('.main-bar__content')
      mainBarContent.append(insertHTML)
      mainBarContent.animate({scrollTop: mainBarContent[0].scrollHeight},'fast');
      $('#new_message')[0].reset();
      $('.submit-message').prop("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  })
})
