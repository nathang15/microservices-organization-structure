package company.organizationservice.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Schema(
        description = "OrganizationDto Model Info"
)
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationDto {
    private Long id;
    @Schema(
            description = "Org Name"
    )
    private String organizationName;
    @Schema(
            description = "Org Description"
    )
    private String organizationDescription;
    @Schema(
            description = "Org Code"
    )
    private String organizationCode;
    @Schema(
            description = "Org CreatedDate"
    )
    private LocalDateTime createdDate;
}
