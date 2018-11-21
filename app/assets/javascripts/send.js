$(function (){
  function buildHTML(message) {
    if (message.text && message.image) {
    var html =
      `<div class="message" data-message-id="${ message.id }">
        <div class="user">${ message.user }</div>
        <div class="time">${ message.time }</div>
        <div class="text">
          <p class="lower-message__text">${ message.text }</p>
          <img class="lower-message__image" src="${ message.image }">
        </div>
      </div>`

  } else if (message.text) {
    var html = `<div class="message" data-message-id="${ message.id }">
        <div class="user">${ message.user }</div>
        <div class="time">${ message.time }</div>
        <div class="text">
          <p class="lower-message__text">${ message.text }</p>
        </div>
      </div>`

  } else if (message.image) {
    var html = `<div class="message" data-message-id="${ message.id }">
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
      var mainBarContent = $('.main-bar__content__messages')
      mainBarContent.append(insertHTML)
      mainBarContent.animate({scrollTop: mainBarContent[0].scrollHeight},'fast');
      $('#new_message')[0].reset();
      $('.submit-message').prop("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  })

  $(function(){
    setInterval(updateMessage, 5000);
  })

    if(location.pathname.match(/\/groups\/\d+\/messages/)) {
     var updateMessage = function (){
        if ($('.message')[0]) {
          var message_id = $('.message:last').data('message-id');
        } else {
          var message_id = 0
        }

        $.ajax({
          url: location.href,
          type: 'GET',
          data: { id: message_id },
          dataType: 'json'
        })

        .done(function(data){
          var insertHTML = "";
            data.forEach(function(message){
            insertHTML += buildHTML(message);
            $('.main-bar__content__messages').append(insertHTML);
            });
            var mainBarContent = $('.main-bar__content')
            mainBarContent.animate({scrollTop: mainBarContent[0].scrollHeight},'fast');
          })

        .fail(function(){
          alert('自動更新に失敗しました');
        })
      }
   } else {
    clearInterval(interval);
   }

});
