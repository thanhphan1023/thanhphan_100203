import React, { useState } from "react";
import { FaAngleRight, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const NewEmployee = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        position: "",
        status: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newEmployee = await fetchCreateEmployee(formData);
            setEmployees([...employees, newEmployee]);
            alert("Tạo nhân viên thành công!");
        } catch (error) {
            console.error("Lỗi khi tạo nhân viên:", error);
        }
    };

    return (
        <div className="p-2">
            <div className="flex items-center gap-3">
                <div className="flex gap-5">
                    <FaUsers className="w-8 h-8" />
                    <FaAngleRight className="w-8 h-8" />
                    <Link
                        to="/usermanager/employee"
                        className="text-2xl font-semibold cursor-pointer hover:underline"
                    >
                        Employee Management
                    </Link>
                </div>
                <div className="flex gap-2">
                    <FaAngleRight className="w-8 h-8" />
                    <p className="text-2xl font-semibold">New Employee</p>
                </div>
            </div>

            <h1 className="mt-10 text-2xl font-medium text-center">
                Employee Information
            </h1>
            <form
                onSubmit={handleSubmit}
                className="mx-auto font-semibold h-[600px] p-12 space-y-5 text-lg max-w-[900px]"
            >
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
                {/* Address */}
                <div className="flex items-center">
                    <label className="w-1/4">Member since</label>
                    <input
                        type="date"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    />
                </div>

                {/* Position */}
                <div className='flex items-center'>
                    <label className='w-1/4'>Role</label>
                    <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full max-w-[500px] p-2 bg-gray-300"
                    >
                        <option value="">Select Role</option>
                        <option value="Manager">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Staff">Staff</option>
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

export default NewEmployee;
