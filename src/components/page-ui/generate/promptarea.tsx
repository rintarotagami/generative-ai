import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface PromptAreaProps {
    prompt: string;
    negativePrompt: string;
}

const PromptArea: React.FC<PromptAreaProps> = ({ prompt, negativePrompt }) => {
    const [text, setText] = useState(prompt);
    const [negativeText, setNegativeText] = useState(negativePrompt);
    const [fontSize, setFontSize] = useState('text-base');

    useEffect(() => {
        setText(prompt);
        setNegativeText(negativePrompt);
    }, [prompt, negativePrompt]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        if (newText.length <= 1024) {
            setText(newText);
            if (newText.length > 512) {
                setFontSize('text-sm');
            } else {
                setFontSize('text-base');
            }
        }
    };

    const handleNegativeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newNegativeText = event.target.value;
        if (newNegativeText.length <= 1024) {
            setNegativeText(newNegativeText);
        }
    };

    return (
        <div className="p-4 rounded-md w-full">
            <Label htmlFor="generation-prompt" className="block text-lg font-bold mb-2">プロンプト</Label>
            <textarea
                id="generation-prompt"
                value={text}
                onChange={handleChange}
                placeholder="生成したい画像の説明を入力してください"
                className={`w-full h-20 resize-none overflow-auto border ${fontSize}`}
            />
            <Label htmlFor="negative-prompt" className="block text-lg font-bold mt-4 mb-2">ネガティブプロンプト</Label>
            <textarea
                id="negative-prompt"
                value={negativeText}
                onChange={handleNegativeChange}
                placeholder="生成したくない画像の説明を入力してください"
                className="w-full h-20 resize-none overflow-auto border"
            />
            <div className="flex justify-end mt-4">
                <Button>生成</Button>
            </div>
        </div>
    );
};

export default PromptArea;


