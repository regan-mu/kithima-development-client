"use client";
import Header from "../components/header/header";
import AddMember from "../components/forms/addMember";
import { useContext, useEffect, useState } from "react";
import { ContextManager } from "../context/appContext";
import axiosInstance from "../utils/axiosConfig";
import DataTable from "../components/tables/DataTable";
import membersColumns from "../components/tables/membersTableColumns";


const Page = () => {
    const {addMember, setAddMember, addEventTrigger} = useContext(ContextManager);
    const [membersData, setMembersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/members");
                setMembersData(response?.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [addEventTrigger]);

    return (
        <div className="flex flex-col gap-5 min-h-screen">
            <Header />
            <div className="px-5 py-5 flex flex-col gap-8 lg:gap-5 lg:px-20">
                <div className="w-full h-auto flex flex-col gap-3 justify-between relative lg:items-center lg:flex-row">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-lg">Kithima Kirithiria Members</h1>
                    </div>
                    <button onClick={() => {setAddMember(true)}} className="px-6 py-2 rounded-full bg-secondary text-white">Add Member</button>
                    {
                        addMember && <div className="absolute -top-1 -right-1 z-50 w-full lg:w-auto">
                            <AddMember />
                        </div>
                    }
                </div>
                <div>
                    <DataTable rows={membersData} columns={membersColumns} />
                </div>
            </div>
        </div>
    )
}

export default Page;