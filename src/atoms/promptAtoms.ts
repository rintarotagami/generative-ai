import { atom } from 'jotai';

export const promptAtom = atom({
    prompt: "1girl",
    negative_prompt: "ugly",
    width: 1024,
    height: 1024,
    tags: "",
    useTemplate: false,
});

