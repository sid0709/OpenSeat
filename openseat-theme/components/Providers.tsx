"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { LayerProvider } from "@astryxdesign/core/Layer";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import type { ThemeMode } from "@astryxdesign/core/theme";

type ColorMode = Exclude<ThemeMode, "system">;

const ColorModeContext = createContext<{
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
}>({
  mode: "light",
  setMode: () => {},
});

export function useColorMode() {
  return useContext(ColorModeContext);
}

export function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>("light");
  const value = useMemo(() => ({ mode, setMode }), [mode]);

  return (
    <Theme theme={neutralTheme} mode={mode}>
      <LinkProvider component={Link}>
        <LayerProvider>
          <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
        </LayerProvider>
      </LinkProvider>
    </Theme>
  );
}
