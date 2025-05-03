import { create } from "zustand";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("theme") || "system";

  // the resolved theme is the one that will be applied to the document
  // it can be the saved theme or the system theme if the saved theme is "system"
  // if the saved theme is "system", we need to check the system theme
  // and apply it to the document
  const resolved = savedTheme === "system" ? getSystemTheme() : savedTheme;

  const applyTheme = (theme) => {
    const root = document.documentElement;
    console.log(root)
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  };


  console.log("inside the theme provider")

  // Apply on initial load
  applyTheme(resolved);


  // Listen to system change
  // if (savedTheme === "system") {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   mediaQuery.addEventListener("change", () => {
  //     const newResolved = getSystemTheme();
  //     set({ resolvedTheme: newResolved });
  //     applyTheme(newResolved);
  //   });
  // }

  return {
    theme: savedTheme,
    resolvedTheme: resolved,
    setTheme: (newTheme) => {
      localStorage.setItem("theme", newTheme);
      const final = newTheme === "system" ? getSystemTheme() : newTheme;
      set({ theme: newTheme, resolvedTheme: final });
      applyTheme(final);
    },
  };
});
