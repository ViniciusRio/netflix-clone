import '.Detail.css';
function Detail(props: any) {
    const {movie, onClosedDetail} = props;

    const closeDetail = () => {
        onClosedDetail();
    }

    return (
        <div className="detail-page">
            <div className="detail-image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
                <span className="detail-title">
                {movie.original_title}
                </span>
            </div>
            <div className="banner-fade-bottom fade-image"></div>
            <div className="detail-actions">
                <button className="detail-btn mgr-8">Play</button>
                <button className="detail-btn" onClick={closeDetail}>Back</button>
            </div>
            <div className="detail-description">
                <div className="detail-description-title">Description</div>
                <p className="detail-description-content">
                {movie.overview}
                </p>
            </div>
    </div>
    );  
}

export default Detail;