import { useContext, useState } from "react";
import { ContextManager } from "@/app/context/appContext";
import { validatePhoneNumber } from "@/app/utils/validatePhoneNumber";
import { addMember } from "@/app/utils/requests";

const AddMember = () => {
    const {setAddMember, setAddEventTrigger} = useContext(ContextManager);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        member_number: "",
        mobile_number: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetFields = () => {
        setFormData({
            first_name: "",
            last_name: "",
            member_number: "",
            mobile_number: ""
        });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setError("");
        setFormData(prev => {return {...prev, [name]: value}});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePhoneNumber(formData.mobile_number)) {
            setError("Invalid Phone Number");
            return;
        }

        const response = await addMember(formData);

        if (response.status === 201) {
            setSuccess("Member added successfully");
            setAddEventTrigger(prev => !prev);
            resetFields();
            setTimeout(() => {
                setSuccess("");
            }, 2000);
            return
        }

        const errors = response?.response?.data;
        if (errors?.member_number) {
            setError(errors?.member_number[0]);
            return;
        } else if (errors?.mobile_number) {
            setError(errors?.mobile_number[0]);
            return;
        };
        setError("Failed! Try again later");

    }

    return (
        <form className="w-full h-auto bg-white p-3 rounded-md flex flex-col gap-5 lg:w-96" onSubmit={handleSubmit}>
            {error && <p className="text-red-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-red-200 p-1">{error}</p>}
            {success && <p className="text-green-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-green-200">{success}</p>}
            <p>Add Member</p>
            <input className="outline-none w-full h-14 border rounded-sm px-5" onChange={handleChange} value={formData.first_name} name="first_name" type="text" required placeholder="First Name" />
            <input className="outline-none w-full h-14 border rounded-sm px-5" onChange={handleChange} value={formData.last_name} name="last_name" type="text" required placeholder="Last Name" />
            <input className="outline-none w-full h-14 border rounded-sm px-5" onChange={handleChange} value={formData.member_number} name="member_number" type="number" required placeholder="Member Number" />
            <input className="outline-none w-full h-14 border rounded-sm px-5" onChange={handleChange} value={formData.mobile_number} name="mobile_number" type="tel" required placeholder="Phone Number" />
            <div className="flex gap-2">
                <button onClick={() => {setAddMember(false)}} type="button" className="border w-full rounded-md">Close</button>
                <button className="text-white bg-secondary rounded-md w-full py-2">Create</button>
            </div>
            
        </form>
    )
}

export default AddMember;