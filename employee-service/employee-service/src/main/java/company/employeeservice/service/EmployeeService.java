package company.employeeservice.service;

import company.employeeservice.dto.APIResponseDto;
import company.employeeservice.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto saveEmployee(EmployeeDto employeeDto);

    APIResponseDto getEmployeeById(Long id);
}
