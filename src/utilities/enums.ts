import { EnumStatus } from "../domain/enums";
import { Enum } from "../domain/models";

export const caseEnums: Array<Enum> = [
    {
        label: "DISBURSED",
        key: "disburse",
        value: "disbursed",
        status: EnumStatus.positive,
    },
    {
        label: "PENDING",
        key: "disburse",
        value: "pending",
        status: EnumStatus.negative,
    },
    {
        label: "Active",
        key: "status",
        value: "active",
        status: EnumStatus.positive,
    },
    {
        label: "Inactive",
        key: "status",
        value: "inactive",
        status: EnumStatus.negative,
    }
]