declare module 'flubber' {
    export function interpolate(from: string, to: string, options: object): (x: number) => string;
}