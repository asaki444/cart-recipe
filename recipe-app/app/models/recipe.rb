class Recipe < ApplicationRecord
     has_one :instruction
     has_many :ingredients, :users
end
