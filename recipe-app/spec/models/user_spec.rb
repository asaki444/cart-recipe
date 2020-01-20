require 'rails_helper'

RSpec.describe User, type: :model do
  context 'before sign in' do 
    it 'must have email' do
    expect {User.create.email!}.to raise_error(ActiveRecord::RecordInvalid) 
   end
    it 'must have password' do
      expect {User.create.password}. to raise_error(ActiveRecord::RecordInvalid)
  
    end
  pending "add some examples to (or delete) #{__FILE__}"
end
