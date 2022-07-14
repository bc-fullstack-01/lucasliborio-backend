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
[x]  - login user


Post -
[x] - create post
[] - send notification via socket io to follwers
[] - edit post
[] - delete post
[] - like/unlike post
[] - send notification via socket io to post owner when receive likes

Comment

[] - create comment
[] - send notification via socket.io to post owner
[] - like/unlike comment
[] - send notification tvia socket.io o comment owner when receive likes