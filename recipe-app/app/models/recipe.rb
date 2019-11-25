class Recipe < ApplicationRecord
     has_one :instruction
     has_many :ingredients
     has_and_belongs_to_many :users
end
