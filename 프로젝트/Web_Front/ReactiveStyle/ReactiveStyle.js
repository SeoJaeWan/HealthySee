import { css } from 'styled-components';

export const media = ({
    desktop: (...args) => css`
        @media (max-width: 1200px) {
            ${ css(...args) }
        }
    `,

    board: (...args) => css`
    @media (max-width: 1400px) {
        ${ css(...args) }
    }
`,

    tablet: (...args) => css`
        @media (max-width: 992px) {
            ${ css(...args) }
        }
    `,

    mobile: (...args) => css`
        @media (max-width: 600px) {
            ${ css(...args) }
        }
    `,
    half: (...args) => css`
        @media (max-width: 990px) {
            ${ css(...args) }
        }
    `,
    imgs: (...args) => css`
        @media (max-width: 1500px) {
            ${ css(...args) }
        }
    `
});