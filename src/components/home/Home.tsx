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


            </div>
        </>
    );
}

export default Home;