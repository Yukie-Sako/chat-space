json.user  @message.user.name
json.time  @message.created_at.to_s(:default)
json.text  @message.text
json.image @message.image.url
json.id  @message.id

