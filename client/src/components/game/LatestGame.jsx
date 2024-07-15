

export default function LatestGame({ latestGame }) {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={latestGame.imageUrl} />
            </div>
            <h3>{latestGame.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <a href="#" className="btn details-btn">
                    Details
                </a>
            </div>
        </div>
    )
}