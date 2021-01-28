import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      blue: string;
      orange: string;
      title: string;
      text: string;
      complement: string;
      shapeLight: string;
      shapeLighter: string;
      red: string;
      green: string;
      greenLow: string;
      orangeLow: string;
      yellow: string;
      background: string;
    }
  }
}
