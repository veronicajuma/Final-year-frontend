import React from 'react'
import Dashboard from './dashboard';
import BootstrapTable from 'react-bootstrap-table-next';
import styles from '../styles/Child.module.css';
const products = [];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];
 
  
export default function missingchildren() {
    return (
        <div>
           <Dashboard/> 
           <main className ={styles.summary}>
               <div className={styles.child__info}>
                   <div className={styles.child__header}>
                   <span> Missing children information</span>
         </div>
           <BootstrapTable 
           keyField='id' data={[]} columns={ columns } />
           </div>
           </main>
        </div>
    )
}
