class Review < ApplicationRecord
  belongs_to :customer
  belongs_to :product

  validates :score, presence: true
  validates :content, presence: true
end
