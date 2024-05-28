"use client";
import DataTable from "@/app/components/tables/DataTable";
import Header from "@/app/components/header/header";
import { useContext, useEffect, useState } from "react";
import { ContextManager } from "@/app/context/appContext";
import ContributionForm from "@/app/components/forms/addContribution";
import { contributionColumns } from "@/app/components/tables/contributionsColumns";
import axiosInstance from "@/app/utils/axiosConfig";


const Page = ({params}) => {
    const {addContribution, setAddContribution, addEventTrigger} = useContext(ContextManager);
    const [contributionsData, setContributionsData] = useState([]);
    const [totalContributions, setTotalContributions] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/event/${params.id}`);
                const contributions = response?.data?.contributions
                setContributionsData(contributions);
                setTotalContributions(() => {
                    return contributions.reduce((sum, item) => sum + item.amount, 0);
                })
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
                        <h1 className="font-semibold text-lg">Kithima Kirithiria Test Event</h1>
                        <p>12/12/2024</p>
                        <h2 className="font-semibold">Total Contributions: {totalContributions}</h2>
                    </div>
                    <button onClick={() => {setAddContribution(true)}} className="px-6 py-2 rounded-full bg-secondary text-white">Add Contribution</button>
                    {
                        addContribution && <div className="absolute -top-1 -right-1 z-50 w-full lg:w-auto">
                            <ContributionForm eventID={params?.id} />
                        </div>
                    }
                </div>
                <div>
                    <DataTable rows={contributionsData} columns={contributionColumns} />
                </div>
            </div>
        </div>
    )
}

export default Page;