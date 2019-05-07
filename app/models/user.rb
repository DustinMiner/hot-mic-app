class User < ApplicationRecord
  class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :messages
end

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
