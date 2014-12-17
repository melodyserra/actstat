class NonprofitController < ApplicationController
  def index
    # response=HTTParty.get('https://projects.propublica.org/nonprofits/api/v1/search.json?q=san+francisco')

    # res_org_info = response["filings"]

    # org_info = []

    # res_org_info.each do |org|
    #   org_info << { name: org["organization"]["name"], city: org["organization"]["city"], state: org["organization"]["state"] }
    # end

    # @orgs = org_info

    # response = HTTParty.get("https://data.guidestar.org/v1/search.json?q=organization_name:guide*")
    # puts response.body
    # res_org_info = response[""]
    # org_info = []

    # res_org_info.each do |org|
    #   org_info << { name: org["Organization Name"]}
    # end

    # @orgs = org_info
    # Guidestar.configure do |config|
    #   config.username = 'melodyserra@gmail.com'
    #   config.password = 'africa99'
    # end
    # results = Guidestar.search(:keyword => 'san francisco', :limit => 20)
    # results.each do |org|
    # puts org

  end
end
