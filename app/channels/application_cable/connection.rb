module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :uuid

    def connect
      self.uuid = SecureRandom.uuid
      transmit "Your UUID is #{uuid}"
    end

    def receive(websocket_message)
      send_async :dispatch_websocket_message, websocket_message
      puts websocket_message
    end
  end
end
