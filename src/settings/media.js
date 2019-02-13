import { css } from 'styled-components';

const media = {
    xs: (...args) => css`
        @media (max-width: 767px) {
        ${css(...args)}
        }
    `,
    ms: (...args) => css`
        @media (min-width: 768px) {
        ${css(...args)}
        }
    `,
    ls: (...args) => css`
        @media (min-width: 1000px) {
        ${css(...args)}
    }
`,
}

export default media;