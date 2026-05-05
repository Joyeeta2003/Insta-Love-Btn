let allreels = document.querySelector(".reels");

const reelsData = [
  {
    id: 1,
    video: "./videos/reel1.mp4",
    profilePic: "https://i.pravatar.cc/150?img=1",
    name: "Aarav Sen",
    description: "Living my best life quietly while chasing dreams every single day",
    likes: 1200,
    comments: 340,
    commented: false,
    shares: 90,
    reposts: 60,
    bookmarks: 150,
    liked: true,
    reposted: false,
    bookmarked: true,
    follow: false,
    shared: false
  },
  {
    id: 2,
    video: "./videos/reel2.mp4",
    profilePic: "https://i.pravatar.cc/150?img=2",
    name: "Riya Das",
    description: "Enjoying peaceful sunset vibes and capturing moments that truly matter",
    likes: 980,
    comments: 210,
    commented: true,
    shares: 70,
    reposts: 45,
    bookmarks: 120,
    liked: false,
    reposted: true,
    bookmarked: false,
    follow: true,
    shared: true
  },
  {
    id: 3,
    video: "./videos/reel3.mp4",
    profilePic: "https://i.pravatar.cc/150?img=3",
    name: "Kabir Roy",
    description: "Chasing dreams and building a future I always imagined proudly",
    likes: 1500,
    comments: 400,
    commented: false,
    shares: 120,
    reposts: 80,
    bookmarks: 200,
    liked: true,
    reposted: true,
    bookmarked: true,
    follow: true,
    shared: false
  },
  {
    id: 4,
    video: "./videos/reel4.mp4",
    profilePic: "https://i.pravatar.cc/150?img=4",
    name: "Meera Paul",
    description: "Dancing freely without fear and expressing myself through every move",
    likes: 870,
    comments: 180,
    commented: true,
    shares: 60,
    reposts: 30,
    bookmarks: 95,
    liked: false,
    reposted: false,
    bookmarked: false,
    follow: false,
    shared: true
  },
  {
    id: 5,
    video: "./videos/reel5.mp4",
    profilePic: "https://i.pravatar.cc/150?img=5",
    name: "Arjun Kapoor",
    description: "Daily gym routine pushing limits and becoming stronger than yesterday",
    likes: 2000,
    comments: 500,
    commented: false,
    shares: 200,
    reposts: 110,
    bookmarks: 300,
    liked: true,
    reposted: true,
    bookmarked: true,
    follow: true,
    shared: true
  },
  {
    id: 6,
    video: "./videos/reel6.mp4",
    profilePic: "https://i.pravatar.cc/150?img=6",
    name: "Sneha Ghosh",
    description: "Starting my day with coffee and positive thoughts for everything ahead",
    likes: 650,
    comments: 120,
    commented: true,
    shares: 30,
    reposts: 20,
    bookmarks: 70,
    liked: false,
    reposted: false,
    bookmarked: true,
    follow: true,
    shared: false
  },
  {
    id: 7,
    video: "./videos/reel7.mp4",
    profilePic: "https://i.pravatar.cc/150?img=7",
    name: "Rahul Verma",
    description: "Exploring new places and capturing memories from every journey I take",
    likes: 1750,
    comments: 320,
    commented: false,
    shares: 140,
    reposts: 90,
    bookmarks: 250,
    liked: true,
    reposted: true,
    bookmarked: false,
    follow: false,
    shared: true
  },
  {
    id: 8,
    video: "./videos/reel8.mp4",
    profilePic: "https://i.pravatar.cc/150?img=8",
    name: "Pooja Sharma",
    description: "Smiling through every situation and spreading happiness wherever I go",
    likes: 900,
    comments: 210,
    commented: true,
    shares: 50,
    reposts: 35,
    bookmarks: 110,
    liked: false,
    reposted: true,
    bookmarked: true,
    follow: true,
    shared: false
  },
  {
    id: 9,
    video: "./videos/reel9.mp4",
    profilePic: "https://i.pravatar.cc/150?img=9",
    name: "Ankit Jain",
    description: "Coding late nights and building projects that make a real difference",
    likes: 1300,
    comments: 260,
    commented: false,
    shares: 80,
    reposts: 50,
    bookmarks: 180,
    liked: true,
    reposted: false,
    bookmarked: true,
    follow: false,
    shared: true
  },
  {
    id: 10,
    video: "./videos/reel10.mp4",
    profilePic: "https://i.pravatar.cc/150?img=10",
    name: "Neha Singh",
    description: "Exploring fashion trends and expressing myself through creative outfits daily",
    likes: 2200,
    comments: 600,
    commented: true,
    shares: 250,
    reposts: 150,
    bookmarks: 400,
    liked: true,
    reposted: true,
    bookmarked: true,
    follow: true,
    shared: true
  }
];

