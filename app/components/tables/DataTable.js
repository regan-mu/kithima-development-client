import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const DataTable = ({rows, columns}) => {
    return (
        <section className="data__grid text-white border-none">
            <Box sx={{"&": { height: "100%", width: '100%'}}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableColumnSelector
                    disableDensitySelector
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 8,
                        },
                    },
                    }}
                    showCellVerticalBorder={true}
                    pageSizeOptions={[8]}
                    checkboxSelection 
                    disableRowSelectionOnClick
                    slots={{ toolbar: GridToolbar, 
                    }}
                    slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },  
                    },
                    }}
                />
            </Box>
        </section>
    )
}

export default DataTable;