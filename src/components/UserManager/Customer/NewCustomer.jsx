import React, { useState } from "react";
import { FaAngleRight, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { fetchCreateCustomers } from '../../../services/customerService';

const NewCustomer = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [formData, setFormData] = useState({
        type: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        status: "",
    });

    // Xử lý thay đổi input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Dữ liệu gửi đi:", formData);
        try {
            const newCustomer = await fetchCreateCustomers(formData);
            setCustomers([...customers, newCustomer]); // Cập nhật danh sách khách hàng
            alert("Tạo khách hàng thành công!");
        } catch (error) {
            console.error("Lỗi khi tạo khách hàng:", error);
        }
    };

    return (
        <div className="p-2">
            <div className="flex items-center gap-3">
                <div className="flex gap-5">
                    <FaUsers className="w-8 h-8" />
                    <FaAngleRight className="w-8 h-8" />
                    <Link
                        to="/usermanager/customer"
                        className="text-2xl font-semibold cursor-pointer hover:underline"
                    >
                        Customer Management
                    </Link>
                </div>
                <div className="flex gap-2">
                    <FaAngleRight className="w-8 h-8" />
                    <p className="text-2xl font-semibold">New Customer</p>
                </div>
            </div>

            <h1 className="mt-10 text-2xl font-medium text-center">
                Customer Information
            </h1>
            <form
                onSubmit={handleSubmit}
                className="mx-auto font-semibold h-[600px] p-12 space-y-5 text-lg max-w-[900px]"
            >
                {/* Type */}
                <div className="flex items-center">
                    <label className="w-1/4">Type(*)</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    >
                        <option value="">Select Type</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Small Business">Small Business</option>
                    </select>
                </div>

                {/* Name */}
                <div className="flex items-center">
                    <label className="w-1/4">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    />
                </div>

                {/* Email */}
                <div className="flex items-center">
                    <label className="w-1/4">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    />
                </div>

                {/* Password */}
                <div className="relative flex items-center">
                    <label className="w-1/4">Password</label>
                    <div className="w-full max-w-[500px] relative">
                        <input
                            type={isShowPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 pr-10 bg-gray-300"
                            placeholder="Enter password..."
                        />
                        <div
                            className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? (
                                <PiEye className="w-6 h-6" />
                            ) : (
                                <PiEyeSlash className="w-6 h-6" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                    <label className="w-1/4">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    />
                </div>

                {/* Address */}
                <div className="flex items-center">
                    <label className="w-1/4">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    />
                </div>
                {/* Row 8: Status */}
                <div className='flex items-center'>
                    <label className='w-1/4'>Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                {/* Submit */}
                <div className="flex items-center justify-center mt-10 mx-auto bg-[#E1A325] p-4 w-[150px] h-[50px] rounded-full">
                    <button type="submit" className="text-white cursor-pointer">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewCustomer;