function addData() {
  let sum = "";

  reelsData.forEach(function (elem, idx) {
    sum += `
    <div class="reel">

      <video autoplay loop muted src="${elem.video}"></video>

      <div class="bottom">
          <div class="user">
              <img src="${elem.profilePic}" alt="">

              <div class="name">${elem.name}</div>

              <button data-follow="${idx}" class="follow-btn">
                ${elem.follow ? "Following" : "Follow"}
              </button>
          </div>

          <p>${elem.description}</p>
      </div>

      <div class="right">

          <!-- LIKE -->
          <div data-index="${idx}" class="love">
              <h4>
                <i class="${elem.liked ? "ri-heart-fill liked" : "ri-heart-line"}"></i>
              </h4>
              <h6>${elem.likes}</h6>
          </div>

          <!-- COMMENT -->
          <div data-comment="${idx}" class="comment">
    <h4>
      <i class="${elem.commented ? "ri-chat-1-fill commented" : "ri-chat-1-line"}"></i>
    </h4>
    <h6>${elem.comments}</h6>
</div>

          <!-- REPOST -->
          <div data-repost="${idx}" class="repost">
              <h4>
                <i class="${elem.reposted ? "ri-repeat-fill reposted" : "ri-repeat-line"}"></i>
              </h4>
              <h6>${elem.reposts}</h6>
          </div>

          <!-- SHARE -->
          <div data-share="${idx}" class="share">
              <h4>
                <i class="${elem.shared ? "ri-send-plane-fill shared" : "ri-send-plane-line"}"></i>
              </h4>
              <h6>${elem.shares}</h6>
          </div>

          <!-- BOOKMARK -->
          <div data-bookmark="${idx}" class="bookmark">
              <h4>
                <i class="${elem.bookmarked ? "ri-bookmark-fill bookmarked" : "ri-bookmark-line"}"></i>
              </h4>
              <h6>${elem.bookmarks}</h6>
          </div>

          <div class="menu">
              <h4><i class="ri-more-2-fill"></i></h4>
          </div>

      </div>
    </div>`;
  });

  allreels.innerHTML = sum;
}

addData();

allreels.addEventListener("click", function (e) {

  // ❤️ LIKE
  let loveBtn = e.target.closest(".love");

  if (loveBtn) {
    let index = loveBtn.getAttribute("data-index");

    if (!reelsData[index].liked) {
      reelsData[index].likes++;
      reelsData[index].liked = true;
    } else {
      reelsData[index].likes--;
      reelsData[index].liked = false;
    }

    addData();
  }
  // 💬 COMMENT
let commentBtn = e.target.closest(".comment");

if (commentBtn) {

  let index = commentBtn.getAttribute("data-comment");

  if (!reelsData[index].commented) {
    reelsData[index].comments++;
    reelsData[index].commented = true;
  } else {
    reelsData[index].comments--;
    reelsData[index].commented = false;
  }

  addData();
}

  // 🔁 REPOST
  let repostBtn = e.target.closest(".repost");

  if (repostBtn) {
    let index = repostBtn.getAttribute("data-repost");

    if (!reelsData[index].reposted) {
      reelsData[index].reposts++;
      reelsData[index].reposted = true;
    } else {
      reelsData[index].reposts--;
      reelsData[index].reposted = false;
    }

    addData();
  }

  // 🔖 BOOKMARK
  let bookmarkBtn = e.target.closest(".bookmark");

  if (bookmarkBtn) {
    let index = bookmarkBtn.getAttribute("data-bookmark");

    if (!reelsData[index].bookmarked) {
      reelsData[index].bookmarks++;
      reelsData[index].bookmarked = true;
    } else {
      reelsData[index].bookmarks--;
      reelsData[index].bookmarked = false;
    }

    addData();
  }

  // 📤 SHARE
  let shareBtn = e.target.closest(".share");

  if (shareBtn) {
    let index = shareBtn.getAttribute("data-share");

    if (!reelsData[index].shared) {
      reelsData[index].shares++;
      reelsData[index].shared = true;
    } else {
      reelsData[index].shares--;
      reelsData[index].shared = false;
    }

    addData();
  }

  // 👤 FOLLOW / UNFOLLOW
  let followBtn = e.target.closest(".follow-btn");

  if (followBtn) {
    let index = followBtn.getAttribute("data-follow");

    reelsData[index].follow = !reelsData[index].follow;

    addData();
  }

});