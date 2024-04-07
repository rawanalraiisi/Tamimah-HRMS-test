import React, { useMemo, FC, useState } from 'react';

// MRT Imports
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';

// Material UI Imports
import { Box, IconButton } from '@mui/material';

// Mock Data
import { data } from './makeData';

// Helper Icon
import { KTIcon } from '../../../_metronic/helpers';

export type NotificationDetails = {
  name: string;
  dept: string;
  emailID: string;
  noDays: number;
  startDate: string;
  endDate: string;
  leaveType: string;
  approval: string;
  comments?: string;
  avatar?: string;
};

const LeaveNotificationTable: FC = () => {
  const [recievedData, setData] = useState<NotificationDetails[]>(data);

  const columns = useMemo<MRT_ColumnDef<NotificationDetails>[]>(
    () => [
      {
        accessorFn: (row) => `${row.name}`, //accessorFn used to join multiple data into a single cell
        id: 'name',
        header: 'Name',
        size: 250,
        filterFn: 'multipleFilter',
        enableGrouping: true,
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
        accessorKey: 'dept',
        header: 'Department',
        size: 200,
        enableGrouping: false,
        enablePinning: false,
      },
      {
        accessorKey: 'emailID',
        header: 'Email ID',
        size: 250,
        enableGrouping: false,
        enablePinning: false,
      },
      {
        accessorKey: 'noDays',
        header: 'No. Leave Days',
        size: 200,
        enableGrouping: false,
        enablePinning: false,
      },
      {
        accessorFn: (row) => new Date(row.startDate),
        id: 'StartDate',
        header: 'Start Date',
        filterFn: 'dateFilter',
        sortingFn: 'datetime',
        size: 200,
        enablePinning: false,
        enableGrouping: false,
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
        Header: ({ column }) => <em>{column.columnDef.header}</em>,
      },
      {
        accessorFn: (row) => new Date(row.endDate),
        id: 'EndDate',
        header: 'End Date',
        filterFn: 'dateFilter',
        sortingFn: 'datetime',
        size: 200,
        enableGrouping: false,
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
        Header: ({ column }) => <em>{column.columnDef.header}</em>,
      },
      {
        accessorKey: 'leaveType',
        header: 'Type of Leave',
        enableGrouping: false,
        enablePinning: false,
        size: 150,
      },
      {
        id: 'approval',
        header: 'Approval Status',
        accessorFn: (row) => `${row.approval}`,
        enableGrouping: true,
        enablePinning: false,
        sortingFn: 'status',
        size: 150,
        Cell: ({ cell }) => {
          type Valtype = {
            value?: string;
          };
          const InsideVal: FC<Valtype> = ({ value }) => {
            if (value === 'Approved') {
              return <span className="badge badge-light-success fs-7 fw-bold">{value}</span>;
            } else if (value === 'Rejected') {
              return <span className="badge badge-light-danger fs-7 fw-bold">{value}</span>;
            } else if (value === 'Pending') {
              return <span className="badge badge-light-warning fs-7 fw-bold">{value}</span>;
            } else {
              return <span> </span>;
            }
          };
          return (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingLeft: '1rem',
              }}
            >
              <InsideVal value={cell ? cell.getValue<string>() : undefined} />
            </Box>
          );
        },
      },
      {
        accessorKey: 'comments',
        header: 'Comments',
        enableGrouping: false,
        enablePinning: false,
        size: 200,
      },
    ],
    []
  );

  return (
    <div className={`card`}>
      <div className="card-header border-0 pt-5 pb-2">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Leave Notifications</span>
          <span className="text-muted mt-1 fw-semibold fs-7">[{recievedData.length} entries]</span>
        </h3>
        <div className="card-toolbar">
          <a href="/" className="btn btn-sm btn-light-primary">
            <KTIcon iconName="plus" className="fs-2" />
            New Entry
          </a>
        </div>
      </div>
      <div className="card-body">
        <MaterialReactTable
          columns={columns}
          data={recievedData}
          enableDensityToggle={false}
          enableColumnFilters
          enableColumnOrdering
          enableGrouping
          enablePinning
          enableRowActions
          initialState={{
            showColumnFilters: false,
            sorting: [
              { id: 'approval', desc: true },
              { id: 'StartDate', desc: false },
            ],
            expanded: true,
            columnPinning: { left: ['name'] },
          }}
          positionToolbarAlertBanner="bottom"
          positionActionsColumn="last"
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px', justifyContent: 'center' }}>
              <>
                {row.original.approval !== 'Approved' ? (
                  <IconButton color="primary" onClick={() => null}>
                    <KTIcon iconName="check-circle" className="fs-2 text-success" />
                  </IconButton>
                ) : null}
              </>
              <>
                {row.original.approval !== 'Rejected' ? (
                  <IconButton color="secondary" onClick={() => null}>
                    <KTIcon iconName="cross-circle" className="fs-2 text-danger" />
                  </IconButton>
                ) : null}
              </>
            </Box>
          )}
          displayColumnDefOptions={{
            'mrt-row-actions': {
              header: 'Approval Action',
              size: 100,
              muiTableHeadCellProps: {
                className: 'px-7 py-4 text-black',
                sx: {
                  justifyContent: 'center',
                  verticalAlign: 'middle',
                  backgroundColor: '#EBEBD3 !important',
                  outline: '6px',
                  outlineStyle: 'solid',
                  outlineColor: 'var(--bs-light)',
                  outlineOffset: '-5px',
                  borderRadius: '20px',
                },
              },
            },
          }}
          sortingFns={{
            status: (rowA, rowB, columnID) => {
              const valA = rowA.getValue<String>(columnID);
              const valB = rowB.getValue<String>(columnID);
              if (valA === 'Pending' && valB !== 'Pending') {
                return 1;
              } else if (valB === 'Pending' && valA !== 'Pending') {
                return -1;
              } else {
                return valA.toLowerCase() < valB.toLowerCase() ? 1 : -1;
              }
            },
          }}
          filterFns={{
            dateFilter: (row, columnId, filterValue) => {
              const filterArray = filterValue.replaceAll(',', ';').split(';');
              const cellVal = row.getValue<Date>(columnId);
              const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
              for (let item of filterArray) {
                const itemArray = item.replaceAll(/\s+/g, '#').split('#');
                console.log(filterArray, item, itemArray);
                if (cellVal.getFullYear().toString() === itemArray[itemArray.length - 1])
                  for (let i = 0; i < itemArray.length - 1; i++) {
                    if (itemArray[i].includes(monthName[cellVal.getMonth()])) return true;
                  }
              }
              return false;
            },
            multipleFilter: (row, columnId, filterValue) => {
              const filterArray = filterValue.replaceAll(',', ';').split(';');
              const cellVal = row.getValue<String>(columnId);
              for (let item of filterArray) {
                if (cellVal.toLocaleLowerCase().includes(item.toLocaleLowerCase())) return true;
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
  );
};

export default LeaveNotificationTable;





















// import { useMemo , FC, useState } from 'react';

// //MRT Imports
// //import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
// import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

// //Material UI Imports
// import { Box, IconButton } from '@mui/material';

// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// //Mock Data
// import { data } from './makeData';

// import {KTIcon} from '../../../_metronic/helpers'

// export type NotificationDetails = {
//     name: string
//     dept: string
//     emailID: string
//     noDays: number
//     startDate: string
//     endDate: string
//     leaveType: string
//     approval: string
//     comments?: string
//     avatar? :string
//   };

// const LeaveNotificationTable = () => {
//   const [recievedData,setData] = useState<NotificationDetails[]>(data)
//   const columns = useMemo<MRT_ColumnDef<NotificationDetails>[]>(
//     () => [
//     // {
//     //     id: 'details', //id used to define `group` column
//     //     header: 'Name',
//     //     columns: [
//             {
//                 accessorFn: (row) => `${row.name}`, //accessorFn used to join multiple data into a single cell
//                 id: 'name',
//                 header: 'Name',
//                 size: 250,
//                 filterFn: 'multipleFilter',
//                 enableGrouping: true,
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
//                 accessorKey: 'dept', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'Department',
//                 size:200,
//                 enableGrouping: false,
//                 enablePinning: false,
//             },
//             {
//                 accessorKey: 'emailID', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'Email ID',
//                 size:250,
//                 enableGrouping: false,
//                 enablePinning: false,
//             },
//     //     ],
//     // },
//     // {   
//     //     id: 'leave',
//     //     header: 'Leave Details',
//     //     columns: [
//             {
//                 accessorKey: 'noDays', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'No. Leave Days',
//                 size:200,
//                 enableGrouping: false,
//                 enablePinning: false,
//             },
//             {
//                 accessorFn: (row) => new Date(row.startDate), //convert to Date for sorting and filtering
//                 id: 'StartDate',
//                 header: 'Start Date',
//                 filterFn: 'dateFilter',
//                 sortingFn: 'datetime',
//                 size: 200,
//                 enablePinning: false,
//                 enableGrouping: false,
//                 Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
//                 Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
//             },
//             {
//                 accessorFn: (row) => new Date(row.endDate), //convert to Date for sorting and filtering
//                 id: 'EndDate',
//                 header: 'End Date',
//                 filterFn: 'dateFilter',
//                 sortingFn: 'datetime',
//                 size: 200,
//                 enableGrouping: false,
//                 Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
//                 Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
//             },
//             {
//                 accessorKey: 'leaveType',
//                 header: 'Type of Leave',
//                 enableGrouping: false,
//                 enablePinning: false,
//                 size: 150,
//             },
//     //     ],
//     // },
//     // {
//     //     id: 'status', //id used to define `group` column
//     //     header: 'Status',
//     //     columns: [
//             {
//                 id: 'approval',
//                 header: 'Approval Status',
//                 accessorFn: (row) => { return `${row.approval}`}, //convert to Date for sorting and filtering
//                 enableGrouping: true,
//                 enablePinning: false,
//                 sortingFn: 'status',
//                 size: 150,
//                 Cell: ({ cell }) => {
//                     type valtype = {
//                         value?: string
//                     }
//                     const InsideVal: FC<valtype> = ({value}) => {
//                         if(value==="Approved"){
//                             return (<span className='badge badge-light-success fs-7 fw-bold'>{value}</span>);
//                         } else if(value==="Rejected"){
//                             return (<span className='badge badge-light-danger fs-7 fw-bold'>{value}</span>);
//                         } else if(value==="Pending"){
//                             return (<span className='badge badge-light-warning fs-7 fw-bold'>{value}</span>);
//                         }
//                         else{
//                             return (<span> </span>);
//                         }
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
//             {
//                 accessorKey: 'comments',
//                 header: 'Comments',
//                 enableGrouping: false,
//                 enablePinning: false,
//                 size: 200,
//             },
//     //     ]
//     // }
// ],[]);

//   return (
//         <div className={`card`}>
//             {/* begin::Header */}
//             <div className='card-header border-0 pt-5 pb-2'>
//             <h3 className='card-title align-items-start flex-column'>
//                 <span className='card-label fw-bold fs-3 mb-1'>Leave Notifications</span>
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
//                 data={recievedData}
//                 enableDensityToggle={false}
//                 enableColumnFilters
//                 enableColumnOrdering
//                 enableGrouping
//                 enablePinning
//                 enableRowActions
//                 initialState={{ 
//                     showColumnFilters: false ,  
//                     // grouping: ["approval"], 
//                     sorting:[
//                         {id: "approval",desc: true},
//                         {id:"StartDate",desc: false},
//                     ],
//                     expanded: true,
//                     columnPinning: {left: ["name"]}
//                 }}
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
//                 positionActionsColumn='last'
//                 renderRowActions={({ row,table }) => [
//                     <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px', justifyContent: 'center' }}>
//                         <>
//                             {row.original.approval!=='Approved'
//                                 ?(
//                                     <IconButton
//                                         color="primary"
//                                         onClick={() => null}
//                                     >
//                                         <KTIcon iconName='check-circle' className='fs-2 text-success' />
//                                     </IconButton>
//                                 ) :null
//                             }
//                         </>
//                         <>
//                             {row.original.approval!=='Rejected'
//                                 ?(
//                                     <IconButton
//                                         color="secondary"
//                                         onClick={() => null}
//                                     >
//                                         <KTIcon iconName='cross-circle' className='fs-2 text-danger' />
//                                     </IconButton>
//                                 ) :null
//                             }
//                         </>
//                     </Box>
//                 ]}
//                 displayColumnDefOptions={{
//                     'mrt-row-actions': {
//                         header: 'Approval Action',
//                         size: 100,
//                         muiTableHeadCellProps: {
//                             className: 'px-7 py-4 text-black',
//                             sx: {
//                                 justifyContent: 'center',
//                                 verticalAlign: 'middle',
//                                 backgroundColor: '#EBEBD3 !important',
//                                 outline: '6px',
//                                 outlineStyle: 'solid',
//                                 outlineColor: 'var(--bs-light)',
//                                 outlineOffset: '-5px',
//                                 borderRadius: '20px',
//                             }
//                         }
//                       },
//                 }}
//                 sortingFns={{
//                     status: (rowA,rowB,columnID) => {
//                         const valA = rowA.getValue<String>(columnID)
//                         const valB = rowB.getValue<String>(columnID)
//                         if(valA==='Pending' && valB!=='Pending'){
//                             return 1
//                         }
//                         else if(valB==='Pending' && valA!=='Pending'){
//                             return -1
//                         }
//                         else {
//                             return valA.toLowerCase() < valB.toLowerCase() ?1 :-1
//                         }
//                     }
//                 }}
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
//                     }
//                 }}
//                 muiToolbarAlertBannerChipProps={{
//                     className: 'text-white'
//                 }}
//                 />
//             </div>
//         </div>
//   );
// };

// export default LeaveNotificationTable;