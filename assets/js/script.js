var toggleClick = document.querySelector(".toggleBox");
var container = document.querySelector(".container");
toggleClick.addEventListener('click', ()=>{
    toggleClick.classList.toggle('active');
    container.classList.toggle('active');
})

// video of the Day
const vidToEmbed = document.getElementById('video-to-embed');
let date = new Date()
let day = date.getDay()
rhino_vids = [
    "https://www.youtube.com/embed/LNCC6ZYI3SI",
    "https://www.youtube.com/embed/yccID-2jlfM",
    "https://www.youtube.com/embed/MGVwsP-VjLg",
    "https://www.youtube.com/embed/9AxMpBgSTjc",
    "https://www.youtube.com/embed/SaRPTah1-yg",
    "https://www.youtube.com/embed/PDejp64F_t0",
    "https://www.youtube.com/embed/FcJrQ9pUq5k"
]

document.addEventListener("DOMContentLoaded", function() {
    pickVideo();
  });

function pickVideo() {
    vidToEmbed.innerHTML = `<iframe class="responsive-iframe" src="${rhino_vids[day]}"></iframe>`
  }

