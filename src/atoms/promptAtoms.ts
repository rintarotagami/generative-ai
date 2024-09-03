import { atom } from 'jotai';

export const promptAtom = atom({
    prompt: "1girl",
    negative_prompt: "ugly",
    model: "animagine-3-0",
    width: 1024,
    height: 1024,
    useTemplate: true,
});

