import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    loading,
    sx
}) => {
    const [pageSize, setPageSize] = useState(2);

    return (
        <DataGrid 
            rows={rows}
            columns={columns}
            loading={loading}
            sx={sx}
            checkboxSelection
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: pageSize,
                  },
                },
              }}
              disableRowSelectionOnClick
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pageSizeOptions={[2, 5, 10]}
        />
    );
};

export default DataTable