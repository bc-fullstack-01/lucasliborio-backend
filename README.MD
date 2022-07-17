User
  - name
  - password
  - email
  - timestamps

Profile
  - posts
  - followers
  - following
  - userId
  - timestamps

Posts
 - title
 - description
 - hasImage
 - imageUrl
 - comments
 - likes
 - profileId
 - timestamps

 Comment
  - content
  - likes
  - postId
  - timestamps

User

[x] - create user
[x] - login user

Profile

[X] - List all post from a single profile
[X] - get profile by id /profile/:profileId
[X] - follow/unfollow profile /profile/:profileId/follow
[X] - create search for profile
[X] - send notification when follow profile

Post -
[X] - create post
[X] - get Post 
[X] - send notification via socket io to follwers
[X] - edit post
[X] - delete post
[X] - like/unlike post
[X] - send notification via socket io to post owner when receive likes

Comment

[X] - create comment
[X] - update comment
[X] - delete comment
[X] - send notification via socket.io to post owner
[X] - like/unlike comment
[X] - send notification tvia socket.io o comment owner when receive likes 

feed