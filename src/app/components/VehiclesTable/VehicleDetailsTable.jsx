import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Delete, Edit, Download } from '@mui/icons-material';
import { Detailsdata } from './makeData';
import { KTIcon } from '../../../_metronic/helpers';

const VehicleDetailsTable = () => {
    const [data, setData] = useState(Detailsdata);

    const columns = useMemo(() => [
        {
            id: 'Car',
            header: 'Car Details',
            columns: [
                {
                    accessorKey: 'carRegNo',
                    header: 'Car Plate Number',
                    size: 200,
                },
                {
                    accessorFn: (row) => `${row.regEmployeeName}`,
                    id: 'model',
                    header: 'Employee Name',
                    size: 200,
                    Cell: ({ renderedCellValue }) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                paddingLeft: '1rem',
                            }}
                        >
                            <span>{renderedCellValue}</span>
                        </Box>
                    ),
                },
            ],
        },
        {
            id: 'HandedTo',
            header: 'Handed Over To',
            columns: [
                {
                    accessorKey: 'handedOverTo',
                    header: 'Employee Name',
                    size: 250,
                },
                {
                    accessorFn: (row) => new Date(row.fromDate),
                    id: 'FromDate',
                    header: 'From',
                    Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
                },
                {
                    accessorFn: (row) => new Date(row.toDate),
                    id: 'ToDate',
                    header: 'To',
                    Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
                },
            ],
        },
    ], []);

    return (
        <>
            <h5 className="text-black-50 mb-10">
                <i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i> 
                Vehicle Details
            </h5>
            <div className={`card mb-md-5 mb-xl-10`}>
                <div className='card-header border-0 pt-5 pb-2'>
                    <h3 className='card-title align-items-start flex-column'></h3>
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
                <div className='card-body'>
                    <MaterialReactTable
                        columns={columns}
                        data={data}
                        enableDensityToggle={false}
                        enableColumnFilters
                        enableColumnOrdering
                        enableRowActions
                        initialState={{ showColumnFilters: false }}
                        positionToolbarAlertBanner="bottom"
                        editingMode='row'
                        enableEditing
                        positionActionsColumn='last'
                        renderRowActions={({ row, table }) => (
                            <Box sx={{ justifyContent: 'center' }}>
                                <IconButton onClick={() => table.setEditingRow(row)}>
                                    <Edit className='text-success' />
                                </IconButton>
                                <IconButton onClick={() => {
                                    data.splice(row.index, 1);
                                    setData([...data]);
                                }}>
                                    <Download className='text-primary' />
                                </IconButton>
                                <IconButton onClick={() => {
                                    data.splice(row.index, 1);
                                    setData([...data]);
                                }}>
                                    <Delete className='text-danger' />
                                </IconButton>
                            </Box>
                        )}
                        filterFns={{
                            dateFilter: (row, columnId, filterValue) => {
                                // Your filter function logic
                            },
                            multipleFilter: (row, columnId, filterValue) => {
                                // Your filter function logic
                            }
                        }}
                        displayColumnDefOptions={{
                            'mrt-row-actions': {
                                id: 'Action',
                                header: 'Action',
                                size: 75,
                            },
                        }}
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
                                borderSpacing: '0px 0px',
                            }
                        }}
                        muiTableContainerProps={{
                            className: 'mb-2 p-5',
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
                                backgroundColor: '#143983 !important',
                                outline: '6px',
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
                                className: "text-white",
                            },
                            sx: {
                                color: 'white'
                            }
                        }}
                        muiTableHeadCellColumnActionsButtonProps={{
                            sx: {
                                color: 'white'
                            }
                        }}
                        muiTableHeadCellDragHandleProps={{
                            sx: {
                                color: 'white'
                            }
                        }}
                        icons={{
                            FullscreenIcon: () => (<KTIcon iconName='maximize' className='fs-2 text-white' />),
                            FullscreenExitIcon: () => (<KTIcon iconName='cross-circle' className='fs-2 text-white' />),
                            ViewColumnIcon: () => (<KTIcon iconName='status' className='fs-2 text-white' />),
                            FilterListIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
                            FilterListOffIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
                            SearchIcon: () => (<KTIcon iconName='search-list' className='fs-2 text-white' />),
                            CloseIcon: () => (<KTIcon iconName='cross' className='fs-2 text-white' />),
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

export default VehicleDetailsTable;




















// import { useMemo, useState } from 'react';

// //MRT Imports
// //import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
// import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

// //Material UI Imports
// import { Box, IconButton } from '@mui/material';

// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// //Icons Imports
// import { Delete, Edit, Download } from '@mui/icons-material';

// //Mock Data
// import { Detailsdata } from './makeData';

// import { KTIcon } from '../../../_metronic/helpers'

// export type VehicleDetails = {
//     carRegNo: string
//     regEmployeeName: string
//     handedOverTo: string
//     fromDate: string
//     toDate: string
// };

// const VehicleDetailsTable = () => {
//     const [data, setData] = useState < VehicleDetails[] > (Detailsdata)

//     const columns = useMemo < MRT_ColumnDef < VehicleDetails > [] > (
//         () => [
//             {
//                 id: 'Car', //id used to define `group` column
//                 header: 'Car Details',
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-4 text-black',
//                     sx: {
//                         backgroundColor: '#E1D89F !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                     }
//                 },
//                 columns: [
//                     {
//                         accessorKey: 'carRegNo', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                         header: 'Car Plate Number',
//                         size: 200,
//                     },
//                     {
//                         accessorFn: (row) => `${row.regEmployeeName}`, //accessorFn used to join multiple data into a single cell
//                         id: 'model', //id is still required when using accessorFn instead of accessorKey
//                         header: 'Employee Name',
//                         size: 200,
//                         filterFn: 'multipleFilter',
//                         muiTableHeadCellProps: {
//                             style: {
//                                 paddingLeft: '1rem'
//                             }
//                         },
//                         Cell: ({ renderedCellValue, row }) => (
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     gap: '1rem',
//                                     paddingLeft: '1rem',
//                                 }}
//                             >
//                                 {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
//                                 <span>{renderedCellValue}</span>
//                             </Box>
//                         ),
//                     },
//                     // {
//                     //     accessorKey: 'year', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                     //     header: 'Year',
//                     //     size:100,
//                     // }
//                 ],
//             },
//             {
//                 id: 'HandedTo',
//                 header: 'Handed Over To',
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-4 text-black',
//                     sx: {
//                         backgroundColor: '#E1D89F !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                     }
//                 },
//                 columns:
//                     [
//                         {
//                             accessorKey: 'handedOverTo',
//                             header: 'Employee Name',
//                             size: 250,
//                         },
//                         {
//                             accessorFn: (row) => new Date(row.fromDate), //convert to Date for sorting and filtering
//                             id: 'FromDate',
//                             header: 'From',
//                             filterFn: 'dateFilter',
//                             sortingFn: 'datetime',
//                             enableGrouping: false,
//                             Cell: ({ cell }) => cell.getValue < Date > ()?.toLocaleDateString(), //render Date as a string
//                         },
//                         {
//                             accessorFn: (row) => new Date(row.toDate), //convert to Date for sorting and filtering
//                             id: 'ToDate',
//                             header: 'To',
//                             filterFn: 'dateFilter',
//                             sortingFn: 'datetime',
//                             enableGrouping: false,
//                             Cell: ({ cell }) => cell.getValue < Date > ()?.toLocaleDateString(), //render Date as a string
//                         },
//                     ]
//             }
//         ], []);

//     return (

//         <>

//             <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */}  Vehicle Details</h5>
//             <div className={`card mb-md-5 mb-xl-10`}>
//                 {/* begin::Header */}
//                 <div className='card-header border-0 pt-5 pb-2'>
//                     <h3 className='card-title align-items-start flex-column'>
//                         {/* <span className='card-label fw-bold fs-3 mb-1'>Insured Staffs Details</span>
//                 <span className='text-muted mt-1 fw-semibold fs-7'>[{Detailsdata.length} staffs and relatives]</span> */}
//                     </h3>
//                     <div className='card-toolbar'>
//                         <a href='/' className='btn btn-sm btn-light-primary'>
//                             <KTIcon iconName='plus' className='fs-2' />
//                             New Entry
//                         </a>
//                     </div>
//                     <div className='card-toolbar'>
//                         <a href='/' className='btn btn-sm btn-primary'>
//                             <KTIcon iconName='file-down' className='fs-2' />
//                             Export to Excel
//                         </a>
//                     </div>
//                 </div>
//                 {/* end::Header */}
//                 <div className='card-body'>
//                     <MaterialReactTable
//                         columns={columns}
//                         data={data}
//                         enableDensityToggle={false}
//                         enableColumnFilters
//                         enableColumnOrdering
//                         enableRowActions
//                         initialState={{ showColumnFilters: false }}
//                         positionToolbarAlertBanner="bottom"
//                         // renderDetailPanel={({ row }) => (
//                         //     <Box sx={{
//                         //         display: 'flex',
//                         //         justifyContent: 'space-around',
//                         //         alignItems: 'center',}}
//                         //     >
//                         //     <img
//                         //         alt="avatar"
//                         //         height={200}
//                         //         src={row.original.avatar}
//                         //         loading="lazy"
//                         //         style={{ borderRadius: '50%' }}
//                         //     />
//                         //     </Box>
//                         // )}
//                         editingMode='row'
//                         enableEditing

//                         positionActionsColumn='last'
//                         renderRowActions={({ row, table }) => [
//                             <Box sx={{ justifyContent: 'center' }}>

//                                 <IconButton
//                                     onClick={() => table.setEditingRow(row)}
//                                 >
//                                     <Edit className='text-success' />
//                                 </IconButton>
//                                 <IconButton
//                                     onClick={() => {
//                                         data.splice(row.index, 1); //assuming simple data table
//                                         setData([...data]);
//                                     }}
//                                 >
//                                     <Download className='text-primary' />
//                                 </IconButton>
//                                 <IconButton
//                                     onClick={() => {
//                                         data.splice(row.index, 1); //assuming simple data table
//                                         setData([...data]);
//                                     }}
//                                 >
//                                     <Delete className='text-danger' />
//                                 </IconButton>
//                             </Box>
//                         ]}

//                         filterFns={{
//                             dateFilter: (row, columnId, filterValue) => {
//                                 const filterArray = filterValue.replaceAll(',', ';').split(';')
//                                 const cellVal = row.getValue < Date > (columnId)
//                                 const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
//                                 for (let item of filterArray) {
//                                     const itemArray = item.replaceAll(/\s+/g, '#').split('#')
//                                     console.log(filterArray, item, itemArray)
//                                     if (cellVal.getFullYear().toString() === itemArray[itemArray.length - 1])
//                                         for (let i = 0; i < itemArray.length - 1; i++) {
//                                             if (itemArray[i].includes(monthName[cellVal.getMonth()]))
//                                                 return true
//                                         }
//                                 }
//                                 return false
//                             },
//                             multipleFilter: (row, columnId, filterValue) => {
//                                 const filterArray = filterValue.replaceAll(',', ';').split(';')
//                                 const cellVal = row.getValue(columnId)
//                                 for (let item of filterArray) {
//                                     if (cellVal.toLocaleLowerCase().includes(item.toLocaleLowerCase()))
//                                         return true
//                                 }
//                                 return false
//                             }
//                         }}

//                         displayColumnDefOptions={{
//                             'mrt-row-actions': {
//                                 id: 'Action',
//                                 header: 'Action',
//                                 size: 75,
//                                 muiTableHeadCellProps: {
//                                     className: 'px-7 py-3 text-black',
//                                     sx: {
//                                         // backgroundColor: '#404D66 !important',
//                                         justifyContent: 'center',
//                                         // backgroundColor: '#271483 !important',
//                                         // outline: '6px',
//                                         // outlineStyle: 'solid',
//                                         // outlineColor: 'var(--bs-light)',
//                                         // outlineOffset: '-5px',
//                                         // borderRadius: '20px',
//                                         // borderRadius: 'var(--bs-card-border-radius)',
//                                     }
//                                 }
//                             },
//                         }}
//                         // renderTopToolbarCustomActions={({ table }) => {
//                         //     const handleDeactivate = () => {
//                         //     table.getSelectedRowModel().flatRows.map((row) => {
//                         //         alert('deactivating ' + row.getValue('name'));
//                         //     });
//                         //     };

//                         //     const handleActivate = () => {
//                         //     table.getSelectedRowModel().flatRows.map((row) => {
//                         //         alert('activating ' + row.getValue('name'));
//                         //     });
//                         //     };

//                         //     const handleContact = () => {
//                         //     table.getSelectedRowModel().flatRows.map((row) => {
//                         //         alert('contact ' + row.getValue('name'));
//                         //     });
//                         //     };

//                         //     return (
//                         //     <div style={{ display: 'flex', gap: '0.5rem' }}>
//                         //         <Button
//                         //         color="error"
//                         //         disabled={!table.getIsSomeRowsSelected()}
//                         //         onClick={handleDeactivate}
//                         //         variant="contained"
//                         //         >
//                         //         Deactivate
//                         //         </Button>
//                         //         <Button
//                         //         color="success"
//                         //         disabled={!table.getIsSomeRowsSelected()}
//                         //         onClick={handleActivate}
//                         //         variant="contained"
//                         //         >
//                         //         Activate
//                         //         </Button>
//                         //         <Button
//                         //         color="info"
//                         //         disabled={!table.getIsSomeRowsSelected()}
//                         //         onClick={handleContact}
//                         //         variant="contained"
//                         //         >
//                         //         Contact
//                         //         </Button>
//                         //     </div>
//                         //     );
//                         // }}
//                         // enableEditing
//                         // editingMode='modal'
//                         muiTablePaperProps={{
//                             sx: {
//                                 backgroundColor: 'var(--bs-card-bg)',
//                                 border: 'none',
//                                 boxShadow: 'none'
//                             }
//                         }}
//                         muiTableProps={{
//                             className: 'table',
//                             sx: {
//                                 borderCollapse: 'separate',
//                                 borderSpacing: '0px 0px',
//                             }
//                         }}
//                         muiTableContainerProps={{
//                             className: 'mb-2 p-5',
//                             sx: {
//                                 backgroundColor: 'var(--bs-light)',
//                                 borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         }}
//                         muiTableHeadRowProps={{
//                             className: 'fw-bold bg-light',
//                             sx: {
//                                 boxShadow: 'none'
//                             }
//                         }}
//                         muiTableHeadCellProps={{
//                             className: 'px-7 py-3 text-white',
//                             sx: {
//                                 // backgroundColor: '#404D66 !important',
//                                 backgroundColor: '#143983 !important',
//                                 outline: '6px',
//                                 outlineStyle: 'solid',
//                                 outlineColor: 'var(--bs-light)',
//                                 outlineOffset: '-5px',
//                                 borderRadius: '20px',
//                                 // borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         }}
//                         muiTableBodyRowProps={{
//                             hover: false,
//                             sx: {
//                                 backgroundColor: 'transparent'
//                             }
//                         }}
//                         muiTableBodyCellProps={{
//                             className: 'bg-light bg-hover-secondary'
//                         }}
//                         muiTopToolbarProps={{
//                             className: 'card text-light mb-2',
//                             sx: {
//                                 boxShadow: 'none',
//                                 backgroundColor: '#143983'
//                             },
//                         }}
//                         muiBottomToolbarProps={{
//                             className: 'text-light mb-5 d-flex',
//                             sx: {
//                                 boxShadow: 'none',
//                                 backgroundColor: '#143983',
//                                 borderRadius: 'var(--bs-card-border-radius)',
//                                 minHeight: '50px'
//                             },
//                         }}
//                         muiSearchTextFieldProps={{
//                             className: 'bg-light text-light text-muted'
//                         }}
//                         muiTableHeadCellFilterTextFieldProps={{
//                             helperText: false,
//                             focused: true,
//                             inputProps: {
//                                 className: "text-white",
//                             },
//                             sx: {
//                                 color: 'white'
//                             }
//                         }}
//                         muiTableHeadCellColumnActionsButtonProps={{
//                             sx: {
//                                 color: 'white'
//                             }
//                         }}
//                         muiTableHeadCellDragHandleProps={{
//                             sx: {
//                                 color: 'white'
//                             }
//                         }}
//                         icons={{
//                             FullscreenIcon: () => (<KTIcon iconName='maximize' className='fs-2 text-white' />),
//                             FullscreenExitIcon: () => (<KTIcon iconName='cross-circle' className='fs-2 text-white' />),
//                             ViewColumnIcon: () => (<KTIcon iconName='status' className='fs-2 text-white' />),
//                             FilterListIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
//                             FilterListOffIcon: () => (<KTIcon iconName='filter-search' className='fs-2 text-white' />),
//                             SearchIcon: () => (<KTIcon iconName='search-list' className='fs-2 text-white' />),
//                             CloseIcon: () => (<KTIcon iconName='cross' className='fs-2 text-white' />),
//                         }}
//                         muiTablePaginationProps={{
//                             className: 'text-white',

//                         }}
//                         enableGlobalFilter={false}
//                         muiToolbarAlertBannerProps={{
//                             className: 'text-white',
//                             sx: {
//                                 backgroundColor: '#143983',
//                             }
//                         }}
//                         muiToolbarAlertBannerChipProps={{
//                             className: 'text-white'
//                         }}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VehicleDetailsTable;