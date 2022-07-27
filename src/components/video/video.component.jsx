import "./video.styles.scss";
const Video = () => {
  return (
    <video
      muted
      loop
      autoPlay="autoplay"
      id="videoplayer"
      className="fullscreen-video"
    >
      <source
        id="videosource"
        src="https://www.mdnsonline.com/image/data/Videos/2022SS.mp4"
        type="video/mp4"
      />
      <img
        src="/image/data/Banners/20220326/banner_1_1.jpg"
        title="Your browser does not support the <video> tag"
      />
    </video>
  );
};
export default Video;
