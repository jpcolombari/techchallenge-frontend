// src/utils/breakpointsMedia.ts
import { css } from 'styled-components';
import medias from './medias';
const { breakpoints } = medias;
type BreakpointKeys = keyof typeof breakpoints;
type CssByBreakpoint = { [key in BreakpointKeys]?: ReturnType<typeof css>; };

function breakpointsMedia(cssByBreakpoint: CssByBreakpoint) {
  const breakpointNames = Object.keys(breakpoints) as BreakpointKeys[];
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => css`
      @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `);
}

export default breakpointsMedia;