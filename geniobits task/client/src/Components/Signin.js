import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Signin(){

    localStorage.clear();

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        await axios.post("http://localhost:3002/Signin",datastring,config)
              .then(function(res){
                if(res.data.status === 'syntaxerror'){
                    alert('Contact Admin');
                    window.location.reload();
                }
                else if(res.data.status === 'success'){
                    let id = res.data.id;
                    let role = res.data.role;
                    if(role === 'ADMIN'){
                        alert(role);
                        localStorage.setItem('empid',id);
                        window.location.href="/Admin_dash";
                    }
                    else if(role === 'STAFF'){
                        alert(role);
                        localStorage.setItem('empid',id);
                        window.location.href="/Staff_dash";
                    }
                    else if(role === 'STUDENT'){
                        alert(role);
                        localStorage.setItem('empid',id);
                        window.location.href="./Student_dash";
                    }
                }
                else if(res.data.status === 'Invalid_details'){
                    alert('Invalid user details');
                    window.location.reload();
                }
                else{
                    alert('Contact Admin');
                    window.location.reload();
                }
              })
              .catch(function(error){
                alert(error);
                window.location.reload();
              })

    }

    return(
        // <>
        // <div className="container-fluid">
        //     <div className="row mt-5">
        //         <div className="col-lg-4">&nbsp;</div>
        //         <div className="col-lg-4">
        //         <form onSubmit={handlesubmit}>
        //             <div className="table-responsive">
        //             <table width="100%" className="table table-bordered">
        //                 <thead>
        //                     <tr>
        //                         <th colspan="2">Sign-In Page</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <tr>
        //                         <td>Username</td>
        //                         <td>
        //                             <input type="text" name="username" id="username" className="form-control"/>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td>Password</td>
        //                         <td>
        //                             <input type="password" name="password" id="password" className="form-control"/>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td>
        //                             <Link to="/Signup">
        //                                 <button type="button" name="data_send" id="data_send" value="send" className="btn btn-danger">Sign-up</button>
        //                             </Link>
        //                         </td>
        //                         <td>
        //                             <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success">Sign-in</button>
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //             </div>
        //         </form>
        //         </div>
        //         <div className="col-lg-4">&nbsp;</div>
        //     </div>
        // </div>
        // </>

        <>
         <div className='container-fluid'>
            <form onSubmit={handlesubmit}>
            <div className='row mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4 text-center text-secondary'><h2>Sign-In Page</h2></div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'><label>Username</label></div>
                <div className='col-lg-2'>
                   <input type="text" name="username" id="username" className="form-control"/>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'><label>Password</label></div>
                <div className='col-lg-2'>
                   <input type="password" name="password" id="password" className="form-control"/>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-5'>&nbsp;</div>
                
                <div className='col-lg-2'>
                   <Link to="/Signup">
                       <button type="button" name="data_send" id="data_send" value="send" className="btn btn-danger">Sign-up</button>
                   </Link>
                  <Link to="/receipe"> <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success ml-1">Sign-in</button></Link>
                </div>
                
                <div className='col-lg-5'>&nbsp;</div> 
            </div>

            </form>
         </div>
        </>
    );
}