"use client";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeComp = ({children}) => {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className={theme}>
            <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-900 min-h-screen'>
                {children}
            </div>
        </div>
    )
}

export default ThemeComp;
