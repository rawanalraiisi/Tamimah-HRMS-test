import React, { useMemo, useState } from 'react';
import moment from 'moment';
import { Autocomplete, Box, IconButton, TextField } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { KTIcon } from '../../../_metronic/helpers';
import { Finesdata } from './makeData';
import { MaterialReactTable } from 'material-react-table';

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const VehicleFinesTable = () => {
  const [data, setData] = useState(Finesdata);
  const yearOptions = ['2020', '2021', '2022', '2023', '2024'];
  const nowDate = new Date();
  const [year, setYear] = useState(nowDate.getFullYear());

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.model}`,
        id: 'model',
        header: 'Name',
        size: 200,
        enablePinning: true,
        filterFn: 'multipleFilter',
        muiTableBodyCellProps: {
          style: {
            paddingLeft: '1rem',
          },
        },
        muiTableHeadCellProps: {
          className: 'px-7 py-3 text-black',
          sx: {
            backgroundColor: '#E6BBB2 !important',
            outline: '10px',
            outlineStyle: 'solid',
            outlineColor: 'var(--bs-light)',
            outlineOffset: '-5px',
            borderRadius: '20px',
          },
        },
      },
      {
        id: 'carRegNo',
        accessorKey: 'carRegNo',
        header: 'Car Plate Number',
        size: 200,
        enablePinning: true,
        muiTableHeadCellProps: {
          className: 'px-7 py-3 text-black',
          sx: {
            backgroundColor: '#E6BBB2 !important',
            outline: '10px',
            outlineStyle: 'solid',
            outlineColor: 'var(--bs-light)',
            outlineOffset: '-5px',
            borderRadius: '20px',
          },
        },
      },
      {
        id: 'other Details',
        header: 'Car Details',
        muiTableHeadCellProps: {
          className: 'px-7 py-4 text-black',
          sx: {
            backgroundColor: '#9EC3E5 !important',
            outline: '6px',
            outlineStyle: 'solid',
            outlineColor: 'var(--bs-light)',
            outlineOffset: '-5px',
            borderRadius: '20px',
          },
        },
        columns: [
          {
            accessorKey: 'year',
            header: 'Year',
            size: 150,
            enablePinning: false,
            muiTableHeadCellProps: {
              className: 'px-7 py-3 text-black',
              sx: {
                backgroundColor: '#9EC3E5 !important',
                outline: '6px',
                outlineStyle: 'solid',
                outlineColor: 'var(--bs-light)',
                outlineOffset: '-5px',
                borderRadius: '20px',
              },
            },
          },
          {
            accessorKey: 'insurance',
            header: 'Insurance Amt',
            size: 150,
            enablePinning: false,
            muiTableHeadCellProps: {
              className: 'px-7 py-3 text-black',
              sx: {
                backgroundColor: '#9EC3E5 !important',
                outline: '6px',
                outlineStyle: 'solid',
                outlineColor: 'var(--bs-light)',
                outlineOffset: '-5px',
                borderRadius: '20px',
              },
            },
          },
        ],
      },
    ],
    [year]
  );

  return (
    <div className={`card`}>
      <div className='card-header border-0 pt-5 pb-2'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Vehicle Fines for the year 2023</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>[{Finesdata.length} staffs]</span>
        </h3>
        <div className='card-toolbar'>
          <a href='/' className='btn btn-sm btn-light-primary'>
            <KTIcon iconName='plus' className='fs-2' />
            New Entry
          </a>

          <div className='card-toolbar'>
            <a href='/' className='btn btn-sm btn-primary'>
              <KTIcon iconName='file-down' className='fs-2' />
              Export to Excel
            </a>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h2>Enter the Year</h2>
        <div className='row mt-md-2 mt-xl-4 mb-md-4 mb-md-8 mb-5'>
          <div className='col-md-3'>
            <Autocomplete
              color='primary'
              id='year'
              options={yearOptions}
              onInputChange={(event, value) => {
                setYear(parseInt(value ?? nowDate.getFullYear().toString()));
              }}
              onChange={(event, value) => {
                setYear(parseInt(value ?? nowDate.getFullYear().toString()));
              }}
              classes={{
                input: 'text-dark',
              }}
              defaultValue={nowDate.getFullYear().toString()}
              renderInput={(params) => <TextField {...params} required focused label='Year' />}
            />
          </div>
        </div>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableDensityToggle={false}
          enablePinning
          enableColumnFilters
          enableColumnOrdering
          enableRowActions
          initialState={{ showColumnFilters: false, columnPinning: { left: ['Car', 'model', 'carRegNo'] } }}
          positionToolbarAlertBanner='bottom'
          editingMode='row'
          enableEditing
          positionActionsColumn='last'
          renderRowActions={({ row, table }) => [
            <Box sx={{ justifyContent: 'center' }}>
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit className='text-success' />
              </IconButton>
              <IconButton
                onClick={() => {
                  data.splice(row.index, 1);
                  setData([...data]);
                }}
              >
                <Delete className='text-danger' />
              </IconButton>
            </Box>,
          ]}
          displayColumnDefOptions={{
            'mrt-row-actions': {
              id: 'Action',
              header: 'Action',
              size: 75,
              muiTableHeadCellProps: {
                className: 'px-7 py-3 text-black',
                sx: {
                  justifyContent: 'center',
                },
              },
            },
          }}
          filterFns={{
            dateFilter: (row, columnId, filterValue) => {
              const filterArray = filterValue.replaceAll(',', ';').split(';');
              const cellVal = row.getValue(columnId);
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
            multipleFilter: (row, columnId, filterValue) => {
              const filterArray = filterValue.replaceAll(',', ';').split(';');
              const cellVal = row.getValue(columnId);
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
              borderSpacing: '0px 0px',
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
            className: 'px-7 py-3 text-white',
            sx: {
              backgroundColor: 'F5E3E0 !important',
              outline: '6px',
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

export default VehicleFinesTable;




















// import { useMemo , FC, useState } from 'react';
// import moment from 'moment';

// //MRT Imports
// //import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'; //default import deprecated
// import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

// //Material UI Imports
// import { Autocomplete, Box, IconButton, TextField} from '@mui/material';

// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// //Icons Imports
// import { Delete, Edit } from '@mui/icons-material';

// //Mock Data
// import { Finesdata } from './makeData';

// import {KTIcon} from '../../../_metronic/helpers'

// // const monthToNumber = {
// //     "jan": 1,
// //     "feb": 2,
// //     "mar": 3,
// //     "apr": 4,
// //     "may": 5,
// //     "jun": 6,
// //     "jul": 7,
// //     "aug": 8,
// //     "sep": 9,
// //     "oct": 10,
// //     "nov": 11,
// //     "dec": 12,
// // }

// const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

// export type MonthDetails = {
//     fine: number
//     status: boolean
// }

// export type VehicleFinesDetails = {
//   carRegNo: string
//   model: string
//   mrDate: string
//   mrDone: boolean
//   insurance: number
//   year: number
//   jan?: MonthDetails
//   feb?: MonthDetails
//   mar?: MonthDetails
//   apr?: MonthDetails
//   may?: MonthDetails
//   jun?: MonthDetails
//   jul?: MonthDetails
//   aug?: MonthDetails
//   sep?: MonthDetails
//   oct?: MonthDetails
//   nov?: MonthDetails
//   dec?: MonthDetails
// };

// type Prop = {
//     year: number
// }

// // function noCol(year: number) {
// //     const now = moment().toDate();
// //     if(now.getFullYear()>year){
// //         return 12;
// //     }
// //     else if(now.getFullYear()<year){
// //         return 0;
// //     }
// //     else{
// //         return now.getMonth()
// //     }
// // }

// const VehicleFinesTable: FC<Prop> = () => {
//   const [data,setData] = useState<VehicleFinesDetails[]>(Finesdata)
//   const yearOptions = ['2020','2021','2022','2023','2024']
//   const nowDate = new Date()
//   const [year,setYear] = useState<number>(nowDate.getFullYear())

//   const columns: MRT_ColumnDef<VehicleFinesDetails>[]  = useMemo<MRT_ColumnDef<VehicleFinesDetails>[]>(
//     () => [
//     // {
//     //     id: 'Car', //id used to define `group` column
//     //     header: 'Car Details',
//     //     enablePinning: true,
//     //     columns: [
//             {
//                 accessorFn: (row: { model: any; }) => `${row.model}`, //accessorFn used to join multiple data into a single cell
//                 id: 'model', //id is still required when using accessorFn instead of accessorKey
//                 header: 'Name',
//                 size: 200,
//                 enablePinning: true,
//                 filterFn: 'multipleFilter',
//                 muiTableBodyCellProps: {
//                     style: {
//                         paddingLeft: '1rem'
//                     }
//                 },
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         backgroundColor: '#E6BBB2 !important',
//                         outline: '10px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//                 // Cell: ({ renderedCellValue, row }) => (
//                 // <Box
//                 //     sx={{
//                 //     display: 'flex',
//                 //     alignItems: 'center',
//                 //     gap: '1rem',
//                 //     paddingLeft: '1rem',
//                 //     }}
//                 // >
//                 //     {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
//                 //     <span>{renderedCellValue}</span>
//                 // </Box>
//                 // ),

//             },
//             {
//                 id: "carRegNo",
//                 accessorKey: 'carRegNo', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
//                 header: 'Car Plate Number',
//                 size:200,
//                 enablePinning: true,
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         backgroundColor: '#E6BBB2 !important',
//                         outline: '10px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//             },
//     //     ]
//     // },
//     {
//         id: 'other Details', //id used to define `group` column
//         header: 'Car Details',
//         muiTableHeadCellProps: {
//             className: 'px-7 py-4 text-black',
//             sx: {
//                 backgroundColor: '#9EC3E5 !important',
//                 outline: '6px',
//                 outlineStyle: 'solid',
//                 outlineColor: 'var(--bs-light)',
//                 outlineOffset: '-5px',
//                 borderRadius: '20px',
//                 // borderRadius: 'var(--bs-card-border-radius)',
//             }
//         },
//         columns: [
//             {
//                 accessorKey: 'year',
//                 header: 'Year',
//                 size: 150,
//                 enablePinning: false,
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         backgroundColor: '#9EC3E5 !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//             },
//             {
//                 accessorKey: 'insurance',
//                 header: 'Insurance Amt',
//                 size: 150,
//                 enablePinning: false,
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         backgroundColor: '#9EC3E5 !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//             }
//         ],
//     },
//     {    
//         id: 'mulkiyaReg',
//         header: 'Mulkiya Registration',
//         muiTableHeadCellProps: {
//             className: 'px-7 py-4 text-black',
//             sx: {
//                 backgroundColor: '#E6BBB2 !important',
//                 outline: '6px',
//                 outlineStyle: 'solid',
//                 outlineColor: 'var(--bs-light)',
//                 outlineOffset: '-5px',
//                 borderRadius: '20px',
//                 // borderRadius: 'var(--bs-card-border-radius)',
//             }
//         },
//         columns: [
//             {
//                 accessorFn: (row: { mrDate: string | number | Date; }) => new Date(row.mrDate), //convert to Date for sorting and filtering
//                 id: 'RenewalDate',
//                 header: 'Date',
//                 filterFn: 'dateFilter',
//                 sortingFn: 'datetime',
//                 enablePinning: false,
//                 Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
//                 Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         backgroundColor: '#E6BBB2 !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//             },
//             {
//                 id: 'RenewalStatus',
//                 header: 'Status',
//                 filterFn: 'contains',
//                 enablePinning: false,
//                 muiTableHeadCellProps: {
//                     className: 'px-7 py-3 text-black',
//                     sx: {
//                         backgroundColor: '#E6BBB2 !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//                 accessorFn: (row: { mrDate: string | number | Date; mrDone: any; }) => {
//                     const date = new Date(row.mrDate)
//                     const currentDate = moment().format('MM-DD-YYYY');
//                     const difference = moment(currentDate).diff(date, 'days');
//                     if (row.mrDone)
//                         return ('1Completed')
//                     else if(difference>0)
//                         return (`2Overdue by ${difference} days`)
//                     else if(difference<=0 && difference>=-30)
//                         return (`3Due in ${-difference} days`)
//                     else if(difference<=-30)
//                         return (`4Due in ${-difference} days`)
//                     else 
//                         return (`5NA`)
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
//                 }
//             },
//         ],
//     },
//     ...months.map((month) => (
//             {
//                 id: month,
//                 header: month.toUpperCase(),
//                 muiTableHeadCellProps: months.indexOf(month)%2===0 
//                 ?{
//                     className: 'px-7 py-4 text-black',
//                     sx: {
//                         backgroundColor: '#9EC3E5 !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 } 
//                 :
//                 {
//                     className: 'px-7 py-4 text-black',
//                     sx: {
//                         backgroundColor: '#E6BBB2 !important',
//                         outline: '6px',
//                         outlineStyle: 'solid',
//                         outlineColor: 'var(--bs-light)',
//                         outlineOffset: '-5px',
//                         borderRadius: '20px',
//                         // borderRadius: 'var(--bs-card-border-radius)',
//                     }
//                 },
//                 columns:
//                 [
//                     {
//                         accessorKey: `${month}.fine`,
//                         header: 'Fine (OMR)',
//                         muiTableBodyCellProps: months.indexOf(month)%2===0 
//                         ?{
//                             className: 'text-black',
//                             sx: {
//                                 backgroundColor: '#9EC3E5 !important',
//                             }
//                         } 
//                         :
//                         {
//                             className: 'text-black',
//                             sx: {
//                                 backgroundColor: '#E6BBB2 !important',
//                             }
//                         },
//                         size: 150,
//                         enablePinning: false,
//                         muiTableHeadCellProps: months.indexOf(month)%2===0 
//                         ?{
//                             className: 'px-7 py-3 text-black',
//                             sx: {
//                                 backgroundColor: '#9EC3E5 !important',
//                                 outline: '6px',
//                                 outlineStyle: 'solid',
//                                 outlineColor: 'var(--bs-light)',
//                                 outlineOffset: '-5px',
//                                 borderRadius: '20px',
//                                 // borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         } 
//                         :
//                         {
//                             className: 'px-7 py-3 text-black',
//                             sx: {
//                                 backgroundColor: '#E6BBB2 !important',
//                                 outline: '6px',
//                                 outlineStyle: 'solid',
//                                 outlineColor: 'var(--bs-light)',
//                                 outlineOffset: '-5px',
//                                 borderRadius: '20px',
//                                 // borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         },
//                     },
//                     {
//                         id: `${month}status`,
//                         header: 'Status',
//                         muiTableBodyCellProps: months.indexOf(month)%2===0 
//                         ?{
//                             className: 'text-black',
//                             sx: {
//                                 backgroundColor: '#9EC3E5 !important',
//                             }
//                         } 
//                         :
//                         {
//                             className: 'text-black',
//                             sx: {
//                                 backgroundColor: '#E6BBB2 !important',
//                             }
//                         },
//                         enablePinning: false,
//                         muiTableHeadCellProps: months.indexOf(month)%2===0 
//                         ?{
//                             className: 'px-7 py-3 text-black',
//                             sx: {
//                                 backgroundColor: '#9EC3E5 !important',
//                                 outline: '6px',
//                                 outlineStyle: 'solid',
//                                 outlineColor: 'var(--bs-light)',
//                                 outlineOffset: '-5px',
//                                 borderRadius: '20px',
//                                 // borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         } 
//                         :
//                         {
//                             className: 'px-7 py-3 text-black',
//                             sx: {
//                                 backgroundColor: '#E6BBB2 !important',
//                                 outline: '6px',
//                                 outlineStyle: 'solid',
//                                 outlineColor: 'var(--bs-light)',
//                                 outlineOffset: '-5px',
//                                 borderRadius: '20px',
//                                 // borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         },
//                         accessorFn: (row: { [x: string]: any; }) => {
//                             if(row[month as keyof VehicleFinesDetails]===undefined){
//                                 return "NA"
//                             } else{
//                                 if(row[month as keyof VehicleFinesDetails]){
//                                     const monthData = row[month as keyof VehicleFinesDetails];
//                                     if (monthData && typeof monthData !== 'string' && typeof monthData!='number' && typeof monthData!='boolean') {
//                                         return monthData.status ?'Paid' : 'Pending';
//                                     }
//                                 }
//                             }
//                         }, //accessorFn used to join multiple data into a single cell
//                         size: 150,
//                         Cell: ({ cell }) => {
//                             type valtype = {
//                                 value?: string
//                             }
//                             const InsideVal: FC<valtype> = ({value}) => {
//                                 if(value==="Paid"){
//                                         return (<span className='badge badge-light-success fs-7 fw-bold'>{value}</span>);
//                                 } else if(value==="Pending"){
//                                         return (<span className='badge badge-light-warning fs-7 fw-bold'>{value}</span>);
//                                 } else{
//                                 return (<span> </span>);
//                                 }
//                             }
//                             return (
//                                 <Box
//                                     sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     gap: '1rem',
//                                     paddingLeft: '1rem',
//                                     }}
//                                 >
//                                     <InsideVal
//                                         value={cell? cell.getValue<string>() :undefined}
//                                     />
//                                 </Box>
//                             );
//                         }
//                     },
//                 ] as MRT_ColumnDef<VehicleFinesDetails>['columns'],
//             }
//         )),
// ],[year]);

//   return (
//         <div className={`card`}>
//             {/* begin::Header */}
//             <div className='card-header border-0 pt-5 pb-2'>
//             <h3 className='card-title align-items-start flex-column'>
//                 <span className='card-label fw-bold fs-3 mb-1'>Vehicle Fines for the year 2023</span>
//                 <span className='text-muted mt-1 fw-semibold fs-7'>[{Finesdata.length} staffs]</span>
//             </h3>
//             <div className='card-toolbar'>
//                 <a href='/' className='btn btn-sm btn-light-primary'>
//                 <KTIcon iconName='plus' className='fs-2' />
//                 New Entry
//                 </a>

//                 <div className='card-toolbar'>
//                 <a href='/' className='btn btn-sm btn-primary'>
//                 <KTIcon iconName='file-down' className='fs-2' />
//                 Export to Excel
//                 </a>
//             </div>
//             </div>
//             </div>
//             {/* end::Header */}
//             <div className='card-body'>
//             <h2>Enter the Year</h2>
//                 <div className='row mt-md-2 mt-xl-4 mb-md-4 mb-md-8 mb-5'>
//                     <div className='col-md-3'>
//                     <Autocomplete
//                             color="primary"
//                             id='year'
//                             options={yearOptions}
//                             onInputChange={(event, value) => {
//                                 setYear(parseInt(value ?? nowDate.getFullYear().toString()))
//                             }}
//                             onChange={(event,value) => {
//                                 setYear(parseInt(value ?? nowDate.getFullYear().toString()))
//                             }}
//                             classes={{
//                                 input: 'text-dark'
//                             }}
//                             defaultValue={nowDate.getFullYear().toString()}
//                             renderInput={(params) => 
//                                 <TextField
//                                 {...params}
//                                 required
//                                 focused
//                                 label="Year"
//                             />
//                             }
//                         />
//                     </div>
//                 </div>
//                 <MaterialReactTable
//                 columns={columns}
//                 data={data}
//                 enableDensityToggle={false}
//                 enablePinning
//                 enableColumnFilters
//                 enableColumnOrdering
//                 enableRowActions
//                 initialState={{ showColumnFilters: false , columnPinning: {left: ["Car","model","carRegNo"]}}}
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
//                 displayColumnDefOptions={{
//                     'mrt-row-actions': {
//                         id: 'Action',
//                         header: 'Action',
//                         size: 75,
//                         muiTableHeadCellProps: {
//                             className: 'px-7 py-3 text-black',
//                             sx: {
//                                 // backgroundColor: '#404D66 !important',
//                                 justifyContent: 'center',
//                                 // backgroundColor: '#271483 !important',
//                                 // outline: '6px',
//                                 // outlineStyle: 'solid',
//                                 // outlineColor: 'var(--bs-light)',
//                                 // outlineOffset: '-5px',
//                                 // borderRadius: '20px',
//                                 // borderRadius: 'var(--bs-card-border-radius)',
//                             }
//                         }
//                       },
//                 }}

//                 filterFns={{
//                     dateFilter: (row: { getValue: (arg0: any) => any; }, columnId: any, filterValue: string) => {
//                         const filterArray = filterValue.replaceAll(',',';').split(';')
//                         const cellVal = row.getValue(columnId)
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
//                     multipleFilter: (row: { getValue: (arg0: any) => any; }, columnId: any, filterValue: string) => {
//                         const filterArray = filterValue.replaceAll(',',';').split(';')
//                         const cellVal = row.getValue(columnId)
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
//                         borderSpacing: '0px 0px',
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
//                     className: 'px-7 py-3 text-white',
//                     sx: {
//                         backgroundColor: 'F5E3E0 !important',
//                         outline: '6px',
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
//   );
// };

// export default VehicleFinesTable;