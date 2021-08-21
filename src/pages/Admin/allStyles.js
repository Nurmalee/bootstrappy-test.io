import styled from 'styled-components'

export const ContentContainer = styled.div`
    height: 100vh;
    position: relative;
    display: grid;
    /* margin: 15px; */
`

export const ContentWrapper = styled.div`
    @media screen and (min-width: 768px){
        padding-left: 300px;
    }
`

export const TopBanner = styled.div`
    background-color: rgb(54, 53, 97);
    color: white;
    height: 120px;
    position: sticky;
    top: 0;
    z-index: 10;
`

export const BannerText = styled.div``

export const Search = styled.div`
    max-width: 500px;
    margin-left: auto;
`

export const TableWrapper = styled.div``