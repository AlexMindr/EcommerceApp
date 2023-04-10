/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Palette,
  PaletteColor,
  PaletteOptions,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteOptions {
    neutral: PaletteColorOptions;
  }
}
