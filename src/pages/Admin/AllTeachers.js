import { ContentContainer, ContentWrapper, TopBanner, BannerText, TableWrapper, Search } from './allStyles'
import { InputGroup, FormControl, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ImFilesEmpty } from 'react-icons/im'

const AllTeachers = () => {

    const [searchInput, setSearchInput] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const [people, setPeople] = useState([])
    const [allPeople, setAllPeople] = useState([])

    const handleSearchInput = (e) => {
        const searchValue = e.target.value
        setSearchInput(searchValue)
        if(searchValue){
            const searchedPeople = people.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setPeople(searchedPeople)
        } else {
            setPeople(allPeople)
        }
    }

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
    };

    const fetchPeople = async () => {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users');
        setPeople(data)
        setAllPeople(data)
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return (
        <ContentContainer>
            <ContentWrapper>
                <TopBanner className="d-flex align-center justify-content-between p-3">
                    <BannerText>
                        <h3>All Teachers</h3>
                        <p>View all teachers</p>
                    </BannerText>

                    <Link to="/Admin/AddStudent" className="align-self-center">
                        <Button variant="outline-light" className="rounded-pill"> <AddIcon /> New</Button>
                    </Link>
                </TopBanner>

                <Search className="my-3 p-3">
                    <InputGroup className="w-100">
                        <FormControl
                        placeholder="Search..."
                        aria-label="SearchPerson"
                        aria-describedby="seacrh-icon"
                        value={searchInput}
                        onChange={handleSearchInput}
                        />
                        <InputGroup.Text id="seacrh-icon"><SearchIcon /></InputGroup.Text>
                    </InputGroup>
                </Search>

                <TableWrapper className="p-3">
                    <Table responsive bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Last Activity</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people && people.map((person, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{person.name}</td>
                                        <td>
                                            <CopyToClipboard text={person.email} onCopy={onCopyText}>
                                                {/* <div className="copy-area"> */}
                                                    <ImFilesEmpty className="me-2"/>
                                                    {/* <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                                                        Copied!
                                                    </span> */}
                                                {/* </div> */}
                                            </CopyToClipboard>
                                            {person.email}
                                        </td>
                                        <td>about 2 months ago</td>
                                        <td>2 years ago</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </TableWrapper>
            </ContentWrapper>
            
        </ContentContainer>
    )
}

export default AllTeachers
