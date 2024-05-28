import Link from "next/link";
const eventColumns = [
    {
        field: 'public_id',
        headerName: 'ID',
        headerAlign: "center",
        width: 200,
        editable: false,
    },
    {
        field: 'created_at',
        headerName: 'Date',
        headerAlign: "center",
        width: 250,
        editable: false,
    },
    {
        field: 'title',
        headerName: 'Title',
        headerAlign: "center",
        width: 350,
        editable: false,
    },
    {
        field: 'links',
        headerName: 'Link',
        headerAlign: "center",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="cursor-pointer w-full h-full flex justify-center items-center gap-5" >
                    <Link href={`/events/${params?.row?.id}`}>Open</Link>
                </div>
            )
        }
    }
]

export default eventColumns;