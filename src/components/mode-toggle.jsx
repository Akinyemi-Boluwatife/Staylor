import { MoonStar, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="ghost"
      size="sm"
      className="border-none"
    >
      {theme === "dark" ? (
        <MoonStar className="absolute size-6 scale-0 rotate-90 transition-all sm:size-9 dark:scale-100 dark:rotate-0" />
      ) : (
        <SunMedium className="absolute size-6 scale-0 rotate-90 transition-all sm:size-9 dark:scale-100 dark:rotate-0" />
      )}
    </Button>
  );
}
