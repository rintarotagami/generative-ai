import { atom } from 'jotai';

export const promptAtom = atom({
    prompt: "静かな森の中で神秘的な光が差し込む風景",
    negative_prompt: "不自然な影やノイズ、過度な露出を避ける",
    model: "animagine-3-0",
    width: 1024,
    height: 1024,
    useTemplate: true,
});

