/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Toolbox() {
    return (
        <div className="mt-12 flex h-24 w-full flex-row items-center justify-start bg-red-600 p-3">
            <Link
                href={'/'}
                className="flex h-8 flex-row items-center justify-center"
            >
                <img
                    id="logo"
                    src="https://i.ibb.co/SKRzprR/logo2.png"
                    width={600}
                    height={20}
                    alt="logo"
                ></img>
            </Link>
            <input
                type="text"
                placeholder="search"
                className="h-12 w-screen rounded-lg"
            />
            <Link
                href={'/list/movies'}
                className="m-4 flex items-center justify-center border-b-2 p-4 text-xl text-white hover:rounded-md hover:bg-white hover:text-black 2xl:text-2xl"
            >
                Movies
            </Link>
            <Link
                href={'/list/shows'}
                className="m-4 flex items-center justify-center border-b-2 p-4 text-xl text-white hover:rounded-md hover:bg-white hover:text-black 2xl:text-2xl"
            >
                Shows
            </Link>
            <Link
                href={'/list/books'}
                className="m-4 flex items-center justify-center border-b-2 p-4 text-xl text-white hover:rounded-md hover:bg-white hover:text-black 2xl:text-2xl"
            >
                Books
            </Link>
            <Link
                href={'/list/restaurants'}
                className="m-4 flex items-center justify-center border-b-2 p-4 text-xl text-white hover:rounded-md hover:bg-white hover:text-black 2xl:text-2xl"
            >
                Restaurants
            </Link>
            <Link href={'/auth'} className="m-2 text-white">
                signin
            </Link>
            <div className="text-white">/</div>
            <Link href={'/register'} className="m-2 text-white">
                signup
            </Link>
        </div>
    );
}
