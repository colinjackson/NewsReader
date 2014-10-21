class UsersController < ApplicationController
  def new

  end

  def create
    user = User.new(user_params)
    if user.save
      sign_in!(user)
      render json: user
    else
      render json: { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    render json: User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end