class SessionsController < ApplicationController
  layout :session_layout

  def new

  end

  # def create
  #   user = User.find_by_credentials(credentials_params)
  #   if user
  #     sign_in!(user)
  #     render json: user
  #   else
  #     render json: { error: "Invalid username and password" }, status: :forbidden
  #   end
  # end
  #
  # def show
  #   if current_user
  #     render json: current_user
  #   else
  #     render json: { error: "There's no user here!" }, status: :not_found
  #   end
  # end

  def destroy
    if current_user
      signed_out_user = current_user
      sign_out!
      redirect_to api_session_url
    else
      render json: { error: "Not logged in" }, status: :not_found
    end
  end

  private
  def credentials_params
    params.require(:credentials).permit(:username, :password)
  end

  def session_layout
    signed_in? ? application.html.erb : login.html.erb
  end
end