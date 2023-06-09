import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent width="auto" dataSource={customersData} allowPaging allowSorting editSettings={{ allowDeleting: true, allowEditing: true }} toolbar={['Delete']}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customers