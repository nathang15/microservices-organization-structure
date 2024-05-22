package company.employeeservice.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Schema(
        description = "EmployeeDto Model Info"
)
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long id;
    @Schema(
            description = "First Name"
    )
    private String firstName;
    @Schema(
            description = "Last Name"
    )
    private String lastName;

    @Column(unique = true, nullable = false)
    @Schema(
            description = "Email"
    )
    private String email;
    @Schema(
            description = "Department Code"
    )
    private String departmentCode;
    @Schema(
            description = "Org Code"
    )
    private String organizationCode;
}
