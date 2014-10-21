class User < ActiveRecord::Base
  validates :password, length: {minimum: 5, allow_nil: true}
  validates_presence_of :username, :session_token
  validates_uniqueness_of :username, :session_token

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(credentials)
    user = User.find_by_username(credentials[:username])
    user && user.is_password?(credentials[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt.Password.create(password)
  end

  def is_password?(password)
    BCrypt.Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
   end

  def generate_unique_session_token
    loop do
      token = SecureRandom.urlsafe_base64(16)
      return token unless User.exist?(session_token: token)
    end
  end

end
