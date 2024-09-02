import React from 'react';
import logo from '@/assets/logo.png';

const Header: React.FC = () => {
    return (
        <header className="z-50 sticky top-0 left-0 w-full px-4 py-5 flex items-center justify-between bg-white shadow-md">
            <img src={logo} alt="ロゴ" className="h-8" />
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">ホーム</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">ギャラリー</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">お問い合わせ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
