import React from 'react';
import pandaLogo from '../assets/img/pandaAcademyLogo_wide.png';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-4 py-3 flex items-center justify-between">
            <img src={pandaLogo} alt="パンダアカデミーロゴ" className="h-12" />
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">ホーム</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">コース</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">お問い合わせ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
