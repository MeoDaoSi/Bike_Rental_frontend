// import React from 'react'
import { NavLink } from "react-router-dom";
// import { clientApi } from '../apis/clientApi';
import { useState, useEffect } from 'react';
import axios from "axios";
import { clientApi } from '../apis/clientApi';

type LocationData = {
    _id: string,
    address: string,
}

// type LocationFormProps = LocationData & {
//     updateFields: (fields: Partial<LocationData>) => void
// }

const INITIAL_DATA: LocationData = {
    _id: '',
    address: '',
}

export const Location = () => {

    const [location, setLocation] = useState(INITIAL_DATA);
    const [locations, setLocations] = useState([
        INITIAL_DATA
    ]);

    const updateFields = (newFields: Partial<LocationData>) => {
        setLocation(prev => ({ ...prev, ...newFields }))
    }

    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/location', location);
            console.log(res);
            alert('Thêm Thành Công!')
        } catch (error) {
            alert('Error');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/location');
                // console.log(res);
                setLocations(res.data);

            } catch (error) {
                console.log('Error');
            }
        }
        fetchData();
    }, []);


    return (
        <>
            {/* -----------------------Side Bar-------------------------- */}
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
            {/* -----------------------Side Bar-------------------------- */}

            <section className="mt-28 home-section">
                <h1 className="heading"><span>Danh Sách Cửa Hàng</span></h1>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* <!-- Start coding here --> */}
                    <div className="bg-white rounded">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <input type="text" id="simple-search" className="border text-sm rounded-lg block w-full pl-10 p-2" placeholder="Search" required />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <button type="button" id="createProductModalButton" data-modal-toggle="createProductModal" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2">
                                    <i className="fa-solid fa-plus mr-1"></i>
                                    Thêm
                                </button>
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2" type="button">
                                        <i className="fa-solid fa-filter mr-1"></i>
                                        Filter
                                    </button>
                                    <div id="filterDropdown" className="z-10 hidden w-56 rounded bg-gray-500">
                                        <h1>hello</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">STT</th>
                                        <th scope="col" className="px-4 py-3">Địa Chỉ</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        locations.map((location, index) =>
                                        (
                                            <tr className="border-b dark:border-gray-700" key={index + 1}>
                                                <td className="px-4 py-3">{index + 1}</td>
                                                <td className="px-4 py-3">{location.address}</td>
                                                <td className="px-4 py-3 flex items-center justify-end">
                                                    <NavLink className='border rounded p-2' to={`${location._id}`}>Chi tiết</NavLink>

                                                </td>

                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Previous</span>
                                        Icon
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Next</span>
                                        Icon
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </section>
            {/* <!-- End block --> */}
            {/* <!-- Create modal --> */}
            <div id="createProductModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b">
                            <h3 className="text-lg font-semibold">Thêm Địa Chỉ</h3>
                            <button type="button" className="text-red-700" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={handleAddSubmit}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium">Địa Chỉ</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập địa chỉ"
                                        required
                                        onChange={(e) => { updateFields({ address: e.target.value }) }}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="border bg-green-500 font-medium rounded-lg text-sm px-4 py-2">
                                <i className="fa-solid fa-plus mr-1"></i>
                                Thêm Mới
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
