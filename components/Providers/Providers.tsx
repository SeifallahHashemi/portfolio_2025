'use client';
import React from 'react';
import {ThemeProvider} from "next-themes";
import ThemeDataProvider from "@/context/ThemeDataProvider";

const Providers = ({children}: { children: React.ReactNode }) => {
    return (
        <ThemeProvider enableSystem={true} attribute={"class"}>
            <ThemeDataProvider>
                {children}
            </ThemeDataProvider>
        </ThemeProvider>
    );
};

export default Providers;