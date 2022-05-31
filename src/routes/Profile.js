import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = ({token}) => {
    let navigate = useNavigate();
    useEffect(() => {
        fetch('https://strangers-things.herokuapp.com/api/2202-FTB-HY-WEB-PT/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            }).then(response => response.json())
            .then(result => {
                console.log(result);
                if(!result.success) {
                    Navigate("../login", { replace: true });
                }
            })
            .catch(console.error);
        }, [])
            return(
        <main>
            <h1>Profile</h1>
        </main>
    )
}


export default Profile;