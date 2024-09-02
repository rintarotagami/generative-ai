import React from 'react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="z-50 sticky top-0 left-0 w-full px-4 py-5 flex items-center justify-between bg-white shadow-md">
            <img src={logo} alt="ロゴ" className="h-8" />
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-gray-600 hover:text-gray-900">ホーム</Link></li>
                    <li><Link to="/" className="text-gray-600 hover:text-gray-900">ギャラリー</Link></li>
                    <li><Link to="/generate" className="text-gray-600 hover:text-gray-900">画像生成</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
