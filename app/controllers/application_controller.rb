class ApplicationController < ActionController::Base
    before_action :authenticate_user!, only: [:get_current_user]
    before_action :configure_permitted_parameters, if: :devise_controller?
    

    def get_current_user
    render json: {current_user_id: current_user.id}
    end

    def authenticate_chatroom_connection
      chatroom = Chatroom.find(params[:id])
      if !current_user.chatrooms.include?(chatroom)
        flash[:error] = "Join that chatroom first."
        redirect_to "/"
      end
    end

    protected

    def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
    end
end

