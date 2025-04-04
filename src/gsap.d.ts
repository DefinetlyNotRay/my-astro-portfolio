declare module "gsap" {
  export default gsap;
  export const gsap: any;
  export function to(target: any, vars: any): any;
  export function from(target: any, vars: any): any;
  export function fromTo(target: any, fromVars: any, toVars: any): any;
  export function registerPlugin(...args: any[]): any;
  export function timeline(vars?: any): any;
  export function set(target: any, vars: any): any;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: any;
}
