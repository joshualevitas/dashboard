import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'

// dummy data
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy'


const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent width="auto" dataSource={employeesData} allowPaging allowSorting toolbar={['Search']}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees