import './VideoCard.css';


function VideoCard({ cardTitle, videoSrc }) {

    return (
        <div className="videoCardContainer">
            <h4>{cardTitle}</h4>
            <video
                src={videoSrc}
                controls
                className="videoPreview"
            />
        </div>
    );
}

export default VideoCard;
