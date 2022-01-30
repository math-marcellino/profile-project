import { FunctionComponent, useState } from "react";
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';

type ThemeToggleProps = {};

const ThemeToggle: FunctionComponent<ThemeToggleProps> = () => {

    const {theme, setTheme} = useTheme();
    const [enabled, setEnabled] = useState(false)

    const handleChangeTheme = () => {
        setEnabled(!enabled);
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return(
        <div className="flex space-x-2">
            <span>Dark</span>
            <Switch
                checked={enabled}
                onChange={handleChangeTheme}
                className={`${
                    enabled ? 'bg-gray-700' : 'bg-gray-400'
                } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`transform transition ease-in-out duration-200 ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                >
                </span>
            </Switch>
            <span>Light</span>
        </div>
        
    )
}

export default ThemeToggle;