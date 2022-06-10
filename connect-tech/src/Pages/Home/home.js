import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">about</Link>
            </nav>
        </>
    );
}

export default Home;
