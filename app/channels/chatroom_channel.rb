class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from("chatroom_channel_#{params[:chatroom_id]}")

  end


end


