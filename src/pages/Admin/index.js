
import { Switch, Route } from "react-router-dom";
import { useState } from 'react'
import SideNav from '../../components/SideNav'
import AddStudent from './AddStudent'
import Dashboard from './Dashboard';
import AllPupils from './AllPupils';
import AllTeachers from './AllTeachers';

const Admin = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const sidebarToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideNav isOpen={isOpen} />
            <Switch>
                <Route exact path="/Admin">
                    <Dashboard sidebarToggle={sidebarToggle} />
                </Route>

                <Route path="/Admin/AllPupils" component={AllPupils} />
                <Route path="/Admin/AddStudent" component={AddStudent} />
                <Route path="/Admin/AllTeachers" component={AllTeachers} />
            </Switch>
        </>
    )
}

export default Admin