/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1- setup enviroment',
        'name': 'setupenviroment.mp4',
        'duration': '12:18',
    },
    {
        'id': 'a2',
        'title': 'output & comments',
        'name': 'output & comments.mp4',
        'duration': '11:06',
    },
    {
        'id': 'a3',
        'title': 'variables',
        'name': 'variables.mp4',
        'duration': '9:45',
    },

    {
        'id': 'a4',
        'title': 'type casting',
        'name': 'type casting.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a5',
        'title': 'input',
        'name': 'input.mp4',
        'duration': '7:06',
    },
    {
        'id': 'a6',
        'title': 'Operation',
        'name': 'Operation.mp4',
        'duration': '9:05',
    },
    {
        'id': 'a7',
        'title': 'assignment Operators',
        'name': 'assignment Operators.mp4',
        'duration': '8:48',
    },

    {
        'id': 'a8',
        'title': 'if Statements',
        'name': 'if Statements.mp4',
        'duration': '10:01',
    },

    {
        'id': 'a9',
        'title': 'switch',
        'name': 'switch.mp4',
        'duration': '3:38',
    },

    {
        'id': 'a10',
        'title': 'loops',
        'name': 'loops.mp4',
        'duration': '12:20',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
