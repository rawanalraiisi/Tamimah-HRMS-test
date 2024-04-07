import React, { useMemo, useState } from 'react';

//MRT Imports
//import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
import { MaterialReactTable } from 'material-react-table';

//Material UI Imports
import { Box, IconButton } from '@mui/material';

//Icons Imports
import { Delete, Edit } from '@mui/icons-material';

//Mock Data
// import { data } from './makeData';

import { KTIcon } from '../../../_metronic/helpers';
import makeData from './makeData'; // Importing makeData

const InsuredStaffTable = () => {
  const [recievedData, setData] = useState(makeData); // Fixed the import issue
  const columns = useMemo(
    () => [
       {
        accessorKey: 'policyNo',
        header: 'Policy Number',
        size: 200,
        enableGrouping: false,
        enablePinning: false,
      },
      {
        accessorFn: (row) => `${row.name}`,
        id: 'name',
        header: 'Name',
        size: 250,
        filterFn: 'multipleFilter',
        enableGrouping: false,
        enablePinning: true,
        muiTableHeadCellProps: {
          style: {
            paddingLeft: '1rem',
          },
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
            <img
              alt="avatar"
              height={30}
              src={
                row.original.avatar ??
                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg'
              }
              loading="lazy"
              style={{ borderRadius: '50%' }}
            />
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        accessorKey: 'familyName',
        header: 'Family Name',
        size: 250,
        enableGrouping: true,
        enablePinning: false,
      },
      {
        accessorKey: 'relationship',
        header: 'Relationship',
        size: 200,
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
        accessorFn: (row) => new Date(row.dob),
        id: 'dob',
        header: 'Date of Birth',
        enableGrouping: false,
        enablePinning: false,
        filterFn: 'dateFilter',
        sortingFn: 'datetime',
        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
        Header: ({ column }) => <em>{column.columnDef.header}</em>,
      },
      {
        accessorKey: 'maritalStatus',
        header: 'Marital Status',
        size: 200,
        enableGrouping: false,
        enablePinning: false,
      },
      {
        accessorKey: 'nationality',
        header: 'Nationality',
        size: 200,
        enableGrouping: true,
        enablePinning: false,
      },
      {
        accessorKey: 'company',
        header: 'Place of Work',
        size: 200,
        enableGrouping: true,
        enablePinning: false,
      },
    ],
    []
  );


  return (
    <>
      <h5 className="text-black-50 mb-10">
        <i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i> {/* icon */} Employee Insurance Details
      </h5>
      <div className={`card`}>
        <div className="card-header border-0 pt-5 pb-2">
          <h3 className="card-title align-items-start flex-column">
            {/* <span className="text-muted mt-1 fw-semibold fs-7">[{data.length} Staffs and Family Members]</span> */}
            <span className="text-muted mt-1 fw-semibold fs-7">[{recievedData.length} Staffs and Family Members]</span>

          </h3>
          <div className="card-toolbar">
            <a href="/" className="btn btn-sm btn-light-primary">
              <KTIcon iconName="plus" className="fs-2" />
              New Entry
            </a>
          </div>
          <div className="card-toolbar">
            <a href="/" className="btn btn-sm btn-primary">
              <KTIcon iconName="file-down" className="fs-2" />
              Export to Excel
            </a>
          </div>
        </div>
        <div className="card-body">
          <MaterialReactTable
            columns={columns}
            data={recievedData}
            enableDensityToggle={false}
            enablePinning
            enableColumnFilters
            enableColumnOrdering
            enableRowActions
            enableGrouping
            initialState={{ showColumnFilters: false, columnPinning: { left: ['name'] } }}
            positionToolbarAlertBanner="bottom"
            editingMode="row"
            enableEditing
            positionActionsColumn="last"
            renderRowActions={({ row, table }) => [
              <Box sx={{ justifyContent: 'center' }}>
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit className="text-success" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setData((prevData) => prevData.filter((item) => item.policyNo !== row.original.policyNo));
                  }}
                >
                  <Delete className="text-danger" />
                </IconButton>
              </Box>,
            ]}
            filterFns={{
              dateFilter: (row, columnId, filterValue) => {
                const filterArray = filterValue.replaceAll(',', ';').split(';');
                const cellVal = new Date(row.original[columnId]);
                const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
                for (let item of filterArray) {
                  const itemArray = item.replaceAll(/\s+/g, '#').split('#');
                  if (cellVal.getFullYear().toString() === itemArray[itemArray.length - 1]) {
                    for (let i = 0; i < itemArray.length - 1; i++) {
                      if (itemArray[i].includes(monthName[cellVal.getMonth()])) return true;
                    }
                  }
                }
                return false;
              },
              multipleFilter: (row, columnId, filterValue) => {
                const filterArray = filterValue.replaceAll(',', ';').split(';');
                const cellVal = row.original[columnId];
                for (let item of filterArray) {
                  if (cellVal.toLowerCase().includes(item.toLowerCase())) return true;
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
                borderSpacing: '0px 2px',
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
              className: 'px-7 py-4 text-black',
              sx: {
                verticalAlign: 'middle',
                backgroundColor: '#E6BBB2 !important',
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
              FullscreenIcon: () => <KTIcon iconName="maximize" className="fs-2 text-white" />,
              FullscreenExitIcon: () => <KTIcon iconName="cross-circle" className="fs-2 text-white" />,
              ViewColumnIcon: () => <KTIcon iconName="status" className="fs-2 text-white" />,
              FilterListIcon: () => <KTIcon iconName="filter-search" className="fs-2 text-white" />,
              FilterListOffIcon: () => <KTIcon iconName="filter-search" className="fs-2 text-white" />,
              SearchIcon: () => <KTIcon iconName="search-list" className="fs-2 text-white" />,
              CloseIcon: () => <KTIcon iconName="cross" className="fs-2 text-black" />,
            }}
            muiTablePaginationProps={{
              className: 'text-white',
            }}
            enableGlobalFilter={false}
            muiToolbarAlertBannerProps={{
              className: 'text-white',
              sx: {
                backgroundColor: '#143983',
              },
            }}
            muiToolbarAlertBannerChipProps={{
              className: 'text-white',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InsuredStaffTable;





























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
// import { Delete, Edit } from '@mui/icons-material';

// //Mock Data
// import { data } from './makeData';

// import {KTIcon} from '../../../_metronic/helpers'

// export type StaffDetails = {
//   policyNo: number
//   name: string
//   familyName: string
//   relationship: string
//   dob: string
//   gender: string
//   maritalStatus: string
//   nationality: string
//   company: string
//   avatar?: string
// };

// const InsuredStaffTable = () => {
//   const [recievedData,setData] = useState<StaffDetails[]>(data)
//   const columns = useMemo<MRT_ColumnDef<StaffDetails>[]>(
//     () => [
//     // {
//     //     id: 'Staff', //id used to define `group` column
//     //     header: 'Staff',
//     //     columns: [
//             {
//                 accessorKey: 'policyNo', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'Policy Number',
//                 size:200,
//                 enableGrouping: false,
//                 enablePinning: false,
//             },
//             {
//                 accessorFn: (row) => `${row.name}`, //accessorFn used to join multiple data into a single cell
//                 id: 'name', //id is still required when using accessorFn instead of accessorKey
//                 header: 'Name',
//                 size: 250,
//                 filterFn: 'multipleFilter',
//                 enableGrouping: false,
//                 enablePinning: true,
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
//                     <img
//                     alt="avatar"
//                     height={30}
//                     src={row.original.avatar 
//                         ?? 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg'}
//                     loading="lazy"
//                     style={{ borderRadius: '50%' }}
//                     />
//                     {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
//                     <span>{renderedCellValue}</span>
//                 </Box>
//                 ),
//             },
//             {
//                 accessorKey: 'familyName', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'Family Name',
//                 size: 250,
//                 enableGrouping: true,
//                 enablePinning: false,
//             },
//             {
//                 accessorKey: 'relationship', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'Relationship',
//                 size: 200,
//                 enableGrouping: false,
//                 enablePinning: false,
//             },
//     //     ],
//     // },

//     // {
//     //     id: 'PersonalDetails',
//     //     header: 'Personal Details',
//     //     columns: 
//     //     [
//             {
//                 accessorKey: 'gender',
//                 header: 'Gender',
//                 size: 150,
//                 enableGrouping: true,
//                 enablePinning: false,
//             },
//             {
//                 accessorFn: (row) => new Date(row.dob), //convert to Date for sorting and filtering
//                 id: 'dob',
//                 header: 'Date of Birth',
//                 enableGrouping: false,
//                 enablePinning: false,
//                 filterFn: 'dateFilter',
//                 sortingFn: 'datetime',
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
//                 accessorKey: 'maritalStatus',
//                 header: 'Marital Status',
//                 size: 200,
//                 enableGrouping: false,
//                 enablePinning: false,
//             },
//             {
//                 accessorKey: 'nationality',
//                 header: 'Nationality',
//                 size: 200,
//                 enableGrouping: true,
//                 enablePinning: false,
//             },
//             {
//                 accessorKey: 'company',
//                 header: 'Place of Work',
//                 size: 200,
//                 enableGrouping: true,
//                 enablePinning: false,
//             },
//         // ],
//     // },
// ],[]);

//   return (
//     <>
    
//     <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Insurance Details</h5>
//         <div className={`card`}>
//             {/* begin::Header */}
//             <div className='card-header border-0 pt-5 pb-2'>
//             <h3 className='card-title align-items-start flex-column'>
//                 {/* <span className='card-label fw-bold fs-3 mb-1'>Insurance Details</span> */}
//                 <span className='text-muted mt-1 fw-semibold fs-7'>[{data.length} Staffs and Family Members]</span>
//             </h3>
//             <div className='card-toolbar'>
//                 <a href='/' className='btn btn-sm btn-light-primary'>
//                 <KTIcon iconName='plus' className='fs-2' />
//                 New Entry
//                 </a>
//             </div>
//             <div className='card-toolbar'>
//                 <a href='/' className='btn btn-sm btn-primary'>
//                 <KTIcon iconName='file-down' className='fs-2' />
//                 Export to Excel
//                 </a>
//             </div>
//             </div>
//             {/* end::Header */}
//             <div className='card-body'>
//                 <MaterialReactTable
//                 columns={columns}
//                 data={recievedData}
//                 enableDensityToggle={false}
//                 enablePinning
//                 enableColumnFilters
//                 enableColumnOrdering
//                 enableRowActions
//                 enableGrouping
//                 initialState={{ showColumnFilters: false, columnPinning: {left: ['name']}}}
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
//                 editingMode='row'
//                 enableEditing

//                 positionActionsColumn='last'
//                 renderRowActions={({ row,table }) => [
//                     <Box sx={{ justifyContent: 'center' }}>
//                         <IconButton
//                             onClick={() => table.setEditingRow(row)}
//                         >
//                             <Edit className='text-success'/>
//                         </IconButton>
//                         <IconButton
//                             onClick={() => {
//                                 data.splice(row.index, 1); //assuming simple data table
//                                 setData([...data]);
//                             }}
//                         >
//                             <Delete className='text-danger'/>
//                         </IconButton>
//                     </Box>
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
//                     },
//                     multipleFilter: (row, columnId, filterValue) => {
//                         const filterArray = filterValue.replaceAll(',',';').split(';')
//                         const cellVal = row.getValue<String>(columnId)
//                         for(let item of filterArray){
//                             if (cellVal.toLocaleLowerCase().includes(item.toLocaleLowerCase()))
//                                 return true
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
//                         borderSpacing: '0px 2px',
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
//                     className: 'px-7 py-4 text-black',
//                     sx: {
//                         verticalAlign: 'middle',
//                         backgroundColor: '#E6BBB2 !important',
//                         outline: '10px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
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
//                     }
//                 }}
//                 muiToolbarAlertBannerChipProps={{
//                     className: 'text-white'
//                 }}
//                 />
//             </div>
//         </div>
//         </>
//   );
// };

// export default InsuredStaffTable;