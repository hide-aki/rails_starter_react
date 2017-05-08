require 'devise'

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.include Warden::Test::Helpers
  Warden.test_mode!

  config.after do
    Warden.test_reset!
  end
end
