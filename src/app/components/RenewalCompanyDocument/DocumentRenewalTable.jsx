import React, { useMemo } from 'react';
import moment from 'moment';
import { MaterialReactTable } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import { KTIcon } from '../../../_metronic/helpers';
import { data } from './makeData';

const RenewalStatusTable = () => {
    const columns = useMemo(() => [
        {
            id: 'name',
            header: 'Name',
            accessorFn: (row) => `${row.Documentname}`,
            size: 250,
            muiTableHeadCellProps: {
                style: {
                    paddingLeft: '1rem',
                },
            },
            Cell: ({ renderedCellValue, row }) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem' }}>
                    <span>{renderedCellValue}</span>
                </Box>
            ),
        },
        {
            accessorFn: (row) => new Date(row.DateofRenewal),
            id: 'RenewalDate',
            header: 'Date',
            filterFn: 'dateFilter',
            sortingFn: 'datetime',
            enableGrouping: false,
            Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
            Header: ({ column }) => <em>{column.columnDef.header}</em>,
        },
        {
            id: 'RenewalStatus',
            header: 'Status',
            filterFn: 'contains',
            enableGrouping: false,
            accessorFn: (row) => {
                const date = new Date(row.DateofRenewal);
                const currentDate = moment().format('MM-DD-YYYY');
                const difference = moment(currentDate).diff(date, 'days');
                if (row.RenewalDone) return '1Completed';
                else if (difference > 0) return `2Overdue by ${difference} days`;
                else if (difference <= 0 && difference >= -30) return `3Due in ${-difference} days`;
                else if (difference <= -30) return `4Due in ${-difference} days`;
                else return `5NA`;
            },
            Header: ({ column }) => <em>{column.columnDef.header}</em>,
            Cell: ({ cell }) => {
                const InsideVal = ({ value }) => {
                    if (value !== undefined) {
                        if (value.toString().slice(0, 1) === '1') return <span className='badge badge-light-success fs-7 fw-bold'>{value.toString().slice(1)}</span>;
                        else if (value.toString().slice(0, 1) === '5') return <span className='badge badge-light-dark fs-7 fw-bold'>{value.toString().slice(1)}</span>;
                        else {
                            if (value.toString().slice(0, 1) === '2') return <span className='badge badge-light-danger fs-7 fw-bold'>{value.toString().slice(1)}</span>;
                            else if (value.toString().slice(0, 1) === '3') return <span className='badge badge-light-warning fs-7 fw-bold'>{value.toString().slice(1)}</span>;
                            else return <span className='badge badge-light-primary fs-7 fw-bold'>{value.toString().slice(1)}</span>;
                        }
                    }
                    return <span> </span>;
                };
                return (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem' }}>
                        <InsideVal value={cell ? cell.getValue<string>() : undefined} />
                    </Box>
                );
            },
        },
        {
            header: 'Company Name',
            accessorKey: 'company',
            Size: 100,
            enableGrouping: true,
            muiTableHeadCellProps: {
                style: {
                    paddingLeft: '1rem',
                },
            },
            muiTableBodyCellProps: {
                style: {
                    paddingLeft: '1rem',
                },
            },
        },
    ], []);

    return (
        <div className={`card`}>
            <div className='card-header border-0 pt-5 pb-2'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Document Renewal Status</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>[{data.length} entries]</span>
                </h3>
                <div className='card-toolbar'>
                    <a href='/' className='btn btn-sm btn-light-primary'>
                        <KTIcon iconName='plus' className='fs-2' />
                        New Entry
                    </a>
                </div>
            </div>
            <div className='card-body'>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableDensityToggle={false}
                    enableColumnFilters
                    enableColumnOrdering
                    enableGrouping
                    initialState={{
                        showColumnFilters: false,
                        grouping: ['company'],
                        pagination: { pageIndex: 0, pageSize: 20 },
                        sorting: [{ id: 'RenewalDate', desc: false }],
                        expanded: true,
                    }}
                    groupedColumnMode='reorder'
                    positionToolbarAlertBanner="bottom"
                    renderRowActionMenuItems={({ closeMenu }) => [
                        <MenuItem
                            key={0}
                            onClick={() => {
                                closeMenu();
                            }}
                            sx={{ m: 0 }}
                        >
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            Edit Profile
                        </MenuItem>,
                        <MenuItem
                            key={1}
                            onClick={() => {
                                closeMenu();
                            }}
                            sx={{ m: 0 }}
                        >
                            <ListItemIcon>
                                <Send />
                            </ListItemIcon>
                            Delete Profile
                        </MenuItem>,
                    ]}
                    filterFns={{
                        dateFilter: (row, columnId, filterValue) => {
                            const filterArray = filterValue.replaceAll(',', ';').split(';');
                            const cellVal = row.getValue<Date>(columnId);
                            const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
                            for (let item of filterArray) {
                                const itemArray = item.replaceAll(/\s+/g, '#').split('#');
                                if (cellVal.getFullYear().toString() === itemArray[itemArray.length - 1])
                                    for (let i = 0; i < itemArray.length - 1; i++) {
                                        if (itemArray[i].includes(monthName[cellVal.getMonth()])) return true;
                                    }
                            }
                            return false;
                        },
                    }}
                    muiTablePaperProps={{
                        sx: {
                            backgroundColor: 'var(--bs-card-bg)',
                            border: 'none',
                            boxShadow: 'none',
                        },
                    }}
                    muiTableProps={{
                        className: 'table',
                        sx: {
                            borderCollapse: 'separate',
                            borderSpacing: '0px 4px',
                            tableLayout: 'fixed',
                        },
                    }}
                    muiTableContainerProps={{
                        className: 'mb-2',
                        sx: {
                            backgroundColor: 'var(--bs-light)',
                            borderRadius: 'var(--bs-card-border-radius)',
                        },
                    }}
                    muiTableHeadRowProps={{
                        className: 'fw-bold bg-light',
                        sx: {
                            boxShadow: 'none',
                        },
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
                        },
                    }}
                    muiTableBodyRowProps={{
                        hover: false,
                        sx: {
                            backgroundColor: 'transparent',
                        },
                    }}
                    muiTableBodyCellProps={{
                        className: 'bg-light bg-hover-secondary',
                    }}
                    muiTopToolbarProps={{
                        className: 'card text-light mb-2',
                        sx: {
                            boxShadow: 'none',
                            backgroundColor: '#143983',
                        },
                    }}
                    muiBottomToolbarProps={{
                        className: 'text-light mb-5 d-flex',
                        sx: {
                            boxShadow: 'none',
                            backgroundColor: '#143983',
                            borderRadius: 'var(--bs-card-border-radius)',
                            minHeight: '50px',
                        },
                    }}
                    muiSearchTextFieldProps={{
                        className: 'bg-light text-light text-muted',
                    }}
                    muiTableHeadCellFilterTextFieldProps={{
                        helperText: false,
                        focused: true,
                        inputProps: {
                            className: 'text-black',
                        },
                        sx: {
                            color: 'black',
                        },
                    }}
                    muiTableHeadCellColumnActionsButtonProps={{
                        sx: {
                            color: 'black',
                        },
                    }}
                    muiTableHeadCellDragHandleProps={{
                        sx: {
                            color: 'black',
                        },
                    }}
                    icons={{
                        FullscreenIcon: () => <KTIcon iconName='maximize' className='fs-2 text-white' />,
                        FullscreenExitIcon: () => <KTIcon iconName='cross-circle' className='fs-2 text-white' />,
                        ViewColumnIcon: () => <KTIcon iconName='status' className='fs-2 text-white' />,
                        FilterListIcon: () => <KTIcon iconName='filter-search' className='fs-2 text-white' />,
                        FilterListOffIcon: () => <KTIcon iconName='filter-search' className='fs-2 text-white' />,
                        SearchIcon: () => <KTIcon iconName='search-list' className='fs-2 text-white' />,
                        CloseIcon: () => <KTIcon iconName='cross' className='fs-2 text-black' />,
                    }}
                    muiTablePaginationProps={{
                        className: 'text-white',
                    }}
                    enableGlobalFilter={false}
                    muiToolbarAlertBannerProps={{
                        className: 'text-white',
                        sx: {
                            backgroundColor: '#143983',
                            display: 'none',
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default RenewalStatusTable;




















// import { useMemo , FC} from 'react';
// import moment from 'moment';

// //MRT Imports
// //import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
// import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

// //Material UI Imports
// import { Box, ListItemIcon, MenuItem} from '@mui/material';

// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// //Icons Imports
// import { AccountCircle, Send } from '@mui/icons-material';

// //Mock Data
// import { data } from './makeData';

// import {KTIcon} from '../../../_metronic/helpers'

// export type DocumentRenewalDetails = {
//     Documentname: string
//     DateofRenewal: string
//     company: string
//     RenewalDone?: boolean
//   };

// const RenewalStatusTable = () => {
//   const columns = useMemo<MRT_ColumnDef<DocumentRenewalDetails>[]>(
//     () => [
//     // {
//     //     id: 'name', //id used to define `group` column
//     //     header: 'Name',
//     //     columns: [
//             {
//                 id: 'name',
//                 header: 'Name',
//                 accessorFn: (row) => `${row.Documentname}`, //accessorFn used to join multiple data into a single cell
//                 size: 250,
//                 muiTableHeadCellProps: {
//                     style: {
//                         paddingLeft: '1rem'
//                     }
//                 },
//                 Cell: ({ renderedCellValue, row }) => (
//                 <Box
//                     sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '1rem',
//                     paddingLeft: '1rem',
//                     }}
//                 >
//                     {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
//                     <span>{renderedCellValue}</span>
//                 </Box>
//                 ),
//             },
//     //     ]
        
//     // },
//     // {    
//     //     id: 'licenseRenewal',
//     //     header: 'Document Renewal',
//     //     columns: [
//             {
//                 accessorFn: (row) => new Date(row.DateofRenewal), //convert to Date for sorting and filtering
//                 id: 'RenewalDate',
//                 header: 'Date',
//                 filterFn: 'dateFilter',
//                 sortingFn: 'datetime',
//                 enableGrouping: false,
//                 Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
//                 Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
//                 // Custom Date Picker Filter from @mui/x-date-pickers
//                 // Filter: ({ column }) => (
//                 // <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 //     <DatePicker
//                 //     onChange={(newValue) => {
//                 //         column.setFilterValue(newValue);
//                 //     }}
//                 //     slotProps={{
//                 //         textField: {
//                 //         helperText: 'Filter Mode: Less Than',
//                 //         sx: { minWidth: '120px' },
//                 //         variant: 'standard',
//                 //         },
//                 //     }}
//                 //     value={column.getFilterValue()}
//                 //     />
//                 // </LocalizationProvider>
//                 // ),
//             },
//             {
//                 id: 'RenewalStatus',
//                 header: 'Status',
//                 filterFn: 'contains',
//                 enableGrouping: false,
//                 accessorFn: (row) => {
//                         const date = new Date(row.DateofRenewal)
//                         const currentDate = moment().format('MM-DD-YYYY');
//                         const difference = moment(currentDate).diff(date, 'days');
//                         if (row.RenewalDone)
//                             return ('1Completed')
//                         else if(difference>0)
//                             return (`2Overdue by ${difference} days`)
//                         else if(difference<=0 && difference>=-30)
//                             return (`3Due in ${-difference} days`)
//                         else if(difference<=-30)
//                             return (`4Due in ${-difference} days`)
//                         else 
//                             return (`5NA`)
//                     },
//                 Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
//                 // Custom Date Picker Filter from @mui/x-date-pickers
//                 Cell: ({ cell }) => {
//                     type valtype = {
//                         value?: string
//                     }
//                     const InsideVal: FC<valtype> = ({value}) => {
//                         if(value!==undefined){
//                             if(value.toString().slice(0,1)==='1')
//                                 return (<span className='badge badge-light-success fs-7 fw-bold'>{value.toString().slice(1)}</span>);
//                             else if(value.toString().slice(0,1)==='5')
//                                 return (<span className='badge badge-light-dark fs-7 fw-bold'>{value.toString().slice(1)}</span>);
//                             else {
//                                 if (value.toString().slice(0,1)==='2')
//                                     return (<span className='badge badge-light-danger fs-7 fw-bold'>{value.toString().slice(1)}</span>);
//                                 else if (value.toString().slice(0,1)==='3')
//                                     return (<span className='badge badge-light-warning fs-7 fw-bold'>{value.toString().slice(1)}</span>);
//                                 else
//                                     return (<span className='badge badge-light-primary fs-7 fw-bold'>{value.toString().slice(1)}</span>);
//                             } 
//                         }
//                         return (<span> </span>);
//                     }
//                     return (
//                         <Box
//                             sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '1rem',
//                             paddingLeft: '1rem',
//                             }}
//                         >
//                             <InsideVal
//                                 value={cell? cell.getValue<string>() :undefined}
//                             />
//                         </Box>
//                     );
//                 },
//             },
//     //     ],
//     // },
//     // {
//     //     id: 'company', //id used to define `group` column
//     //     header: 'Company',
//     //     columns: [
//             {
//                 header: 'Company Name',
//                 accessorKey: 'company', //accessorFn used to join multiple data into a single cell
//                 Size: 100,
//                 enableGrouping: true,
//                 muiTableHeadCellProps: {
//                     style: {
//                         paddingLeft: '1rem'
//                     }
//                 },
//                 muiTableBodyCellProps: {
//                     style: {
//                         paddingLeft: '1rem'
//                     }
//                 },
//             },
//     //     ]
//     // }
// ],[]);

//   return (
//         <div className={`card`}>
//             {/* begin::Header */}
//             <div className='card-header border-0 pt-5 pb-2'>
//             <h3 className='card-title align-items-start flex-column'>
//                 <span className='card-label fw-bold fs-3 mb-1'>Document Renewal Status</span>
//                 <span className='text-muted mt-1 fw-semibold fs-7'>[{data.length} entries]</span>
//             </h3>
//             <div className='card-toolbar'>
//                 <a href='/' className='btn btn-sm btn-light-primary'>
//                 <KTIcon iconName='plus' className='fs-2' />
//                 New Entry
//                 </a>
//             </div>
//             </div>
//             {/* end::Header */}
//             <div className='card-body'>
//                 <MaterialReactTable
//                 columns={columns}
//                 data={data}
//                 enableDensityToggle={false}
//                 enableColumnFilters
//                 enableColumnOrdering
//                 enableGrouping
//                 initialState={{ 
//                     showColumnFilters: false, 
//                     grouping: ["company"], 
//                     pagination: {pageIndex:0 ,pageSize: 20},
//                     sorting: [{id:'RenewalDate' ,desc: false}],
//                     expanded: true,
//                 }}
//                 groupedColumnMode = 'reorder'
//                 positionToolbarAlertBanner="bottom"
//                 // renderDetailPanel={({ row }) => (
//                 //     <Box sx={{
//                 //         display: 'flex',
//                 //         justifyContent: 'space-around',
//                 //         alignItems: 'center',}}
//                 //     >
//                 //     <img
//                 //         alt="avatar"
//                 //         height={200}
//                 //         src={row.original.avatar}
//                 //         loading="lazy"
//                 //         style={{ borderRadius: '50%' }}
//                 //     />
//                 //     </Box>
//                 // )}
//                 renderRowActionMenuItems={({ closeMenu }) => [
//                     <MenuItem
//                     key={0}
//                     onClick={() => {
//                         // View profile logic...
//                         closeMenu();
//                     }}
//                     sx={{ m: 0 }}
//                     >
//                     <ListItemIcon>
//                         <AccountCircle />
//                     </ListItemIcon>
//                     Edit Profile
//                     </MenuItem>,
//                     <MenuItem
//                     key={1}
//                     onClick={() => {
//                         // Send email logic...
//                         closeMenu();
//                     }}
//                     sx={{ m: 0 }}
//                     >
//                     <ListItemIcon>
//                         <Send />
//                     </ListItemIcon>
//                     Delete Profile
//                     </MenuItem>,
//                 ]}

//                 filterFns={{
//                     dateFilter: (row, columnId, filterValue) => {
//                         const filterArray = filterValue.replaceAll(',',';').split(';')
//                         const cellVal = row.getValue<Date>(columnId)
//                         const monthName = ['jan','feb','mar','apr','may','jun','jul','aug','sept','oct','nov','dec']
//                         for(let item of filterArray){
//                             const itemArray = item.replaceAll(/\s+/g, '#').split('#')
//                             console.log(filterArray,item,itemArray)
//                             if(cellVal.getFullYear().toString()===itemArray[itemArray.length-1])
//                                 for(let i = 0; i < itemArray.length-1; i++){
//                                     if(itemArray[i].includes(monthName[cellVal.getMonth()]))
//                                         return true
//                                 }
//                         }
//                         return false
//                     }
//                 }}  

//                 // renderTopToolbarCustomActions={({ table }) => {
//                 //     const handleDeactivate = () => {
//                 //     table.getSelectedRowModel().flatRows.map((row) => {
//                 //         alert('deactivating ' + row.getValue('name'));
//                 //     });
//                 //     };

//                 //     const handleActivate = () => {
//                 //     table.getSelectedRowModel().flatRows.map((row) => {
//                 //         alert('activating ' + row.getValue('name'));
//                 //     });
//                 //     };

//                 //     const handleContact = () => {
//                 //     table.getSelectedRowModel().flatRows.map((row) => {
//                 //         alert('contact ' + row.getValue('name'));
//                 //     });
//                 //     };

//                 //     return (
//                 //     <div style={{ display: 'flex', gap: '0.5rem' }}>
//                 //         <Button
//                 //         color="error"
//                 //         disabled={!table.getIsSomeRowsSelected()}
//                 //         onClick={handleDeactivate}
//                 //         variant="contained"
//                 //         >
//                 //         Deactivate
//                 //         </Button>
//                 //         <Button
//                 //         color="success"
//                 //         disabled={!table.getIsSomeRowsSelected()}
//                 //         onClick={handleActivate}
//                 //         variant="contained"
//                 //         >
//                 //         Activate
//                 //         </Button>
//                 //         <Button
//                 //         color="info"
//                 //         disabled={!table.getIsSomeRowsSelected()}
//                 //         onClick={handleContact}
//                 //         variant="contained"
//                 //         >
//                 //         Contact
//                 //         </Button>
//                 //     </div>
//                 //     );
//                 // }}
//                 // enableEditing
//                 // editingMode='modal'
//                 muiTablePaperProps={{
//                     sx: {
//                         backgroundColor: 'var(--bs-card-bg)',
//                         border: 'none',
//                         boxShadow: 'none'
//                     }
//                 }}
//                 muiTableProps={{
//                     className: 'table',
//                     sx: {
//                         borderCollapse: 'separate',
//                         borderSpacing: '0px 4px',
//                         tableLayout: 'fixed'
//                     }
//                 }}
//                 muiTableContainerProps={{
//                     className: 'mb-2',
//                     sx: {
//                         backgroundColor: 'var(--bs-light)',
//                         borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 }}
//                 muiTableHeadRowProps={{
//                     className: 'fw-bold bg-light',
//                     sx: {
//                         boxShadow: 'none'
//                     }
//                 }}
//                 muiTableHeadCellProps={{
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         verticalAlign: 'middle',
//                         backgroundColor: '#EBEBD3 !important',
//                         outline: '10px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                     }
//                 }}
//                 muiTableBodyRowProps={{
//                     hover: false,
//                     sx: {
//                         backgroundColor: 'transparent'
//                     }
//                 }}
//                 muiTableBodyCellProps={{
//                     className: 'bg-light bg-hover-secondary'
//                 }}
//                 muiTopToolbarProps={{
//                     className: 'card text-light mb-2',
//                     sx: {
//                         boxShadow: 'none',
//                         backgroundColor: '#143983'
//                     },
//                 }}
//                 muiBottomToolbarProps={{
//                     className: 'text-light mb-5 d-flex',
//                     sx: {
//                         boxShadow: 'none',
//                         backgroundColor: '#143983',
//                         borderRadius: 'var(--bs-card-border-radius)',
//                         minHeight: '50px'
//                     },
//                 }}
//                 muiSearchTextFieldProps={{
//                     className: 'bg-light text-light text-muted'
//                 }}
//                 muiTableHeadCellFilterTextFieldProps={{
//                     helperText: false,
//                     focused: true,
//                     inputProps: {
//                         className: "text-black",
//                     },
//                     sx: {
//                         color: 'black'
//                     }
//                 }}
//                 muiTableHeadCellColumnActionsButtonProps={{
//                     sx: {
//                         color: 'black'
//                     }
//                 }}
//                 muiTableHeadCellDragHandleProps={{
//                     sx: {
//                         color: 'black'
//                     }
//                 }}
//                 icons={{
//                     FullscreenIcon: () => (<KTIcon iconName='maximize' className='fs-2 text-white' />),
//                     FullscreenExitIcon: () => (<KTIcon iconName='cross-circle' className='fs-2 text-white' />),
//                     ViewColumnIcon: () => (<KTIcon iconName='status' className='fs-2 text-white' />),
//                     FilterListIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
//                     FilterListOffIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
//                     SearchIcon: () => (<KTIcon iconName='search-list' className='fs-2 text-white' />),
//                     CloseIcon: () => (<KTIcon iconName='cross' className='fs-2 text-black' />),
//                 }}
//                 muiTablePaginationProps={{
//                     className: 'text-white',
                    
//                 }}
//                 enableGlobalFilter={false}
//                 muiToolbarAlertBannerProps={{
//                     className: 'text-white',
//                     sx:{
//                         backgroundColor: '#143983',
//                         display: 'none'
//                     }
//                 }}
//                 />
//             </div>
//         </div>
//   );
// };

// export default RenewalStatusTable;