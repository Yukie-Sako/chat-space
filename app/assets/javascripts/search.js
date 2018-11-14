$(function() {
  function buildHTML(user) {
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ user.name }</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=" ${ user.id }" data-user-name="${ user.name }">追加</a>
</div>`


return html;
}

  $('#user-search-field').on('keyup', function(){
    var input = $(this).val();
    $.ajax({
      url: '/users',
      type: 'GET',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $('#user-search-result').empty();
      users.forEach(function(user){
        var insertHTML = buildHTML(user);
        $('#user-search-result').append(insertHTML);
      });
    })
    .fail(function(){
      alert('error');
    });
  });
});

// $(function() {
//   function buildHTML(users) {
//     var html =` <p class="chat-group-user__name">${ user.name }</p>
//   <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">削除</a>
// </div>`
// };
// return html;

// });

//   $('user-search-add').on('submit', function(e){
//     e.preventDefault();
//     var $form = $(this);
//     formData = new FormData(this);
//     $.ajax({
//       url: '/users',
//       type: 'GET',
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var insertHTML = buildHTML(data);
//       $('#chat-group-users').append(insertHTML)
//       $('#user-search-result')[0].reset();
//     })
//     .fail(function(){
//       alert('error');
//     });
//   });
