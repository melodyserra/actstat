class CreateNonprofits < ActiveRecord::Migration
  def change
    create_table :nonprofits do |t|
      t.string :name
      t.string :mission
      t.string :website

      t.timestamps
    end
  end
end
