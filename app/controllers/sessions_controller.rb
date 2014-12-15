class SessionsController < ApplicationController
  # before_action :is_authenticated
  before_action :current_user

  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to stats_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to profile_path
  end

end
