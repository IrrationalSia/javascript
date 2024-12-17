const profile = {
  username: "sia",
  posts: 55,
  followers: 800,
  following: 800,
  picture: "link",
  fullName: "Siya M",
  bio: "Some information",
  link: "zaio.com",
  info() {
    return `
        Info for: ${this.username}
        Posts: ${this.posts}
        Followers: ${this.followers}
        Following: ${this.following}
        bio: ${this.bio}
        link: ${this.link}
      `;
  },
  posted() {
    // write your code here
    // function: posted
    // action: increase number of posts by 1
    // print out: username just posted a photo
    // console.log(the posted function)
    this.posts += 1;
    return `${this.username} just posted a photo`;
  },
};

console.log(profile.info());
// add a console.log statement here
console.log(profile.posted());
