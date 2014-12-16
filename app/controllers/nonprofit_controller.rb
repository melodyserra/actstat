class NonprofitController < ApplicationController
  def index
    response=HTTParty.get('https://projects.propublica.org/nonprofits/api/v1/search.json?q=san+francisco')
    puts response.body
    @body=response.body
  end
end
