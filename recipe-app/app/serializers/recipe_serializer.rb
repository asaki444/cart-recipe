class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :servings, :origin, :instruction_id
end
