const usersArray = [{
    firstName: "Ernest",
    lastName: "Tobolkin",
    email: "Ernest@gmail.com",
    posts: [{
      title: "Ernest Post",
      content: "Hey, My Name Is Ernest",
      comments: [
        {
          email: "Shaked@gmail.com",
          content: "Nice post!",
        }
      ],
      likes: 0,
    }],
  },
  {
    firstName: "Shaked",
    lastName: "Benratzon",
    email: "Shaked@gmail.com",
    posts: [{
      title: "Shaked Post",
      content: "Hey, My Name Is Shaked",
      comments: [
        {
          email: "Daniel@gmail.com",
          content: "Greate, I also love regex",
        }
      ],
      likes: 0,
    }],
  },
  {
    firstName: "Daniel",
    lastName: "Shamir",
    email: "Daniel@gmail.com",
    posts: [{
      title: "Daniel Post",
      content: "Hey, My Name Is Daniel",
      comments: [
        {
          email: "Ernest@gmail.com",
          content: "Please, I need help",
        }
      ],
      likes: 0,
    }],
  },
]

module.exports = usersArray