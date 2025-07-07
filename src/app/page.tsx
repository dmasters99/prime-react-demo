import {
  DataTable,
} from 'primereact/datatable'
import { Column } from 'primereact/column'
// Uncomment below does not help
// import 'primereact/resources/primereact.css'

export default function Home() {
  const rows = [
    { name: 'John Doe', age: 30, address: '123 Main St' },
    { name: 'Jane Smith', age: 25, address: '456 Elm St' },
    { name: 'Jim Beam', age: 40, address: '789 Oak St' },
  ]
  return (
    <div>
      <DataTable
        className="!w-full bg-primary-300"
        value={rows}
        tableStyle={{ minWidth: '100%', width: '100%' }}
      >
        <Column 
          sortable={true}
          field="name"
          header="Name"
        />
        <Column 
          sortable={true}
          field="age"
          header="Age"
        />
        <Column 
          sortable={true}
          field="address"
          header="Address"
        />
      </DataTable>
    </div>
  );
}
