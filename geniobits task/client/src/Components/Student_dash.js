import {Link} from 'react-router-dom';

export default function Student_dash(){
    let id = localStorage.getItem('empid');
    return(
        <>
        <p>{id}</p>
        <Link to="/">
            Logout
        </Link>
        </>
    )
}