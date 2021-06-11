import './Home.css'
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Row from '../row/Row';

function Home() {
    return (
        <>
            <div className="app">
                <Nav />
                <Header />
                <Row title='Netflix Originals' category='netflix-originals' />
                <Row title='Trending Now' category='trending-now' />
                <Row title='Top Rated' category='top-rated' />
                <Row title='Action Movies' category='action-movies' />
                <Row title='Horror Movies' category='horror-movies' />
                <Row title='Romance Movies' category='romance-movies' />
                <Row title='Documentaries Movies' category='documentaries-movies' />
            </div>
        </>
    );
}

export default Home;