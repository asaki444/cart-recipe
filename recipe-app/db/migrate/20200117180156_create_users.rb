class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
        t.string :email_address
        t.string :user_name
        t.string :password
        t.string :password_confirmation
      t.timestamps
    end
  end
end
