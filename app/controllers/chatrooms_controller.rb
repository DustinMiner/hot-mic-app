class ChatroomsController < ApplicationController
  class ChatroomsController < ApplicationController
  before_action :authenticate_user!
  def show
    @messages = Message.all
  end
end
