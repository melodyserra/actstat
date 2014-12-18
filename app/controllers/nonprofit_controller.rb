class NonprofitController < ApplicationController
  # respond_to :json, :html

  def index
    @non = Nonprofit.all
    @current_user_id = session[:user_id]
  end

  def add_favorite
    Favorite.find_or_create_by(fav_params)
    render :json => 'ok'
  end

  private
  def fav_params
    params.require(:favorite).permit(:user_id, :nonprofit_id)
  end
end
