import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { ContextManager } from "@/app/context/appContext";
import axiosInstance from "@/app/utils/axiosConfig";
import { addContribution } from "@/app/utils/requests";

const ContributionForm = ({eventID}) => {
    const {setAddContribution, setAddEventTrigger} = useContext(ContextManager);
    const [selectedMember, setSelectedMember] = useState(null);
    const [amount, setAmount] = useState('');
    const [members, setMembers] = useState([]);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/members");
        const memberOptions = response.data.map(member => ({
          label: `${member.first_name} ${member.last_name} - ${member.member_number}`,
          value: member.id,
        }));
        setMembers(memberOptions);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
        event_id: eventID,
        member_id: selectedMember?.value,
        amount: amount
    }
    const response = await addContribution(data);
    if (response.status === 200) {
      setSuccess("Contribution added successfully");
      setAddEventTrigger(prev => !prev);
      setAmount('');
      setSelectedMember(null)
      setTimeout(() => {
          setSuccess("");
      }, 2000);
      return
    }

    if (response?.response?.status === 403){
      setError("Login to perform this action");
      return
    } else if(response?.response?.status === 400) {
      setError(response?.response?.data)
    } else {
      setError("Failed! Please try again");
    }

  };

  return (
    <div className="p-8 w-full h-auto rounded-md bg-white flex flex-col gap-3 lg:w-96">
      {success && <p className="text-green-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-green-200">{success}</p>}
      {error && <p className="text-red-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-red-200 p-1">{error}</p>}
      <p className="font-semibold">Add Contributions</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="member" className="block text-gray-700 mb-2">Member:</label>
          <Select
            id="member"
            options={members}
            value={selectedMember}
            onChange={setSelectedMember}
            placeholder="Select Member"
            isSearchable
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 mb-2">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full h-10 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
            <button type="button" onClick={() => {setAddContribution(false)}} className="border w-full rounded-md">Cancel</button>
            <button type="submit" className="text-white bg-secondary rounded-md w-full py-2">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ContributionForm;
