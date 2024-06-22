export interface ColorsPalette {
  primary: string;
  card: string;
  background: string;
  text: string;
  border: string;
  notification: string;
}

export interface ITheme {
  dark: boolean;
  colors: ColorsPalette;
}

export enum Colors {
  White = '#FFFFFF',
  Black = '#000000',
  DarkGray = '#212121',
  LightGray = '#C3C3C3',
  Yellow = '#dd920e',
  Violet = '#7f41aa',
}
