class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.belongs_to :shortened_url, foreign_key: true
      t.belongs_to :tag_topic, foreign_key: true

      t.timestamps
    end
  end
end
