import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);  // usiamo lo use state per salvare lo stato attivo o no

  // Al primo caricamento: controlla se c'è un tema salvato
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => { // per eseguire codice ogni volta che dark cambia
    const root = window.document.documentElement; // è un modo per dire dammi la parte html della pagina
 if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);  // è una dipendency array, serve a dire a react di esedguire questa funzione solo quando dark cambia

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-auto mb-6 px-4 py-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}