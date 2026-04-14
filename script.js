const reelsData = [
{
  id: 1,
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
  profilePic: "https://i.pravatar.cc/150?img=1",
  name: "Aarav Sen",
  description: "Living my best life quietly while chasing dreams every single day",
  likes: 1200,
  comments: 340,
  shares: 90,
  reposts: 60,
  bookmarks: 150,
  liked: true,
  reposted: false,
  bookmarked: true,
  follow: false
},
{
  id: 2,
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  profilePic: "https://i.pravatar.cc/150?img=2",
  name: "Riya Das",
  description: "Enjoying peaceful sunset vibes and capturing moments that truly matter",
  likes: 980,
  comments: 210,
  shares: 70,
  reposts: 45,
  bookmarks: 120,
  liked: false,
  reposted: true,
  bookmarked: false,
  follow: true
},
{
  id: 3,
  video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=3",
  name: "Kabir Roy",
  description: "Chasing dreams and building a future I always imagined proudly",
  likes: 1500,
  comments: 400,
  shares: 120,
  reposts: 80,
  bookmarks: 200,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
},
{
  id: 4,
  video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=4",
  name: "Meera Paul",
  description: "Dancing freely without fear and expressing myself through every move",
  likes: 870,
  comments: 180,
  shares: 60,
  reposts: 30,
  bookmarks: 95,
  liked: false,
  reposted: false,
  bookmarked: false,
  follow: false
},
{
  id: 5,
  video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=5",
  name: "Arjun Kapoor",
  description: "Daily gym routine pushing limits and becoming stronger than yesterday",
  likes: 2000,
  comments: 500,
  shares: 200,
  reposts: 110,
  bookmarks: 300,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
},
{
  id: 6,
  video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=6",
  name: "Sneha Ghosh",
  description: "Starting my day with coffee and positive thoughts for everything ahead",
  likes: 650,
  comments: 120,
  shares: 30,
  reposts: 20,
  bookmarks: 70,
  liked: false,
  reposted: false,
  bookmarked: true,
  follow: true
},
{
  id: 7,
  video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
  profilePic: "https://i.pravatar.cc/150?img=7",
  name: "Rahul Verma",
  description: "Exploring new places and capturing memories from every journey I take",
  likes: 1750,
  comments: 320,
  shares: 140,
  reposts: 90,
  bookmarks: 250,
  liked: true,
  reposted: true,
  bookmarked: false,
  follow: false
},
{
  id: 8,
  video: "https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4",
  profilePic: "https://i.pravatar.cc/150?img=8",
  name: "Pooja Sharma",
  description: "Smiling through every situation and spreading happiness wherever I go",
  likes: 900,
  comments: 210,
  shares: 50,
  reposts: 35,
  bookmarks: 110,
  liked: false,
  reposted: true,
  bookmarked: true,
  follow: true
},
{
  id: 9,
  video: "https://filesamples.com/samples/video/mp4/sample_1280x720.mp4",
  profilePic: "https://i.pravatar.cc/150?img=9",
  name: "Ankit Jain",
  description: "Coding late nights and building projects that make a real difference",
  likes: 1300,
  comments: 260,
  shares: 80,
  reposts: 50,
  bookmarks: 180,
  liked: true,
  reposted: false,
  bookmarked: true,
  follow: false
},
{
  id: 10,
  video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  profilePic: "https://i.pravatar.cc/150?img=10",
  name: "Neha Singh",
  description: "Exploring fashion trends and expressing myself through creative outfits daily",
  likes: 2200,
  comments: 600,
  shares: 250,
  reposts: 150,
  bookmarks: 400,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
},

/* rest same pattern maintain */

{
  id: 11,
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
  profilePic: "https://i.pravatar.cc/150?img=11",
  name: "Rohan Das",
  description: "Thinking deeply about life and finding meaning in small daily moments",
  likes: 780,
  comments: 150,
  shares: 40,
  reposts: 25,
  bookmarks: 85,
  liked: false,
  reposted: false,
  bookmarked: false,
  follow: false
},
{
  id: 12,
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  profilePic: "https://i.pravatar.cc/150?img=12",
  name: "Isha Roy",
  description: "Shining bright and believing in myself no matter what challenges come",
  likes: 1600,
  comments: 350,
  shares: 110,
  reposts: 75,
  bookmarks: 210,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
},
{
  id: 13,
  video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=13",
  name: "Dev Malhotra",
  description: "Loving cars and enjoying every drive with passion and excitement always",
  likes: 1400,
  comments: 290,
  shares: 95,
  reposts: 60,
  bookmarks: 170,
  liked: false,
  reposted: true,
  bookmarked: false,
  follow: true
},
{
  id: 14,
  video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=14",
  name: "Tina Dutta",
  description: "Creating makeup looks and expressing art through colors and creativity",
  likes: 1900,
  comments: 420,
  shares: 150,
  reposts: 95,
  bookmarks: 260,
  liked: true,
  reposted: false,
  bookmarked: true,
  follow: false
},
{
  id: 15,
  video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=15",
  name: "Sourav Paul",
  description: "Playing football passionately and enjoying every moment on the field always",
  likes: 1250,
  comments: 230,
  shares: 75,
  reposts: 45,
  bookmarks: 140,
  liked: false,
  reposted: true,
  bookmarked: false,
  follow: true
},
{
  id: 16,
  video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
  profilePic: "https://i.pravatar.cc/150?img=16",
  name: "Maya Khan",
  description: "Dreaming big and working hard to achieve everything I truly desire",
  likes: 2100,
  comments: 510,
  shares: 180,
  reposts: 120,
  bookmarks: 310,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
},
{
  id: 17,
  video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
  profilePic: "https://i.pravatar.cc/150?img=17",
  name: "Aditya Bose",
  description: "Listening to music and feeling every beat deeply inside my soul always",
  likes: 990,
  comments: 200,
  shares: 60,
  reposts: 35,
  bookmarks: 120,
  liked: false,
  reposted: false,
  bookmarked: false,
  follow: false
},
{
  id: 18,
  video: "https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4",
  profilePic: "https://i.pravatar.cc/150?img=18",
  name: "Priya Nair",
  description: "Connecting with nature and enjoying peaceful moments away from busy life",
  likes: 1700,
  comments: 310,
  shares: 130,
  reposts: 85,
  bookmarks: 240,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
},
{
  id: 19,
  video: "https://filesamples.com/samples/video/mp4/sample_1280x720.mp4",
  profilePic: "https://i.pravatar.cc/150?img=19",
  name: "Karan Mehta",
  description: "Capturing street life and telling stories through every single photograph",
  likes: 1450,
  comments: 280,
  shares: 100,
  reposts: 65,
  bookmarks: 190,
  liked: false,
  reposted: false,
  bookmarked: true,
  follow: false
},
{
  id: 20,
  video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  profilePic: "https://i.pravatar.cc/150?img=20",
  name: "Ananya Roy",
  description: "Staying happy and spreading positivity through everything I create daily",
  likes: 2300,
  comments: 650,
  shares: 300,
  reposts: 180,
  bookmarks: 420,
  liked: true,
  reposted: true,
  bookmarked: true,
  follow: true
}
];

var sum=''
reelsData.forEach(function(elem){
    sum=sum+`<div class="reel">
                  <video autoplay loop src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.profilePic}" alt="">
                            <div class="name">${elem.name}</div>
                            <button>Follow</button>
                        </div>
                        <p>${elem.description}</p>
                    </div>
                    <div class="right">
                        <div class="love">
                            <h4 class="love-icon"><i class="ri-heart-line"></i></h4>
                            <h6>${elem.likes}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                            <h6>${elem.comments}</h6>
                        </div>
                        <div class="repost">
                            <h4 class="repost-icon"><i class="ri-repeat-line"></i></h4>
                            <h6>${elem.reposts}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-ins-line"></i></h4>
                            <h6>${elem.shares}</h6>
                        </div>
                        <div class="bookmark">
                            <h4 class="bookmark-icon"><i class="ri-bookmark-line"></i></h4>
                            <h6>${elem.bookmarks}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

let allreels=document.querySelector(".reels")
allreels.innerHTML=sum;