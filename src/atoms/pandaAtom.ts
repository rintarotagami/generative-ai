import { atom } from 'jotai';

export const currentFrameAtom = atom<number>(0);
export const totalFramesAtom = atom<number>(0);
export const activeCharacterAtom = atom<'bear' | 'panda'>('bear');