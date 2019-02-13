import styled from 'styled-components';
import media from '../settings/media'

export const Hide = styled.div`
    ${props => media[props.at]`
        display: none;
    `}
`;