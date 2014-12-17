class NonprofitController < ApplicationController
  def index
    response=HTTParty.get('https://projects.propublica.org/nonprofits/api/v1/search.json?q=san+francisco')
    # puts response.body
    # @body=response.body

    res_org_info = response["filings"]

    org_info = []

    res_org_info.each do |org|
      org_info << { name: org["organization"]["name"], city: org["organization"]["city"], state: org["organization"]["state"] }
    end

    @orgs = org_info
  end
end
