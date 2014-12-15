OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV["ACTSTAT_FB_ID"], ENV["ACTSTAT_FB_SECRET"], :image_size => {width: 200, height: 200}
end