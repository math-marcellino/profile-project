import { FunctionComponent } from 'react';
import Image from 'next/image';
import myPicture from '../public/ProfilePict.png';
import Layout from './Layout';

type ProfileHeroProps = {};

const ProfileHero: FunctionComponent<ProfileHeroProps> = () => {
    return (
        <Layout>
            <div className="flex items-center h-screen">
                <div className="grid md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 w-[90%] mx-auto gap-4">
                    <div className="flex items-center md:col-start-2 lg:col-start-2 xl:col-start-2 md:col-span-3 lg:col-span-4 xl:col-span-6 p-4">
                        <div className="space-y-3">
                            <p className="text-2xl font-bold">Hey there! My name is</p>
                            <p className="text-6xl font-extrabold inline-block">
                                Matthew Marcellino.
                            </p>
                            <p className="text-lg font-semibold text-zinc-500 dark:text-zinc-400">
                                A third year Computer Science major student at Universitas
                                Multimedia Nusantara, focusing on Ethereum Smart Contract and Web3
                                Development.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 xl:col-span-3 hover:scale-110 transition duration-300 ease-in-out">
                        <Image
                            className="rounded-full"
                            src={myPicture}
                            alt="Author's Profile Picture"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfileHero;
