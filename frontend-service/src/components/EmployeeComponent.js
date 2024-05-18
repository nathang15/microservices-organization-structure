import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class EmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employee: {},
            department: {},
            organization: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            this.setState({ employee: res.data.employee });
            this.setState({ department: res.data.department });
            this.setState({ organization: res.data.organization });

            console.log(this.state.employee);
            console.log(this.state.department);
            console.log(this.state.organization);
        });     
    }
  render() {
    return (
      <div>
        <br></br>
        <div className='card col-md-6 offset-md-3'>
            <h3 className='text-center card-header'>Employee Details </h3>
            <div className='card-body'>
                <div className='row'>
                    <p><strong>First Name: {this.state.employee.firstName}</strong></p>
                </div>
                <div>
                    <p><strong>Last Name: {this.state.employee.lastName}</strong></p>
                </div>
                <div>
                    <p><strong>Email: {this.state.employee.email}</strong></p>
                </div>
            </div>
            <br></br>
            <h3 className='text-center card-header'> Department Details </h3>
            <div className='card-body'>
                <div className='row'>
                    <p><strong>Name: {this.state.department.departmentName}</strong></p>
                </div>
                <div>
                    <p><strong>Description: {this.state.employee.departmentDescription}</strong></p>
                </div>
                <div>
                    <p><strong>Code: {this.state.employee.departmentCode}</strong></p>
                </div>
            </div>
            <br></br>
            <h3 className='text-center card-header'> Organization Details </h3>
            <div className='card-body'>
                <div className='row'>
                    <p><strong>Name: {this.state.organization.organizationName}</strong></p>
                </div>
                <div>
                    <p><strong>Description: {this.state.employee.organizationDescription}</strong></p>
                </div>
                <div>
                    <p><strong>Code: {this.state.employee.organizationCode}</strong></p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
