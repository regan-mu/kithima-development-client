"use client";
import Header from "@/app/components/header/header";
import axiosInstance from "@/app/utils/axiosConfig";
import { useEffect, useState } from "react";

const Page = ({params}) => {
    const [memberInfo, setMemberInfo] = useState({
        first_name: "",
        last_name: "",
        member_number: "",
        contributions: []
    });
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/member/${params?.member_number}`);
                setMemberInfo(response?.data);
            } catch (error) {
                setError(error?.response?.data?.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="h-screen w-full flex flex-col gap-2">
            <Header />
            <div className="w-full h-full flex items-center justify-center flex-col relative">
                {error && <div className="text-red-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-red-200 p-1 absolute top-0 right-0">{error}</div>}
                <div className="w-96 h-80 text-white font-light flex items-center text-center flex-col justify-center rounded-md shadow-lg bg-secondary">
                    <div className="w-full h-1/3 relative">
                        <div className="w-32 flex justify-center items-center text-primary h-32 z-30 bg-background rounded-full border absolute shadow-md top-1/2 left-1/2 transform -translate-x-1/2">
                            <h1 className="font-extrabold text-4xl">{memberInfo?.first_name[0]}</h1>
                        </div>
                    </div>
                    <div className="w-full h-2/3 text-primary bg-white relative">
                        <div className="absolute h-max bottom-10 left-1/2 transform -translate-x-1/2 text-left">
                            <h3 className="font-bold text-xl">{memberInfo?.first_name} {memberInfo?.last_name}</h3>
                            <p>Member Number: {memberInfo?.member_number}</p>
                            <p>Contributions: {memberInfo?.contributions?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;