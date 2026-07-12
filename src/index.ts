// Импортируем стили
import './style.css'

const btn = document.getElementById('video-btn')
if (btn) {
btn.onclick = () => {
    const video = document.getElementById('video') as HTMLVideoElement
    video.paused ? video.play() : video.pause()
    btn.className = video.paused ? 'fa fa-play' : 'fa fa-pause'
    }
}