# CoderComm

CoderComm is full-stack social network app that allows people to join by creating accounts. Each user should provide a name, an email, and a password to create a account. The email address should not link to account to the system.

After joining CoderComm, users can update their profile info such as Avatar, Company, JobTitle, Social link, and a short description about themselves.

Users can write posts with contents and an image. The new posts will be shown on the user profile page, allowing other users to like, or dislike, and comment on the posts.

Users can send friend requests to other users. Users can accept or decline friend requests. After accepting a friend request, both become friends, and they can see the posts of each other.

## User Stories

### Authentication

- [ ] as a user, I can register for a new account with name, email, and password.
- [ ] As a user, I can sign in with my email and password.

### Uers

- [ ] As a user, I can see a list of other users so that I can send, accept, or decline friend requestd.
- [ ] As a user, I can get my current profile into (stay signed in after page refesh).
- [ ] As a user, I can see teh profile of a spectific given a user ID.
- [ ] As a user, I can update my profile into like Avt, Company, Job title, Social links, and short description.

### Posts

- CRUD
- [ ] As a user, I can see a list of posts.
- [ ] As a user, I can create a new post with text content aand an image.
- [ ] As a user, I can edit my post.
- [ ] As a user, I can delete my posts.

### Comments

- [ ] As a user, I can see list of comments on post.
- [ ] As a user, I can write comments on a post.
- [ ] As a user, I can update my comments.
- [ ] As a user, I can delete my comments.

### Reactions

- [ ] As a user, I can react like or dislike to a post or a comment.

### Fiends

- [ ] As a user, I can send a friend request ro another user who is not my friend.
- [ ] As a user, I can see a list of friend requests I have received.
- [ ] As a user, I can see a list of friend requests I have sent.
- [ ] As a user, I can see a list of my friends.
- [ ] As a user, I can accept or decline a friend request.
- [ ] As a user, I can cencel friend request I sent.
- [ ] As a user, I can unfriend a user in my friend list.

## Endpont APIs

### Auth APIs

```javacript
/**
* @route POST /auth/login
* @description  Log in with email and password
* @body {email, password}
* @access Public
*/
```

### User APIs

```javacript
/**
* @route POST /users
* @description  Register new user
* @body {name, email, password}
* @access Public
*/
```

```javacript
/**
* @route GET/users?page=1&limit=10
* @description  Get users with pagination
* @access Login required
*/
```

```javacript
/**
* @route GET/users/me
* @description Get current user info
* @access Login required
*/
```

```javacript
/**
* @route GET/users/:id
* @description Update user profile
* @body { name, avatarUrl, coverUrl, aboutMe, city, county, company, jobTitle, facebookLink, instagramLink, linkedinLink, twitterLink }
* @access Login required
*/
```

### Post APIs

```javacript
/**
* @route GET/posts/user/:userId?page=1&limit=10
* @description Get all posts an user can see with pagination
* @access Login required
*/
```

```javacript
/**
* @route POST/posts
* @description Create a new post
* @body { content, image }
* @access Login required
*/
```

```javacript
/**
* @route POST/posts/:id
* @description Update a post
* @body { content, image }
* @access Login required
*/
```

```javacript
/**
* @route DELETE/posts/:id
* @description Delete a post
* @access Login required
*/
```

```javacript
/**
* @route GET/posts/:id
* @description Get a single post
* @access Login required
*/
```

```javacript
/**
* @route GET/posts/:id/comments
* @description Get comments of a post.
* @access Login required
*/
```

### Comment APIs

```javacript
/**
* @route POST/comments/
* @description Create a new comment
* @body { content, postId }
* @access Login required
*/
```

```javacript
/**
* @route PUT/comments/:id
* @description Update a comment
* @access Login required
*/
```

```javacript
/**
* @route DELETE/comments/:id
* @description Delete a comment
* @body { content, postId }
* @access Login required
*/
```

```javacript
/**
* @route GET/comments/:id
* @description Get details of comment
* @access Login required
*/
```

### Reaction APIs

```javacript
/**
* @route POST/reactions
* @description Save a reaction to post or comment
* @body { targetType: 'Post' or 'Comment', targetId, emoji: 'like' or 'dislike' }
* @access Login required
*/
```

### Friend APIs

```javacript
/**
* @route POST/friends/request
* @description Send a friend request
* @body { to: User ID }
* @access Login required
*/
```

```javacript
/**
* @route GET/friends/requests/incoming
* @description Get the list of received pending requests
* @access Login required
*/
```

```javacript
/**
* @route GET/friends/requests/outgoing
* @description Get the list of sent pending requests
* @access Login required
*/
```

```javacript
/**
* @route GET/friends
* @description Get the list of friends
* @access Login required
*/
```

```javacript
/**
* @route PUT/friends/request/:userId
* @description Accept/Reject a received pending requests
* @body { status: 'accepted' or 'declined' }
* @access Login required
*/
```

```javacript
/**
* @route DELETE/friends/request/:userId
* @description Cancel a friend request
* @access Login required
*/
```

```javacript
/**
* @route DELETE/friends/:userId
* @description Remove a friend
* @access Login required
*/
```

## Summary

- Start with functional specification
- List down user stories
- Design endpoint APIs
- Enlity Relationship Diagram
- Code
