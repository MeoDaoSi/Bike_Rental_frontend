import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { clientApi } from '../apis/clientApi';

import { useParams } from 'react-router-dom';

type BikeData = {
    _id: string,
    location: string,
    brand: string,
    model: string,
    year: string,
    color: string,
    license_plate: string,
    status: string,
    type: string,
    // QR_code: string,
}

// type LocationFormProps = LocationData & {
//     updateFields: (fields: Partial<LocationData>) => void
// }

const INITIAL_DATA: BikeData = {
    _id: '',
    location: '',
    brand: '',
    model: '',
    year: '',
    color: '',
    license_plate: '',
    status: 'AVAILABLE',
    type: '',
    // QR_code: '',
}

export const ListBike = () => {

    const params = useParams();
    const [bike, setBike] = useState(INITIAL_DATA);
    const [q, setQ] = useState('');
    const [bikes, setBikes] = useState([
        INITIAL_DATA
    ]);

    const updateFields = (newFields: Partial<BikeData>) => {
        setBike(prev => ({ ...prev, ...newFields }))
    }

    const updateField = (newField: string) => {
        setQ(newField);
    }

    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/bike', {
                ...bike,
                location: params.location_id
            });
            console.log(res);
            alert('Thêm Thành Công!')
        } catch (error) {
            alert('Error');
        }
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/bike`);
                console.log(res);
                setBikes(res.data);

            } catch (error) {

            }
        }
        fetch();
    }, [])

    console.log(q);



    return (
        <>
            {/* -----------------------Side Bar-------------------------- */}
            <div className="sidebar">
                <a href="/admin">
                    <div className="logo-details border-b">
                        <i className=''></i>
                        <span className='logo_name1'>Bike</span><span className="logo_name">Book</span>
                    </div>
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="/dashboard" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-table-columns text-white"></i>
                            <span className="allLinks_name">Dashboard</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/location" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-store text-white"></i>
                                <span className="allLinks_name">Chi Nhánh</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/user" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-users text-white"></i>
                                <span className="allLinks_name">Người Dùng</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/contract" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-file-contract text-white"></i>
                                <span className="allLinks_name">Hợp Đồng</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {/* -----------------------Side Bar-------------------------- */}

            <section className="home-section">
                <h1 className="heading"><span>Danh Sách Xe</span></h1>
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
                                <button type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2">
                                    <i className="fa-solid fa-plus mr-1"></i>
                                    Thêm
                                </button>
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2" type="button">
                                        <i className="fa-solid fa-filter mr-1"></i>
                                        Filter
                                    </button>
                                    <div id="filterDropdown" className="z-10 hidden p-2 w-48 rounded bg-white border">
                                        <h5 className="m-2 text-sm font-medium border-b">Danh Mục Xe</h5>
                                        <ul className=''>
                                            <>
                                                <li className='flex items-center'>
                                                    <input
                                                        id="motorcycle"
                                                        type="checkbox"
                                                        value="MOTORCYCLE"
                                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                                        onChange={(e) => { updateField(e.target.value) }}
                                                    />
                                                    <label htmlFor="motorcycle" className="ml-2 text-sm font-medium">Xe Máy (56)</label>
                                                </li>
                                                <li className='flex items-center'>
                                                    <input
                                                        id="bikecycle"
                                                        type="checkbox"
                                                        value="BIKECYCLE"
                                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                                        onChange={(e) => { updateField(e.target.value) }}
                                                    />
                                                    <label htmlFor="bikecycle" className="ml-2 text-sm font-medium">Xe Đạp (56)</label>
                                                </li>
                                            </>

                                        </ul>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">STT</th>
                                        <th scope="col" className="px-4 py-3">Hãng Xe</th>
                                        <th scope="col" className="px-4 py-3">Mẫu Mã</th>
                                        <th scope="col" className="px-4 py-3">Năm Sản Xuất</th>
                                        <th scope="col" className="px-4 py-3">Màu Sắc</th>
                                        <th scope="col" className="px-4 py-3">Biển Số Xe</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">Loại Xe</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        bikes.map((bike, index) =>
                                        (
                                            <tr className="border-b dark:border-gray-700" key={index + 1}>
                                                <td className="px-4 py-3">{index + 1}</td>
                                                <td className="px-4 py-3">{bike.brand}</td>
                                                <td className="px-4 py-3">{bike.model}</td>
                                                <td className="px-4 py-3">{bike.year}</td>
                                                <td className="px-4 py-3">{bike.color}</td>
                                                <td className="px-4 py-3">{bike.license_plate}</td>
                                                <td className="px-4 py-3">{bike.status}</td>
                                                <td className="px-4 py-3">{bike.type}</td>
                                                <td className="px-4 py-3 flex items-center justify-end">
                                                    <NavLink className='border rounded p-2' to={`${bike._id}`}>Chi tiết</NavLink>

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
                            <h3 className="text-lg font-semibold">Thêm Xe</h3>
                            <button type="button" className="text-red-700" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={handleAddSubmit}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Hãng xe</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Hãng xe"
                                        required
                                        onChange={(e) => { updateFields({ brand: e.target.value }) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="model" className="block mb-2 text-sm font-medium">Mẫu Mã</label>
                                    <input
                                        type="text"
                                        name="model"
                                        id="model"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Mẫu Mã"
                                        required
                                        onChange={(e) => { updateFields({ model: e.target.value }) }}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="year" className="block mb-2 text-sm font-medium">Năm Sản Xuất</label>
                                    <input
                                        type="text"
                                        name="year"
                                        id="year"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Năm Sản Xuất"
                                        required
                                        onChange={(e) => { updateFields({ year: e.target.value }) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="color" className="block mb-2 text-sm font-medium">Màu Sắc</label>
                                    <select
                                        name="color"
                                        id="color"
                                        required
                                        onChange={(e) => { updateFields({ color: e.target.value }) }}
                                        className="border rounded-lg block p-2.5"
                                    >
                                        <option value="RED">Đỏ</option>
                                        <option value="BLACK">Đen</option>
                                        <option value="WHITE">Trắng</option>
                                        <option value="BLUE">Xanh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="license_plate" className="block mb-2 text-sm font-medium">Biển số Xe</label>
                                    <input
                                        type="text"
                                        name="license_plate"
                                        id="license_plate"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Biển số Xe"
                                        required
                                        onChange={(e) => { updateFields({ license_plate: e.target.value }) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="type" className="block mb-2 text-sm font-medium">Loại Xe</label>
                                    <select
                                        name="type"
                                        id="type"
                                        required
                                        onChange={(e) => { updateFields({ type: e.target.value }) }}
                                        className="border rounded-lg block p-2.5"
                                    >
                                        <option value="MOTORCYCLE">Xe Máy</option>
                                        <option value="BICYCLE">Xe Đạp</option>
                                    </select>
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
