import type { NextPage } from 'next';
import Head from 'next/head';
import ProfileHero from '../components/Home/ProfileHero';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Matthew Marcellino's Portfolio</title>
                <meta
                    name="description"
                    content="A third year Computer Science major student at Universitas Multimedia Nusantara, focusing on Ethereum Smart Contract and Web3 Development."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProfileHero />
        </div>
    );
};

export default Home;
