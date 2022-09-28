import React from 'react';
import {useState, useEffect } from 'react'

function Videoplayer(videoElement) {

    const [playerState, setplayerState] = useState({
        isPlaying: false,
         progress: 0,
         speed: 1,
         isMuted: false
    })



    const clickplay = () => {
        setplayerState({
           ...playerState, 
           isPlaying: !playerState.isPlaying,
         })
    }



    useEffect(() => {
        playerState.isPlaying ? videoElement.current.play(): videoElement.current.pause()
    }, [playerState.isPlaying, videoElement])



    const handleOnTimeUpdate = () => {
        let progress = (videoElement.current.currentTime / videoElement.duration) * 100

        setplayerState({
            ...playerState,
             progress,
        });
    };

    const handleVideoProgress = (event) => {
        let Adjustedtime = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * Adjustedtime
        setplayerState({
            ...playerState,
            progress: Adjustedtime,
        });
    };


    const clickMute = () => {
        setplayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        })
    }


    useEffect(() => {
        playerState.isMuted ? (videoElement.current.muted = true) : videoElement.current.muted  = false
    }, [playerState.isMuted, videoElement])


    

    return  {
        playerState,
        clickplay,
        handleOnTimeUpdate,
        handleVideoProgress,
        clickMute,

    }
}

export default Videoplayer;