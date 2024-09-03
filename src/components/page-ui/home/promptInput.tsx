import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { promptAtom } from '@/atoms/promptAtoms';

const PromptInput: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [promptState, setPromptState] = useAtom(promptAtom);

    useEffect(() => {
        if (prompt === '' || promptState.useTemplate) {
            setPrompt(promptState.prompt);
        }
    }, [prompt, promptState]);

    const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPrompt = event.target.value;
        setPrompt(newPrompt);
        setPromptState((prevState) => {
            const newState = {
                ...prevState,
                useTemplate: newPrompt === '',
                prompt: newPrompt,
            };
            console.log('新しいアトムの値:', newState);
            return newState;
        });
    };

    const handleGenerate = () => {
        const finalPrompt = prompt === '' ? promptState.prompt : prompt;
        // ここに生成ロジックを実装
        console.log('生成ボタンがクリックされました。プロンプト:', finalPrompt);
    };

    return (
        <div className="w-5/6 md:w-3/4 max-h-14 min-h-12 flex items-center px-5 py-2 bg-white rounded-full border border-black">
            <input
                type="text"
                id="prompt-input"
                value={prompt}
                onChange={handlePromptChange}
                placeholder=""
                className="flex-grow mr-2 focus:outline-none bg-transparent text-lg"
            />
            <Link to="/generate">
                <Button onClick={handleGenerate} className="whitespace-nowrap">
                    生成
                </Button>
            </Link>
        </div>
    );
};

export default PromptInput;
