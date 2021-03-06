class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :signed_in?

  def current_user
    return nil unless session[:token]
    @current_user ||= user.find_by_session_token(session[:token])
  end

  def signed_in?
    !!current_user
  end

  private
  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def sign_out!
    current_user.try(:reset_session_token!)
    session[:token] = nil
  end

  def ensure_signed_in
    redirect_to new_session_url if !signed_in?
  end

  def ensure_signed_out
    redirect_to root_url if signed_in?
  end

end
