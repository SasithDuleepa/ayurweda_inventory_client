import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AdminRoutes = () => {
    let loginStatus = sessionStorage.getItem('login');
    let user = sessionStorage.getItem('user');
    // let user_id = sessionStorage.getItem('id');
    const user_id = 'USER-87173621';

    let status = false

    const[role,setRole] = useState({})



    useEffect(() => {
        const GetRoles = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/userRoles/modules/${user_id}`);
                // console.log(res.data);

                const hasPosRole =await res.data.find(role => role.role_name === 'PS');
                setRole(hasPosRole)


            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
        GetRoles();
        console.log(role);
    }, []);

    // Add a return statement

    
    

    // useEffect(() => {
    //     const hasPosRole = role.find(role => role.role_name === 'POS');
    //     console.log(role);
    //     status = hasPosRole;

    // },[role])
    return (
        <div>



            {role?<Outlet /> : <Navigate to="/login" />}
        </div>
    );
};

export default AdminRoutes;
