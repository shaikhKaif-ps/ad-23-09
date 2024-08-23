// components/VideoPlayer.js

const VideoPlayer = ({ src, type, controls = true, autoplay = false, loop = false, muted = false }) => {
    return (
      <video controls={controls} autoPlay={autoplay} loop={loop} muted={muted} width="600">
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    );
  };
  
  export default VideoPlayer;