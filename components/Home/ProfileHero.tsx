import { FunctionComponent } from 'react';
import Layout from '../Layout';

type ProfileHeroProps = {};

const ProfileHero: FunctionComponent<ProfileHeroProps> = () => {
    return (
        <Layout>
            <div className="flex lg:flex-row flex-col-reverse items-center justify-center min-h-screen gap-12 2xl:max-w-7xl xl:max-w-5xl lg:max-w-[850px] md:max-w-2xl sm:max-w-lg max-w-[300px] py-12">
                <div className="flex flex-col gap-3 max-w-3xl text-center lg:text-left">
                    <p className="text-2xl font-bold">Hey there! My name is</p>
                    <p className="text-6xl font-extrabold inline-block">Matthew Marcellino.</p>
                    <p className="text-lg font-semibold text-zinc-500 dark:text-zinc-400">
                        A third year Computer Science major student at Universitas Multimedia
                        Nusantara, focusing on Ethereum Smart Contract and Web3 Development.
                    </p>
                </div>
                <img
                    className="rounded-full xl:max-w-md md:max-w-sm max-w-[300px]"
                    src="/ProfilePict.png"
                    alt="Author's Profile Picture"
                />
            </div>
        </Layout>
    );
};

export default ProfileHero;
