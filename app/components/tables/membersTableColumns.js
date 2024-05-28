import Link from "next/link";
const membersColumns = [
    {
        field: 'id',
        headerName: 'ID',
        headerAlign: "center",
        width: 75,
        editable: false,
    },
    {
        field: 'join_date',
        headerName: 'Date',
        headerAlign: "center",
        width: 150,
        editable: false,
    },
    {
        field: 'first_name',
        headerName: 'First Name',
        headerAlign: "center",
        width: 150,
        editable: false,
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
        headerAlign: "center",
        width: 150,
        editable: false,
    },
    {
        field: 'member_number',
        headerName: 'Member Number',
        headerAlign: "center",
        width: 150,
        editable: false,
    },
    {
        field: 'mobile_number',
        headerName: 'Phone Number',
        headerAlign: "center",
        width: 200,
        editable: false,
    },
    {
        field: 'links',
        headerName: 'Link',
        headerAlign: "center",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cursor-pointer w-full h-full flex justify-center items-center gap-5" >
                    <Link href={`/members/${params?.row?.member_number}`}>Open</Link>
                </div>
            )
        }
    }
]

export default membersColumns;