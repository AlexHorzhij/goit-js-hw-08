import Player from '@vimeo/player';
import { throttle } from 'lodash'; 


const player = new Player('vimeo-player', {
});

const throttledTimeUptade = throttle(function (e){
    localStorage.setItem("videoplayer-current-time", e.seconds)
    console.log(e.seconds)
}, 1000)

player.on('timeupdate', throttledTimeUptade)

const currentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(currentTime)

