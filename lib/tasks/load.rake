namespace :load do
  desc "TODO"

  def getOrgDetail org_id
    uri = URI('https://quickstartdata.guidestar.org/v1/quickstartdetail/' +
      org_id + '.json')

    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https', :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|
      request = Net::HTTP::Get.new uri.request_uri
      request.basic_auth 'melodyserra@gmail.com', 'africa99'

      response = http.request request # Net::HTTPResponse object

      return response.body
    end
  end

  def search keyword

    uri = URI("https://quickstartdata.guidestar.org/v1/quickstartsearch.json?q=homeless")

    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https', :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|
      request = Net::HTTP::Get.new uri.request_uri
      request.basic_auth 'melodyserra@gmail.com', 'africa99'

      response = http.request request # Net::HTTPResponse object

      return response.body
    end
  end

  task nonprofits: :environment do
    include HTTParty

      puts getOrgDetail "7831216"
      puts "****"
      puts search "something"

    end

    # auth = { username: "melodyserra@gmail.com", password: "africa99"}
    # response = HTTParty.get "https://quickstartdata.guidestar.org/v1/quickstartdetail/7831216.json", }

    # response = HTTParty.get("https://data.guidestar.org/v1/search.json?q=organization_name:guide*")
    # detail
    # curl -3 -u4faaa9047bb24362b71850adeabb3490: https://quickstartdata.guidestar.org/v1/quickstartdetail/7831216.json

    # search
    # curl -3 -u b3f69904dd8845c2a038d61d015169d5: "https://quickstartdata.guidestar.org/v1/quickstartsearch.json?q=organization_name:GuideStar%20AND%20city:Williamsburg"
end

