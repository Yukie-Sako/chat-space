# DB設計

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key:true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|strings|null:false|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|strings|null:false|
|email|text|null:false, unique: true|
|password|text|null:false|

### Association
- belogs_to :groups, through: :members
- belongs_to :members
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null:false, foreign_key: true|
|text|text|   |
|image|text|   |

### Association
- belongs_to :users
- belongs_to :groups






