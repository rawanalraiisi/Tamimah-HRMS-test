import { useMemo, useState } from 'react';

//MRT Imports
//import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

//Material UI Imports
import { Box, IconButton, ListItemIcon, MenuItem } from '@mui/material';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//Icons Imports
import { AccountCircle, Delete, Edit, Send } from '@mui/icons-material';

//Mock Data
import { data } from './makeData'

import { KTIcon } from '../../../_metronic/helpers'

export const Employee = {
    firstName: '',
    lastName: '',
    employeeID: '',
    phoneNo: '',
    emergencyNo: '',
    dateofBirth: '',
    gender: '',
    maritalStatus: '',
    address: '',
    joiningDate: '',
    mpDate: '',
    totalSalary: '',
    basicPay: '',
    otherAllowances: '',
    jobTitle: '',
    jobNo: '',
    idNo: '',
    passportNo: '',
    emailID: '',
    visaType: '',
    nationality: '',
    comapany: '',
    accessDoorNo: '',
    dept: '',
    exp: '',
    license: '',
    status: '',
    avatar: ''
};

const EmployeeTable = () => {
    const [Employeedata, setData] = useState(data)
    const columns = useMemo(
        () => [
            // {
            //     id: 'Employee', //id used to define `group` column
            //     header: 'Employee',
            //     enablePinning: true,
            //     columns: [
            // {
            //     id: 'employeeID',
            //     accessorKey: 'employeeID', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            //     header: 'Employee ID',
            //     size:200,
            //     enableGrouping: false,
            //     enablePinning: true,
            // },
            {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                id: 'name', //id is still required when using accessorFn instead of accessorKey
                header: 'Name',
                size: 300,
                enableGrouping: false,
                enablePinning: true,
                filterFn: 'multipleFilter',
                muiTableHeadCellProps: {
                    style: {
                        paddingLeft: '1rem'
                    }
                },
                Cell: ({ renderedCellValue, row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            paddingLeft: '1rem',
                        }}
                    >
                        <span>{row.original.employeeID.sub(0, 2)}</span>
                        <img
                            alt="avatar"
                            height={30}
                            src={row.original.avatar
                                ?? 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg'}
                            loading="lazy"
                            style={{ borderRadius: '50%' }}
                        />
                        {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                        <span>{renderedCellValue}</span>
                    </Box>
                ),
            },
            {
                accessorKey: 'emailID',
                enableClickToCopy: true,
                header: 'Email ID',
                size: 300,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorKey: 'gender',
                header: 'Gender',
                size: 150,
                enableGrouping: true,
                enablePinning: false,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 300,
                enableGrouping: false,
                enablePinning: false,
                //ADD HERE (3 liner)
            },
            {
                accessorKey: 'nationality',
                header: 'Nationality',
                size: 200,
                enableGrouping: true,
                enablePinning: false,
            },
            {
                accessorKey: 'maritalStatus',
                header: 'Marital Status',
                size: 200,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorKey: 'idNo', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                header: 'ID Card Number',
                size: 200,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorKey: 'accessDoorNo', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                header: 'Access Door Number',
                size: 200,
                enableGrouping: false,
                enablePinning: false,
            },
            //     ],
            // },

            // {
            //     id: 'PersonalDetails',
            //     header: 'Personal Details',
            //     columns: 
            //     [
            {
                accessorKey: 'phoneNo',
                header: 'Phone Number',
                size: 250,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorKey: 'emergencyNo',
                header: 'Emergency Phone Number',
                size: 250,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorFn: (row) => new Date(row.mpDate), //convert to Date for sorting and filtering
                id: 'dob',
                header: 'Date of Birth',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            //     ],
            // },
            // {
            //     id: 'DocumentDetails', //id used to define `group` column
            //     header: 'Document Details',
            //     columns: [
            {
                accessorKey: 'passportNo',
                header: 'Passport Number',
                size: 200,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorFn: (row) => new Date(row.mpDate), //convert to Date for sorting and filtering
                id: 'dob',
                header: 'Passport Exp Date',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            {
                accessorKey: 'visaType',
                header: 'Visa Type',
                size: 200,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                accessorFn: (row) => new Date(row.mpDate), //convert to Date for sorting and filtering
                id: 'dob',
                header: 'Visa Exp Date',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            // {
            //     accessorKey: 'license',
            //     header: 'License Number',
            //     size: 250,
            //     enableGrouping: false,
            //     enablePinning: false,
            // },
            //     ],
            // },
            // {
            //     id: 'JobDetails',
            //     header: 'Job Details',
            //     columns: 
            //     [
            {
                accessorKey: 'comapany', //hey a simple column for once
                header: 'Place of Work',
                size: 250,
                enableGrouping: true,
                enablePinning: false,
            },
            {
                accessorKey: 'dept', //hey a simple column for once
                header: 'Department',
                size: 250,
                enableGrouping: true,
                enablePinning: false,
            },
            {
                id: 'internalJobTitle',
                accessorKey: 'jobTitle', //hey a simple column for once
                header: 'Internal Job Title',
                size: 250,
                enableGrouping: true,
                enablePinning: false,
            },
            {
                accessorKey: 'jobNo', //hey a simple column for once
                header: 'Job Manpower Number',
                size: 250,
                enableGrouping: false,
                enablePinning: false,
            },
            {
                id: 'manpowerJobTItle',
                accessorKey: 'jobTitle', //hey a simple column for once
                header: 'Job Manpower Title',
                size: 250,
                enableGrouping: true,
                enablePinning: false,
            },
            {
                accessorFn: (row) => new Date(row.mpDate), //convert to Date for sorting and filtering
                id: 'dob',
                header: 'Contract Exp Date',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            {
                accessorFn: (row) => new Date(row.joiningDate), //convert to Date for sorting and filtering
                id: 'startDate',
                size: 200,
                header: 'Tamimah Joining Date',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue ()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            {
                accessorFn: (row) => new Date(row.mpDate), //convert to Date for sorting and filtering
                id: 'mpDate',
                size: 200,
                header: 'Manpower Joining Date',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue ()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            {
                accessorFn: (row) => new Date(row.mpDate), //convert to Date for sorting and filtering
                id: 'dob',
                header: 'RC Exp Date',
                enableGrouping: false,
                enablePinning: false,
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue ()?.toLocaleDate(), //render Date as a ''
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                // Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                // <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //     onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //     }}
                //     slotProps={{
                //         textField: {
                //         helperText: 'Filter Mode: Less Than',
                //         sx: { minWidth: '120px' },
                //         variant: 'standard',
                //         },
                //     }}
                //     value={column.getFilterValue()}
                //     />
                // </LocalizationProvider>
                // ),
            },
            {
                accessorKey: 'totalSalary',
                // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
                filterFn: 'between',
                header: 'Total Salary',
                enableGrouping: false,
                enablePinning: false,
                //custom conditional format and styling
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor:
                                cell.getValue  () < 50_000
                                    ? theme.palette.error.dark
                                    : cell.getValue () >= 50_000 &&
                                        cell.getValue  () < 75_000
                                        ? theme.palette.warning.dark
                                        : theme.palette.success.dark,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {cell.getValue  ()?.toLocale?.('en-US', {
                            style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                        })}
                    </Box>
                ),
            },
            {
                accessorKey: 'basicPay',
                // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
                filterFn: 'between',
                header: 'Basic Salary',
                size: 200,
                enableGrouping: false,
                enablePinning: false,
                //custom conditional format and styling
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor:
                                cell.getValue  () < 50_000
                                    ? theme.palette.error.dark
                                    : cell.getValue  () >= 50_000 &&
                                        cell.getValue  () < 75_000
                                        ? theme.palette.warning.dark
                                        : theme.palette.success.dark,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {cell.getValue  ()?.toLocale?.('en-US', {
                            style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                        })}
                    </Box>
                ),
            },
            {
                accessorKey: 'exp', //hey a simple column for once
                header: 'Current Work Exp',
                size: 100,
                enableGrouping: false,
                enablePinning: false,
            },
            //     ],
            // },
            // {
            //     id: 'others',
            //     header: 'Others',
            //     columns: 
            //     [
            // {
            //     accessorKey: 'otherAllowances', //hey a simple column for once
            //     header: 'Other Allowances',
            //     size: 200,
            //     enableGrouping: false,
            //     enablePinning: false,
            //     //ADD HERE (multiple lines)
            // },
            {
                accessorKey: 'status', //hey a simple column for once
                header: 'Status',
                size: 200,
                enableGrouping: true,
                enablePinning: false,
                filterFn: 'multipleFilter',
                //ADD HERE (multiple lines)
            },
            //     ],
            // }
        ], []);

    return (
        <>
            <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Details</h5>

            <div className={`card`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5 pb-2'>
                    <h3 className='card-title align-items-start flex-column'>
                        {/* <span className='card-label fw-bold fs-3 mb-1'>Employee's Personal Information</span> */}
                        <span className='text-muted mt-1 fw-semibold fs-7'>[{data.length} employees]</span>
                    </h3>

                    <div className='card-toolbar'>
                        <a href='/' className='btn btn-sm btn-primary'>
                            <KTIcon iconName='file-down' className='fs-2' />
                            Export to Excel
                        </a>
                    </div>
                </div>
                {/* end::Header */}
                <div className='card-body'>
                    <MaterialReactTable
                        columns={columns}
                        data={Employeedata}
                        enableDensityToggle={false}
                        enablePinning
                        enableColumnFilters
                        enableColumnOrdering
                        enableRowActions
                        enableGrouping
                        initialState={{ showColumnFilters: false, columnPinning: { left: ['name'] } }}
                        positionToolbarAlertBanner="bottom"
                        // renderDetailPanel={({ row }) => (
                        //     <Box sx={{
                        //         display: 'flex',
                        //         justifyContent: 'space-around',
                        //         alignItems: 'center',}}
                        //     >
                        //     <img
                        //         alt="avatar"
                        //         height={200}
                        //         src={row.original.avatar}
                        //         loading="lazy"
                        //         style={{ borderRadius: '50%' }}
                        //     />
                        //     </Box>
                        // )}

                        filterFns={{
                            dateFilter: (row, columnId, filterValue) => {
                                const filterArray = filterValue.replaceAll(',', ';').split(';')
                                const cellVal = row.getValue  (columnId)
                                const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
                                for (let item of filterArray) {
                                    const itemArray = item.replaceAll(/\s+/g, '#').split('#')
                                    console.log(filterArray, item, itemArray)
                                    if (cellVal.getFullYear().to() === itemArray[itemArray.length - 1])
                    for (let i = 0; i < itemArray.length - 1; i++) {
                                            if (itemArray[i].includes(monthName[cellVal.getMonth()]))
                    return true
                                        }
                                }
                    return false
                            },
                            multipleFilter: (row, columnId, filterValue) => {
                                const filterArray = filterValue.replaceAll(',', ';').split(';')
                    const cellVal = row.getValue < '' > (columnId)
                    for (let item of filterArray) {
                                    if (cellVal.toLocaleLowerCase().includes(item.toLocaleLowerCase()))
                    return true
                                }
                    return false
                            }
                        }}

                    editingMode='row'
                    enableEditing

                    positionActionsColumn='last'
                    renderRowActions={({ row, table }) => [
                        <Box sx={{ justifyContent: 'center' }}>
                            <IconButton
                                onClick={() => table.setEditingRow(row)}
                            >
                                <Edit className='text-success' />
                            </IconButton>
                            <IconButton
                                onClick={() => {
                                    data.splice(row.index, 1); //assuming simple data table
                                    setData([...data]);
                                }}
                            >
                                <Delete className='text-danger' />
                            </IconButton>
                        </Box>
                    ]}

                        // renderTopToolbarCustomActions={({ table }) => {
                        //     const handleDeactivate = () => {
                        //     table.getSelectedRowModel().flatRows.map((row) => {
                        //         alert('deactivating ' + row.getValue('name'));
                        //     });
                        //     };

                        //     const handleActivate = () => {
                        //     table.getSelectedRowModel().flatRows.map((row) => {
                        //         alert('activating ' + row.getValue('name'));
                        //     });
                        //     };

                        //     const handleContact = () => {
                        //     table.getSelectedRowModel().flatRows.map((row) => {
                        //         alert('contact ' + row.getValue('name'));
                        //     });
                        //     };

                        //     return (
                        //     <div style={{ display: 'flex', gap: '0.5rem' }}>
                        //         <Button
                        //         color="error"
                        //         disabled={!table.getIsSomeRowsSelected()}
                        //         onClick={handleDeactivate}
                        //         variant="contained"
                        //         >
                        //         Deactivate
                        //         </Button>
                        //         <Button
                        //         color="success"
                        //         disabled={!table.getIsSomeRowsSelected()}
                        //         onClick={handleActivate}
                        //         variant="contained"
                        //         >
                        //         Activate
                        //         </Button>
                        //         <Button
                        //         color="info"
                        //         disabled={!table.getIsSomeRowsSelected()}
                        //         onClick={handleContact}
                        //         variant="contained"
                        //         >
                        //         Contact
                        //         </Button>
                        //     </div>
                        //     );
                        // }}
                        // enableEditing
                        // editingMode='modal'
                        muiTablePaperProps = {{
                            sx: {
                                backgroundColor: 'var(--bs-card-bg)',
                                    border: 'none',
                    boxShadow: 'none'
                            }
                        }}
                    muiTableProps={{
                        className: 'table',
                        sx: {
                            borderCollapse: 'separate',
                            borderSpacing: '0px 4px',
                        }
                    }}
                    muiTableContainerProps={{
                        className: 'mb-2',
                        sx: {
                            backgroundColor: 'var(--bs-light)',
                            borderRadius: 'var(--bs-card-border-radius)',
                        }
                    }}
                    muiTableHeadRowProps={{
                        className: 'fw-bold bg-light',
                        sx: {
                            boxShadow: 'none'
                        }
                    }}
                    muiTableHeadCellProps={{
                        className: 'px-7 py-3 text-white',
                        sx: {
                            verticalAlign: 'middle',
                            backgroundColor: '#6255a3 !important',
                            outline: '10px',
                            outlineStyle: 'solid',
                            outlineColor: 'var(--bs-light)',
                            outlineOffset: '-8px',
                            borderRadius: '20px',
                            // borderRadius: 'var(--bs-card-border-radius)',
                        }
                    }}
                    muiTableBodyRowProps={{
                        hover: false,
                        sx: {
                            backgroundColor: 'transparent'
                        }
                    }}
                    muiTableBodyCellProps={{
                        className: 'bg-light bg-hover-secondary'
                    }}
                    muiTopToolbarProps={{
                        className: 'card text-light mb-2',
                        sx: {
                            boxShadow: 'none',
                            backgroundColor: '#143983'
                        },
                    }}
                    muiBottomToolbarProps={{
                        className: 'text-light mb-5 d-flex',
                        sx: {
                            boxShadow: 'none',
                            backgroundColor: '#143983',
                            borderRadius: 'var(--bs-card-border-radius)',
                            minHeight: '50px'
                        },
                    }}
                    muiSearchTextFieldProps={{
                        className: 'bg-light text-light text-muted'
                    }}
                    muiTableHeadCellFilterTextFieldProps={{
                        helperText: false,
                        focused: true,
                        inputProps: {
                            className: "text-black",
                        },
                        sx: {
                            color: 'white'
                        }
                    }}
                    muiTableHeadCellColumnActionsButtonProps={{
                        sx: {
                            color: 'black'
                        }
                    }}
                    muiTableHeadCellDragHandleProps={{
                        sx: {
                            color: 'black'
                        }
                    }}
                    icons={{
                        FullscreenIcon: () => (<KTIcon iconName='maximize' className='fs-2 text-white' />),
                        FullscreenExitIcon: () => (<KTIcon iconName='cross-circle' className='fs-2 text-white' />),
                        ViewColumnIcon: () => (<KTIcon iconName='status' className='fs-2 text-white' />),
                        FilterListIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
                        FilterListOffIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
                        SearchIcon: () => (<KTIcon iconName='search-list' className='fs-2 text-white' />),
                        CloseIcon: () => (<KTIcon iconName='cross' className='fs-2 text-black' />),
                    }}
                    muiTablePaginationProps={{
                        className: 'text-white',

                    }}
                    enableGlobalFilter={false}
                    muiToolbarAlertBannerProps={{
                        className: 'text-white',
                        sx: {
                            backgroundColor: '#143983',
                        }
                    }}
                    muiToolbarAlertBannerChipProps={{
                        className: 'text-white'
                    }}
                    />
                </div>
            </div>

        </>
    );
};

export default EmployeeTable;
