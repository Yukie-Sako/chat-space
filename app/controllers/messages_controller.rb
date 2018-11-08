class MessagesController < ApplicationController
  def index
  end

  def create
    Message.create(image: tweet_params[:image], text: tweet_params[:text], user_id: current_user.id)

  end
end
