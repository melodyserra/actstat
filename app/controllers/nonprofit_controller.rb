class NonprofitController < ApplicationController
  def index
    @non = Nonprofit.all
  end
end
