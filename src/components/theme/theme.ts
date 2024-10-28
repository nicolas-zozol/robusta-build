import front from './images/front.png';
import back from './images/back.png';
import architecture from './images/architecture.png';
import tutorials from './images/tutorials.png';
import calendar from './images/calendar.png';
import smartphone from './images/smartphone.png';
import email from './images/email.png';
import banner from './images/bg-main-banner-30.png';
import target from './images/target.png';
import caseImg from './images/case.png';
import fork from './images/fork.png';
import codeMasala from './images/code-masala.png';
import github from './images/git-hub.png';
import logo from './images/logo.png'
import * as React from "react";


export const theme = {
  site:'https://www.robusta.build/',
  none: "none",
  normal: "normal",
  inherit: "inherit",
  empty: "",
  colors: {
    black: "#2c2c2c",
    lightGrey: "#777",
    grey: "#808080",
    secondary: "#d4941f",
    gold: "#d4941f",
    primary: "#581287",
    test:"#862ebd",
    lightSecondary: "#67407f",
    // TODO NZ; check there
    purple: "#67407f",
    lightPurple: "#68109f",
    backgroundGrey: "#f5f5f5",
    fullWhite:"#fff",
    brokenWhite:"#f5f5f5"
  },
  itemColors() {
    return {
      primaryLink: theme.colors.primary,
      shyLink: theme.colors.grey,
      primaryBorder: theme.colors.primary
    }
  },
  lighten(color:string, amount=20){
    return lightenOrDarkenColor(color, amount)
  },
  darken(color:string, amount=20){
    return lightenOrDarkenColor(color, -amount)
  },
  fonts: ["Roboto", "sans-serif"],
  icons: {
    front,
    back,
    architecture,
    tutorials,
    calendar,
    smartphone,
    email,
    banner,
    target,
    caseImg,
    fork,
    codeMasala,
    github,
    logo
  },
  sizes: {
    tag: "10px",
    normal: "14px",
    medium: "21px",
    large: "28px",
    veryLarge: "36px"
  },
  weights: {
    bold: "bold"
  },
  lineHeights: {
    normal: 1,
    large: 1.5
  },
  transforms: {
    lowercase: "lowercase",
    uppercase: "uppercase",
    none: "none"
  },
  when: (option: boolean | undefined, value: string) => (option === true ? value : "inherit")
}

export interface WithClass {
  className?: string;
  style?: object;
  children: React.ReactNode;
}

export const addClass = (module:any , className: string | undefined) => className ? module + ' ' + className : module;

export function lightenOrDarkenColor(color:string, amount:number) {

  let usePound = false;

  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color,16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  let g = (num & 0x0000FF) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
