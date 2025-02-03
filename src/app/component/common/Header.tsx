export function Header() {
    return (
        <header className="">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center space-x-8">
                    <span className="text-lg font-bold">デジタル庁</span>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            ホーム
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            一般の方
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            行政・事業者の方
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            プレスルーム
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            Global Site
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-800">
                        <span className="sr-only">検索</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65a7.5 7.5 0 014.35 9.35z"
                            />
                        </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                        <span className="sr-only">メニュー</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;