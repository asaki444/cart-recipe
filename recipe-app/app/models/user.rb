class User < ApplicationRecord
  has_secure_password
  has_many :recipes
  validates_presence_of :email, presence: true, uniqueness: true
end
