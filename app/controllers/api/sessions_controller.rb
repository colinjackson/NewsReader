class SessionsController < ApplicationController
  layout :session_layout

  before_filter :ensure_signed_out, only: :new, :create
  before_filter :ensure_signed_in, only: :destroy

  def new
    @user = User.new()
    render :new
  end

  def create
    user = User.find_by_credentials(credentials_params)
    if user
      sign_in!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username and password! Try again!"]
      render :new
    end
  end

  def destroy
    if current_user
      sign_out!
      redirect_to new_session_url
    else
      redirect_to back
    end
  end

  private
  def credentials_params
    params.require(:credentials).permit(:username, :password)
  end

  def session_layout
    signed_in? ? "application" : "login"
  end
end
