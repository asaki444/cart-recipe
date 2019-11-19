class CreateIngredients < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.string :title
      t.integer :amount
      t.string :measurement

      t.timestamps
    end
  end
end
