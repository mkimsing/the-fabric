import { css } from 'styled-components'
//Defines widths to use when defining media queries and breakpoints
const sizes = {
  'tablet': '600',
  'landscape_tablet': '768',
  'desktop': '1024',
  'large_desktop': '1440',
  'xl_desktop': '1700',
};

export const breakpoints = {
  'for_phone_only': {
    rule: 'max-width',
    value: sizes.tablet - 1
  },
  'for_tablet_portrait_up': {
    rule: 'min-width',
    value: sizes.tablet
  },
  'for_tablet_landscape_up': {
    rule: 'min-width',
    value: sizes.landscape_tablet
  },
  'for_desktop_up': {
    rule: 'min-width',
    value: sizes.desktop
  },
  'for_large_desktop_up': {
    rule: 'min-width',
    value: sizes.large_desktop
  },
  'for_xl_desktop_up': {
    rule: 'min-width',
    value: sizes.xl_desktop
  },
}

/**
 * Function to iterate through the sizes and create a media query template
 * 
 * useage in styled-component:
 * 
      import media from '.../breakpoints'
      ...

      ${media.for_tablet_portrait_up`
        padding: 10px;
      `}
 * 
 */
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {

  //Compose media query
  accumulator[label] = (...args) => css`
    @media (${breakpoints[label].rule}: ${breakpoints[label].value}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})


//Define responsive horizontal gutters / margins
export const edge_gutters = css`
    margin-left: 24px;
    margin-right: 24px;

  ${media.for_desktop_up`
    margin-left: 116px;
    margin-right: 116px;
  `}

  ${media.for_large_desktop_up`
    margin-left: 376px;
    margin-right: 376px;
  `}
`