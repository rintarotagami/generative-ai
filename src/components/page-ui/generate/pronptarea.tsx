import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PromptArea: React.FC = () => {
    const [text, setText] = useState('');
    const [negativeText, setNegativeText] = useState('');
    const [fontSize, setFontSize] = useState('text-base');

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
        <div className="border p-4 rounded-md">
            <Label htmlFor="generation-prompt" className="block text-lg font-bold mb-2">プロンプト</Label>
            <textarea
                id="generation-prompt"
                value={text}
                onChange={handleChange}
                placeholder="生成したい画像の説明を入力してください"
                className={`w-full h-20 resize-none overflow-auto ${fontSize}`}
            />
            <Label htmlFor="negative-prompt" className="block text-lg font-bold mt-4 mb-2">ネガティブプロンプト</Label>
            <textarea
                id="negative-prompt"
                value={negativeText}
                onChange={handleNegativeChange}
                placeholder="生成したくない画像の説明を入力してください"
                className="w-full h-20 resize-none overflow-auto"
            />
            <div className="flex justify-end mt-4">
                <Button>生成</Button>
            </div>
        </div>
    );
};

export default PromptArea;


