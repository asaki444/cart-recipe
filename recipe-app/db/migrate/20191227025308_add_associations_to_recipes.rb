class AddAssociationsToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :instruction_id, :integer
  end
end
