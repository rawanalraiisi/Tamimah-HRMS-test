import { useMemo, FC, useState } from 'react';

//MRT Imports
//import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

//Material UI Imports
import { Autocomplete, Box, IconButton, TextField } from '@mui/material';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//Mock Data
import { data } from './makeData';

import { KTIcon } from '../../../_metronic/helpers'
import { Delete, Edit } from '@mui/icons-material';

export const PayrollDetails = {
    employeeName: '',
    totalSalary: '',
    basicSalary: '',
    mpStartDate: '',
    mpEndDate: '',
    overtimeAllowance: '',
    appraisal: '',
    deductionType: '',
    deductionAmt: '',
    housing: '',
    transport: '',
    electricity: '',
    water: '',
    costOfLeaving: '',
    motivational: '',
    other: '',
    gratuity: '',
    incentives: ''

};

const PayrollTable = () => {
    const [recievedData, setData] = useState(data)
    const yearOptions = ['2020', '2021', '2022', '2023', '2024']
    const MonthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const nowDate = new Date()
    const [month, setMonth] = useState(nowDate.getMonth())
    const [year, setYear] = useState(nowDate.getFullYear())
    const columns = useMemo(
        () => [
            // {
            //     id: 'details', //id used to define `group` column
            //     header: 'Name',
            //     columns: [
            {
                accessorFn: (row) => `${row.employeeName}`, //accessorFn used to join multiple data into a single cell
                id: 'name',
                header: 'Employee Name',
                size: 200,
                filterFn: 'multipleFilter',
                enablePinning: true,
                muiTableHeadCellProps: {
                    style: {
                        paddingLeft: '1rem'
                    }
                },
                muiTableBodyCellProps: {
                    style: {
                        paddingLeft: '1rem'
                    }
                }
            },
            {
                accessorFn: (row) => new Date(row.mpStartDate), //convert to Date for sorting and filtering
                id: 'StartDate',
                header: 'Manpower Start Date',
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                size: 200,
                enablePinning: false,
                Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Manpower</div>
                            <div className='th'>Start Date</div>
                        </div>
                    )
                }
            },
            {
                accessorFn: (row) => new Date(row.mpEndDate), //convert to Date for sorting and filtering
                id: 'EndDate',
                header: 'Manpower End Date',
                filterFn: 'dateFilter',
                sortingFn: 'datetime',
                size: 200,
                enablePinning: false,
                Cell: ({ cell }) => cell.getValue?.toLocaleDateString(), //render Date as a string
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Manpower</div>
                            <div className='th'>End Date</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'totalSalary',
                filterFn: 'between',
                header: 'Total Salary',
                enablePinning: false,
                //custom conditional format and styling
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor:
                                cell.getValue() < 300
                                    ? theme.palette.error.dark
                                    : cell.getValue() >= 300 &&
                                        cell.getValue() < 600
                                        ? theme.palette.warning.dark
                                        : theme.palette.success.dark,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {cell.getValu()?.toLocaleString?.('en-US', {
                            style: 'currency',
                            currency: 'OMR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                    </Box>
                ),
            },
            {
                accessorKey: 'basicSalary',
                filterFn: 'between',
                header: 'Basic Salary',
                enablePinning: false,
                //custom conditional format and styling
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor:
                                cell.getValue() < 300
                                    ? theme.palette.error.dark
                                    : cell.getValue() >= 300 &&
                                        cell.getValue() < 600
                                        ? theme.palette.warning.dark
                                        : theme.palette.success.dark,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {cell.getValue()?.toLocaleString?.('en-US', {
                            style: 'currency',
                            currency: 'OMR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                    </Box>
                ),
            },
            {
                accessorKey: 'housing',
                header: 'Housing Allowance',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Housing</div>
                            <div className='th'>Allowance</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'transport',
                header: 'Transport Allowance',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Transport</div>
                            <div className='th'>Allowance</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'electricity',
                header: 'Electricity Allowance',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Electricity</div>
                            <div className='th'>Allowance</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'water',
                header: 'Water Allowance',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Water</div>
                            <div className='th'>Allowance</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'costOfLeaving',
                header: 'Cost of leaving Allowance',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div style={{ fontSize: '10px' }}>Cost of Leaving</div>
                            <div style={{ fontSize: '10px' }}>Allowance</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'other',
                header: 'Other Allowances',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Other</div>
                            <div className='th'>Allowances</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'overtimeAllowance',
                header: 'Overtime Salary',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Overtime</div>
                            <div className='th'>Salary</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'appraisal',
                header: 'Appraisal',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
            },
            {
                accessorKey: 'deductionType',
                header: 'Deduction Type',
                filterFn: 'contains',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Deduction</div>
                            <div className='th'>Type</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'deductionAmt',
                header: 'Deduction Amount',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Deduction</div>
                            <div className='th'>Amount</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'gratuity',
                header: 'Gratuity Amount',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Gratuity</div>
                            <div className='th'>Amount</div>
                        </div>
                    )
                }
            },
            {
                accessorKey: 'incentives',
                header: 'Incentives Amount',
                filterFn: 'between',
                enablePinning: false,
                size: 100,
                Header: () => {
                    return (
                        <div style={{ verticalAlign: 'middle' }}>
                            <div className='th'>Incentives</div>
                            <div className='th'>Amount</div>
                        </div>
                    )
                }
            },

        ], []);

    return (
        <>
            <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Payroll Split Details</h5>
            <div className={`card`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5 pb-2'>
                    <h3 className='card-title align-items-start flex-column'>
                        {/* <span className='card-label fw-bold fs-3 mb-1'>Employee Payroll Split Details</span> */}
                        <span className='text-muted mt-1 fw-semibold fs-7'>[{data.length} entries]</span>
                    </h3>
                    <div className='card-toolbar'>
                        <a href='/' className='btn btn-sm btn-light-primary'>
                            <KTIcon iconName='plus' className='fs-2' />
                            New Entry
                        </a>
                    </div>
                    <div className='card-toolbar'>
                        <a href='/' className='btn btn-sm btn-primary'>
                            <KTIcon iconName='file-down' className='fs-2' />
                            Export to Excel
                        </a>
                    </div>
                </div>
                {/* end::Header */}
                <div className='card-body'>
                    <h2>Enter the Month and Year</h2>
                    <div className='row mt-md-2 mt-xl-4 mb-md-4 mb-md-8 mb-5'>
                        <div className='col-md-3'>
                            <Autocomplete
                                disablePortal
                                id='yearField'
                                color="primary"
                                options={MonthOptions}
                                onInputChange={(event, value) => {
                                    setMonth(MonthOptions.indexOf(value) !== -1 ? MonthOptions.indexOf(value) : nowDate.getMonth())
                                }}
                                onChange={(event, value) => {
                                    setMonth(MonthOptions.indexOf(value ?? MonthOptions[nowDate.getMonth()]) !== -1 ? MonthOptions.indexOf(value ?? MonthOptions[nowDate.getMonth()]) : nowDate.getMonth())
                                }}
                                classes={{
                                    input: 'text-dark'
                                }}
                                defaultValue={MonthOptions[nowDate.getMonth()]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        required
                                        focused
                                        label="Month"
                                    />
                                }
                            />
                        </div>
                        <div className='col-md-3'>
                            <Autocomplete
                                color="primary"
                                id='year'
                                options={yearOptions}
                                onInputChange={(event, value) => {
                                    setYear(parseInt(value ?? nowDate.getFullYear().toString()))
                                }}
                                onChange={(event, value) => {
                                    setYear(parseInt(value ?? nowDate.getFullYear().toString()))
                                }}
                                classes={{
                                    input: 'text-dark'
                                }}
                                defaultValue={nowDate.getFullYear().toString()}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        required
                                        focused
                                        label="Year"
                                    />
                                }
                            />
                        </div>
                    </div>


                    <MaterialReactTable
                        columns={columns}
                        data={recievedData}
                        enableDensityToggle={false}
                        enableColumnFilters
                        enableColumnOrdering
                        enablePinning
                        enableRowActions
                        // enableColumnResizing
                        // columnResizeMode= 'onChange'
                        initialState={{
                            showColumnFilters: false,
                            // grouping: ["approval"], 
                            sorting: [
                                { id: "name", desc: false },
                            ],
                            expanded: true,
                            columnPinning: { left: ["name"] }
                        }}
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
                        displayColumnDefOptions={{
                            'mrt-row-actions': {
                                header: 'Action',
                                size: 80,
                                muiTableHeadCellProps: {
                                    className: 'px-7 py-4 text-black',
                                    sx: {
                                        alignItems: 'center',
                                        verticalAlign: 'middle',
                                        backgroundColor: '#EBEBD3 !important',
                                        outline: '6px',
                                        outlineStyle: 'solid',
                                        outlineColor: 'var(--bs-light)',
                                        outlineOffset: '-5px',
                                        borderRadius: '20px',
                                    }
                                }
                            },
                        }}
                        sortingFns={{
                            status: (rowA, rowB, columnID) => {
                                const valA = rowA.getValue < String > (columnID)
                                const valB = rowB.getValue < String > (columnID)
                                if (valA === 'Pending' && valB !== 'Pending') {
                                    return 1
                                }
                                else if (valB === 'Pending' && valA !== 'Pending') {
                                    return -1
                                }
                                else {
                                    return valA.toLowerCase() < valB.toLowerCase() ? 1 : -1
                                }
                            }
                        }}
                        filterFns={{
                            dateFilter: (row, columnId, filterValue) => {
                                const filterArray = filterValue.replaceAll(',', ';').split(';')
                                const cellVal = row.getValue < Date > (columnId)
                                const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
                                for (let item of filterArray) {
                                    const itemArray = item.replaceAll(/\s+/g, '#').split('#')
                                    console.log(filterArray, item, itemArray)
                                    if (cellVal.getFullYear().toString() === itemArray[itemArray.length - 1])
                                        for (let i = 0; i < itemArray.length - 1; i++) {
                                            if (itemArray[i].includes(monthName[cellVal.getMonth()]))
                                                return true
                                        }
                                }
                                return false
                            },
                            multipleFilter: (row, columnId, filterValue) => {
                                const filterArray = filterValue.replaceAll(',', ';').split(';')
                                const cellVal = row.getValue < String > (columnId)
                                for (let item of filterArray) {
                                    if (cellVal.toLocaleLowerCase().includes(item.toLocaleLowerCase()))
                                        return true
                                }
                                return false
                            }
                        }}

                        // enableEditing
                        // editingMode='modal'
                        muiTablePaperProps={{
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
                            className: 'px-7 py-3 text-black',
                            sx: {
                                verticalAlign: 'middle',
                                backgroundColor: '#EBEBD3 !important',
                                outline: '10px',
                                outlineStyle: 'solid',
                                outlineColor: 'var(--bs-light)',
                                outlineOffset: '-5px',
                                borderRadius: '20px',
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
                                color: 'black'
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

export default PayrollTable;