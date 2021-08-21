import styled from 'styled-components'
import { useRef, useEffect } from "react"
import { Link } from 'react-router-dom'

const SideNav = ({ isOpen }) => {

    const sidebarRef = useRef(null)

    useEffect(() => {
        if(isOpen ){
            sidebarRef.current.style.left = 0
        } else {
            sidebarRef.current.style.left = `-300px`
        }
    }, [isOpen])

    return (
        // isOpen && 
        <SideBarContainer ref={sidebarRef}>
            <SideBarBrandLogo>
                <img src="https://nimdee.com/static/media/nimdee-02%201.e4fc37bf.svg" alt="" height={77} />
            </SideBarBrandLogo>

            <SideBarMenuWrapper>
                <SideBarMenu>
                    <h2>SCHOOL</h2>

                    <ul>
                        <li>
                            <Link to="/Admin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                                    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                    <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </SideBarMenu>

                <SideBarMenu>
                    <h2>MY CLASSES</h2>

                    <ul>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                </svg>
                                <span>Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                                </svg>
                                <span>Pupils</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                    
                </SideBarMenu>

                <SideBarMenu>
                    <h2>ADMINISTRATION</h2>

                    <ul>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                </svg>
                                <span>All Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                                </svg>
                                <span>All Pupils</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllTeachers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                                <span>All Teachers</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-badge-hd" viewBox="0 0 16 16">
                                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                </svg>
                                <span>Spreadsheet Importer</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-badge-hd" viewBox="0 0 16 16">
                                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                </svg>
                                <span>Subscription</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/AllPupils">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-badge-hd" viewBox="0 0 16 16">
                                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                </svg>
                                <span>Contatc Us</span>
                            </Link>
                        </li>
                    </ul>
                    
                </SideBarMenu>
            </SideBarMenuWrapper>

           
            
        </SideBarContainer>
    )
}

export default SideNav

const SideBarContainer = styled.div`
    height: 100vh;
    width: 300px;
    font-size: 14px;
    background-color: rgb(54, 53, 97);
    border-right: 1px solid whitesmoke;
    position: fixed;
    z-index: 10;
    left: -300px;
    top: 0;
    transition: 300ms ease-in-out;
    overflow-y: scroll;

    @media screen and (min-width: 768px){
        left: 0 !important;
    }

    ::-webkit-scrollbar {
        background-color: white;
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #999;
        border-radius: 3px;
        cursor: pointer;
    }
`

const SideBarBrandLogo = styled.div`
    position: sticky;
    top: 0; 
    /* padding: 15px 5px; */
    height: 120px;
    /* text-align: center; */
    margin-bottom: 50px;
    background-color: white;
    border-right: 1px solid whitesmoke;

    > img {
        height: 100%;
        object-fit: contain;
    }
`

const SideBarMenu = styled.div`
    margin-bottom: 30px;

    > h2 {
        font-weight: 500;
        font-size: 16px;
        text-transform: uppercase;
        color: #999;
        padding: 7px 25px;
    }

    > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        > li > a {
            padding: 10px 25px;
            cursor: pointer;
            color: white;
            width: 100%;
            display: inline-block;
            text-decoration: none;

            :focus {
                background-color: rgb(239, 72, 113);
                color: white;
            }

            > span {
                font-weight: 500;
                font-size: 16px;
                margin-left: 10px;
                text-transform: capitalize;
            }

            :hover {
                background-color: rgb(239, 72, 113);
                color: white;
            }
        }
    }

`

const SideBarMenuWrapper = styled.div`

`
