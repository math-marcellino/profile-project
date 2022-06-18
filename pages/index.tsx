import type { NextPage } from 'next';
import Head from 'next/head';
import ProfileHero from '../components/ProfileHero';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Matthew Marcellino's Portofolio</title>
                <meta name="description" content="Matthew Marcellino's Portofolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProfileHero />
        </div>
    );
};

export default Home;
