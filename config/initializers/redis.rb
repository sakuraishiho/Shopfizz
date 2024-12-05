module RedisConn
  def self.current
    @current ||= Redis.new(url: ENV.fetch('REDIS_URL') { 'redis://local:6379/1' })
  end
end