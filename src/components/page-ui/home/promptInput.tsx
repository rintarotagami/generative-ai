import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const PromptInput: React.FC = () => {
    const [prompt, setPrompt] = useState('');

    const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
    };

    const handleGenerate = () => {
        // ここに生成ロジックを実装
        console.log('生成ボタンがクリックされました。プロンプト:', prompt);
    };

    return (
        <div className="w-3/4 max-h-14 min-h-12 flex items-center px-5 py-2 bg-white rounded-full border border-black">
            <input
                type="text"
                id="prompt-input"
                value={prompt}
                onChange={handlePromptChange}
                placeholder=""
                className="flex-grow mr-2 focus:outline-none bg-transparent text-lg"
            />
            <Button onClick={handleGenerate} className="whitespace-nowrap">
                生成
            </Button>
        </div>
    );
};

export default PromptInput;
