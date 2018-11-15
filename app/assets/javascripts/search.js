$(function() {

  var user_search_result = $('#user-search-result');
  var chat_member_list = $('#chat-group-users');

  function appendUser(user) {
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ user.name }</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=" ${ user.id }" data-user-name="${ user.name }">追加</a>
    </div>`
    user_search_result.append(html);
  }

  function addUser(id, name) {
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ name }</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--remove" data-user-id="${ id }" data-user-name="${ name }">削除</a>
     </div>`
   return html;
  }


  $('#user-search-field').on('keyup', function(){
    var input = $(this).val();
    if (input !== ""){


    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $('#user-search-result').empty();
      console.log(users.length);
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("該当するユーザーはいません");
      }
    })
    .fail(function(){
      alert('error');
    })
   }
   else {
    $('#user-search-result').empty();
   }
  });
//27行目のif文でinputが空欄でない場合にのみajax通信がされるように設定。53行目で空欄の場合は検索結果欄が空白になるように設定。

  $(document).on('click', ".chat-group-user__btn--add", function (){
    var id = $(this).data('user-id')
    var name = $(this).data('user-name')
    var html = addUser(id, name)
    $('#chat-group-users').append(html)
    $(this).parent().remove();
    })

  $(document).on('click', ".chat-group-user__btn--remove", function(){
    $(this).parent().remove();
  })
});
