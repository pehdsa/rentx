import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';

type Params = {
    children: ReactNode
}

export function AppProvider({ children }: Params) {
    return (
        <AuthProvider>
            { children }
        </AuthProvider>
    )
}