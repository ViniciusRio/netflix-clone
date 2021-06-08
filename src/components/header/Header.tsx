import './Header.css';

function Header() {
    return (
        <header className="banner">
            <div className="banner-contents">
                <h1 className="banner-title">Ginny &amp; Georgia</h1>
            <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
            </div>
                <h1 className="banner-description">
                    Angsty and awkward fifteen year old Ginny Miller often feels more
                    mature than her thirty year old mother, the irresistible and dynamic
                    Georgia Miller...
                </h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    );
}

export default Header;