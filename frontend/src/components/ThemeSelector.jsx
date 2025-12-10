import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSelector() {
  const { mode, setMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        className="text-sm p-2 rounded-md border bg-white dark:bg-gray-800"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="system">Sistema</option>
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>
    </div>
  );
}
