class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :messages
  has_many :chatroom_connections
  has_many :chatrooms, through: :chatroom_connections

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
