// src/utils/lazyImport.ts

import * as React from 'react';

export function lazyImport<
    T extends React.ComponentType<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
    I extends { [K2 in K]: T },
    K extends keyof I
>(factory: () => Promise<I>, name: K): I {
    return Object.create({
        [name]: React.lazy(() => factory().then((module) => ({ default: module[name] }))),
    });
}