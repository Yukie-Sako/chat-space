FactoryGirl.define do
  factory :message do
    text Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/uploads/message/image/5/スクリーンショット_2018-11-08_3.36.06.png")
    user
    group
  end
end
