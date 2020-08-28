import React, { useState, useEffect } from 'react';
import { Form, Badge, Button } from 'react-bootstrap';
import { Plus, AlignCenter, Clipboard, User, DollarSign, Trash } from 'react-feather';
import WorkModal from './WorkModal';

import Preview from './Preview';

export default(props) => {
  const [input, setInput] = useState({
    logo: '',
    company: '',
    companyDescription: 'Modern Web Development',
    firstName: 'Sean',
    lastName: 'Wines',
    address1: '604 S Evans St',
    address2: '',
    city: 'San Diego',
    state: 'CA',
    zip: '92113',
    website: '',
    email: 'seanwinesdev@gmail.com',
    phone: '719 238 1602',
    invoiceId: '01',
    projectName: 'test',
    invoiceDate: '01.01.20',
    clientCompany: 'test',
    clientContact: 'test',
    clientContactEmail: 'test@test.com',
    clientAddress1: '123',
    clientAddress2: '123',
    clientCity: '',
    clientState: '',
    clientZip: '',
    work: [],
    total: 0
  })

  const handleInputChange = event => {
   const { name } = event.target;

   setInput({
     ...input,
     [name]: event.target.value
   });

   console.log(input)
  }

  const handleAddToWork = (obj, idx) => {
    // Clean up

    if (idx >= 0) {
      let diff = (+input.total - +input.work[idx].amount)
      input.work[idx] = obj;
      setInput({
        ...input,
        work: input.work,
        total: (diff + +obj.amount)
      })
    } else {
      setInput({
        ...input,
        work: [...input.work, obj],
        total: (+input.total + +obj.amount)
      });
    }   
  }

  const handleDeleteWorkItem = (idx) => {
    const lostAmount = input.work[idx].amount;
    input.work.splice(idx, 1);

    setInput({
      ...input,
      work: input.work,
      total: (+input.total - lostAmount)
    });
  }

  return(
    <div>
      <form className="w-50 mt-4 form">
        <div>
            {/* <Badge className="mb-2" pill variant="primary"><h4 className="mb-0"><AlignCenter /> Header</h4></Badge> */}
            <h2 className="area-header"><AlignCenter /> Header</h2>

            <Form.Group>
              <Form.Label>Logo</Form.Label>
              <Form.Control name="logo" type="text" value={input.logo} onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company (leave blank if no company)</Form.Label>
              <Form.Control name="company" type="text" value={input.company} onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company/Job Desciption</Form.Label>
              <Form.Control name="companyDescription" type="text" value={input.companyDescription}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" type="text" value={input.firstName} onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" type="text" value={input.lastName}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address line 1</Form.Label>
              <Form.Control name="address1" type="text" value={input.address1}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address line 2</Form.Label>
              <Form.Control name="address2" type="text" value={input.address2}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control name="city" type="text" value={input.city}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control name="state" type="text" value={input.state}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Zip</Form.Label>
              <Form.Control name="zip" type="number" value={input.zip}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Website url</Form.Label>
              <Form.Control name="website" type="text" value={input.website}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control name="email" type="email" value={input.email}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>phone</Form.Label>
              <Form.Control name="phone" type="phone" value={input.phone}  onChange={ handleInputChange } />
            </Form.Group>
        </div>

        <div>
          {/* <Badge className="mb-2 mt-5" pill variant="primary"><h4 className="mb-0"><Clipboard /> Invoice</h4></Badge> */}
          <h2 className="area-header"><Clipboard /> Invoice</h2>

            <Form.Group>
              <Form.Label>Invoice Title</Form.Label>
              <Form.Control name="invoiceName" type="text" value={input.invoiceName}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control name="projectName" type="text" value={input.projectName}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control name="invoiceDate" type="text" value={input.invoiceDate}  onChange={ handleInputChange } />
            </Form.Group>
        </div>

        <div>
          {/* <Badge className="mb-2 mt-5" pill variant="primary"><h4 className="mb-0"><User /> Client</h4></Badge> */}
          <h2 className="area-header"><User /> Client</h2>

            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control name="clientCompany" type="text" value={input.clientCompany}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control name="clientContact" type="text" value={input.clientContact}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact Email</Form.Label>
              <Form.Control name="clientContactEmail" type="email" value={input.clientContactEmail}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address 1</Form.Label>
              <Form.Control name="clientAddress1" type="text" value={input.clientAddress1}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address 2</Form.Label>
              <Form.Control name="clientAddress2" type="text" value={input.clientAddress2}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control name="clientZip" type="text" value={input.clientZip}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control name="clientState" type="text" value={input.clientState}  onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group>
              <Form.Label>Zip</Form.Label>
              <Form.Control name="clientZip" type="text" value={input.clientZip}  onChange={ handleInputChange } />
            </Form.Group>
        </div>

        <div>
        {/* <Badge className="mb-2" pill variant="primary"><h4 className="mb-0"><DollarSign /> Work</h4></Badge> */}
        <h2 className="area-header"><DollarSign /> Work</h2>
        <WorkModal edit={ false } save={ handleAddToWork } />
        
        <table className="table">
          <tbody>
            { input.work.length > 0 && 
              input.work.map((item, idx) => {
                return (
                  <tr key={ idx }>
                    <td width="60%">{ item.description }</td>
                    <td width="27%">${ item.amount + ' ' + item.unit }</td>
                    <td width="18%" className="text-right">
                      <WorkModal save={ handleAddToWork } edit={ true } data={ item } index={ idx } />
                      <Trash onClick={ () => handleDeleteWorkItem(idx) } size={ 14 } className="ml-2" />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


        </div>
      </form>

      <Preview input={ input }/>
    </div>
  )
}
