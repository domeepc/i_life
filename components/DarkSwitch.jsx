import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';

export default function DarkSwitch() {
  const [enabled, setEnabled] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const data = window.localStorage.getItem('theme');
    if (data === 'light') setEnabled(JSON.parse(false));
    else if (data === 'dark') setEnabled(JSON.parse(true));
  }, []);

  return (
    <div className="flex justify-center items-center group relative flex-col">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`${
          enabled ? 'bg-gray-600' : 'bg-gray-300'
        } relative inline-flex h-6 w-11 items-center rounded-full transition`}
      >
        <span
          className={`${
            enabled
              ? 'translate-x-6 h-4 w-4 transform rounded-full moon transition'
              : 'translate-x-1 inline-block h-4 w-4 transform rounded-full bg-gradient-to-l to-yellow-400 from-orange-400 transition'
          } `}
        />
      </Switch>
    </div>
  );
}
