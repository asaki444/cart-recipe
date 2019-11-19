class CreateInstructions < ActiveRecord::Migration[5.0]
  def change
    create_table :instructions do |t|
      t.text :instructions

      t.timestamps
    end
  end
end
