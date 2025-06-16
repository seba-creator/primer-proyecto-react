import { useState } from 'react';
import './HoverVideoCard.css';


function HoverVideoCard({ screenshotSrc, videoSrc }) {

    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="videoCardContainer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {!hovered && <img src={screenshotSrc} className="screenshotImg" />}
            {hovered && (
                <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    className="videoPreview"
                />
            )}
        </div>
    );
}

export default HoverVideoCard;
