import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the About page!</h2>
            </main>
            <nav>
                <Link to="/contact">contact</Link>
            </nav>
        </>
    );
}

export default Home;
