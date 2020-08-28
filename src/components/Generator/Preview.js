import React from 'react';

import '../Theme/default.scss'

export default(props) => {
  const { input } = props;

  return (
    <div className="preview-container">
      <div className="preview-panel default-theme">
        <div className="d-flex">
          <div className="mr-auto">
            <h6>{ input.company.length ? input.comapany : input.firstName + ' ' + input.lastName }</h6>
            <h6>{ input.companyDescription }</h6>
          </div>

          <div>
            <p>{ input.firstName + ' ' + input.lastName }</p>
            <p>{ input.address1 }</p>
            <p>{ input.address2 }</p>
            <p>{ input.city + ', ' + input.state + ' ' + input.zip }</p>
            <p>-</p>
            <p>{ input.website }</p>
            <p>{ input.email }</p>
            <p>{ input.phone }</p>
          </div>
        </div>

        <div className="mt-2">
          <h4>INVOICE</h4>
          <p>#{ input.invoiceId }</p>
          <p>PROJECT NAME: { input.projectName.toUpperCase() }</p>
        </div>

        <div className="mt-4 d-flex">
          <div className="flex-1">
            <h6>CLIENT</h6>
            <p>{ input.clientCompany }</p>
            <p>{ input.clientContact }</p>
            <p>{ input.clientContactEmail }</p>
            <p>{ input.clientAddress1 }</p>
            <p>{ input.clientAddress2 }</p>
            <p>{ input.clientCity }</p>
            <p>{ input.clientState }</p>
            <p>{ input.clientZip }</p>
          </div>

          <div className="flex-2">
            <h6>INVOICE DATE</h6>
            <p>{ input.invoiceDate }</p>
          </div>
        </div>

        <div className="mt-4">
          {input.work.length > 0 && <table className="table">
            <thead>
              <tr>
                <th width="70%">Invoice { input.work.length > 1 ? 'Items' : 'Item' }</th>
                <th width="30%">Amount</th>
              </tr>
            </thead>
            <tbody>
              { input.work.map((item, idx) => { 
                  return (
                    <tr key={ idx }>
                      <td width="70%">{ item.description }</td>
                      <td width="30%">${ item.amount + ' ' + item.unit }</td>
                    </tr>
                  )
                })
              }

              <tr>
                <td></td>
                <td><h5 className="d-inline-block">Total: <strong>${ input.total }</strong></h5></td>
              </tr>
            </tbody>
          </table>}
        </div>
      </div>
    </div>
  )
}
