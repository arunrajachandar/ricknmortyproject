import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
//import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import './Episodes.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';





const styValues = (cell, row, rowIndex, colIndex) => {
  if (rowIndex % 2 === 0) {
    return {
      backgroundColor: '#fff',
      fontSize: '1rem',
    
    };
  }
  return {
    backgroundColor: '#D3D3D3',
    fontSize: '1rem'
  };
}
const headerStyle={
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: '#D3D3D3'
}
const { SearchBar } = Search;
const columns = [{
    dataField: 'id',
    text: 'ID',
    style: styValues,
    headerStyle: headerStyle
  }, {
    dataField: 'name',
    text: 'Name',
    sort: true,
    style: styValues,
    headerStyle: headerStyle
    // formatter: (cell, row) => types[cell]
  },
{
    dataField: 'air_date',
    text: 'Air Date',
    sort: true,
    style: styValues,
    headerStyle: headerStyle
},
{
    dataField: 'episode',
    text:'S-E Number',
    style: styValues,
    headerStyle: headerStyle
}]
class Episodes extends React.Component {
//   state = { products }

//   loadData = () => {
//     this.setState({ products: this.props.rnmInfo.episodes });
//   }

  render() {
    const options = {
      custom: true,
      paginationSize: this.props.rnmInfo.episodes.info.count,
      pageStartIndex: 1,
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      totalSize: this.props.rnmInfo.episodes.results
    };
    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="id"
          columns={ columns }
          data={ this.props.rnmInfo.episodes.results }
          search
        >
          {
            toolkitprops => (
              <div>
                <div className="extendWidth">
                <SearchBar { ...toolkitprops.searchProps } />
                </div>
                <BootstrapTable
                bootstrap4
                  striped
                  hover
                  condensed
                  { ...toolkitprops.baseProps }
                  { ...paginationTableProps }
                  loading={ true } 
                />
              </div>
            )
          }
        </ToolkitProvider>
        <div className="floatRight">
          
        <PaginationListStandalone { ...paginationProps } />

        </div>
      </div>
    );

    return (
      <div className="fadeIn"> 
        <PaginationProvider
          pagination={
            paginationFactory(options)
          }
        >
          { contentTable }
        </PaginationProvider>
      </div >
    );
  }
// render(){
//  return   <h1>Hello</h1>
// }
}

export default Episodes;