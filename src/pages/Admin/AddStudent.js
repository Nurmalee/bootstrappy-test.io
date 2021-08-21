// import SideNav from '../../components/SideNav'
import { Link } from 'react-router-dom'
import { ContentContainer, ContentWrapper, TopBanner, BannerText, TableWrapper, Search } from './allStyles'
import { Button } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const AddStudent = () => {
    return (
        <ContentContainer>
            <ContentWrapper>
                <TopBanner className="d-flex align-center flex-column justify-content-between p-3">
                    <Link to="/Admin/AllPupils" className="mb-2 border-0">
                        <Button variant="danger"> <ArrowBackIosIcon /> Back </Button>
                    </Link>
                    <h3>New all pupils</h3>
                </TopBanner>

            </ContentWrapper>
            
        </ContentContainer>
    )
}

export default AddStudent