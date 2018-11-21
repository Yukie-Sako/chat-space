json.array! @new_messages do |message|
  json.user  message.user.name
  json.time  message.created_at.to_s(:default)#.to_s(:default)か.strftime('%Y/%m/%d %H:%M')のどちらか。striftime(:defaultは使えないので注意)
  json.text  message.text
  json.image  message.image.url#.urlまで記載しないとハッシュで帰ってきてしまいurl取得できない
  json.id    message.id
end

