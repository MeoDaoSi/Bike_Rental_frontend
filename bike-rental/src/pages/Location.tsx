// import React from 'react'
import {NavLink} from "react-router-dom";

export const Location = () => {
    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i className=''></i>
                    <span className='logo_name1'>Bike</span><span className="logo_name">Book</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink className="dashlinks" to="/dashboard">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="allLinks_name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/addbikes">
                        <i className="fa-sharp fa-solid fa-square-plus"></i>
                        <span className="allLinks_name">Add Bikes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/getrentbikesforadmin">
                        <i className="fa-sharp fa-solid fa-motorcycle"></i>
                        <span className="allLinks_name">Available Rent Bikes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/rentbikesreports">
                        <i className="fa-solid fa-sack-dollar"></i>
                        <span className="allLinks_name">Rent Bikes Income</span>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink className="dashlinks" to="/availableusers">
                    <i className="fa-solid fa-users"></i>
                        <span className="allLinks_name">Available Users</span>
                    </NavLink>
                    </li>
                </ul>

                <div className="logoutbtnDashDiv">
                    {/* <Loginbutton/> */}
                </div>
            </div>

            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        
                        <span className="dashboard">Dashboard</span>
                    </div>
                    
                    <div className="profile-details">
                        <span className="admin_name">Admin</span>
                    </div>
                </nav>
                
                <div className="salecartableDiv" >

                    <h1 className="heading"><span>Danh Sách Cửa Hàng</span></h1>

                    <div className='flex'>
                        
                        <form className="max-w-md w-96 mr-2 mb-2"> 
                            <div className="relative mt-4">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input type="search" id="default-search" className="w-full p-4 ps-10 text-sm text-gray-900 border rounded" placeholder="Search" required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 rounded text-sm px-4 py-2">Search</button>
                            </div>
                        </form>
                        <NavLink className="btn mb-2" to="add">Thêm</NavLink>
                    </div>

                    <table className = "salecartable">
                        <thead>
                            <tr>
                                <th >BRAND </th>
                                <th >MODEL </th>
                                <th >RENT </th>
                                <th >PRICE </th>
                                <th >AVAILABILITY </th>
                                <th >DELETE </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr>
                                <td >ssss</td>
                                <td >ssss</td>
                                <td >ssss</td>
                                <td > Taka</td>
                                <td > hours</td>
                                <td ><button className="btn"><i className="fa fa-trash"></i></button></td>
                            </tr> 
                        </tbody>
                    
                    </table>
                </div>
            </section>
        </>
    )
}
