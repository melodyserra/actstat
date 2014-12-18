class ProfilesController < ApplicationController

  before_action :current_user

  def index
    @nonprofit = Nonprofit.find(params[:id])
    @favorites = Favorite.where(user_id: @current_user.id)
    render "profile"
  end

  def stats
    render "stats"
  end

  def profile
    binding.pry
    @favorites = Favorite.find_by_user_id(@current_user.id)
  end
end
