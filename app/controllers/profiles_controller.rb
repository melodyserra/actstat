class ProfilesController < ApplicationController

  before_action :current_user

  def index
    render "profile"
  end

  def stats
    render "stats"
  end

end
