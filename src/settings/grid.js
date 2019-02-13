import styled from 'styled-components';
import media from './media'

export const Container = styled.div`
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: Auto;
    margin-right: Auto;
    box-sizing: border-box;
`
export const Row = styled.div`
    width: 100%;
    height: Auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`
function getColumnWidth(value) {
    if (!value) return;

    let width = value / 12 * 100;

    return `width:${width}%`
}

export const Col = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    background-color: #dddddd;
    width: 100%;

    ${media.xs`
        ${({xs}) => xs && getColumnWidth(xs)}
    `};
    ${media.ms`
        ${({ms}) => ms && getColumnWidth(ms)}
    `};

    ${media.ls`
        ${({ls}) => ls && getColumnWidth(ls)}
    `};
`