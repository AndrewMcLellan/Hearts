class CreateCard < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :suit, null: false 
      t.string :value, null: false
      t.string :code, null: false
      t.string :png
      t.string :svg
      t.belongs_to :deck
    end
  end
end
