class ApplicationController < ActionController::Base
  protect_from_forgery

  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:token]
    @current_user ||= user.find_by_session_token(session[:token])
  end

  def sign_out!
    current_user.try(:reset_session_token!)
    session[:token] = nil
  end

  def signed_out?
    !!current_user
  end
end
