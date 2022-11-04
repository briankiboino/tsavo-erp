import { Resource, RowAttributeType } from "../domain/enums";
import { TableRowAttributes } from "../domain/models";

export const caseAttributes: Array<TableRowAttributes> = [
  {
    key: "phone_number",
    rowAttributeType: RowAttributeType.default,
    label: "Phone Number",
    resource: Resource.case,
  },
  {
    key: "name",
    rowAttributeType: RowAttributeType.default,
    label: "Name",
    resource: Resource.case,
  },
  {
    key: "applied_loan",
    rowAttributeType: RowAttributeType.money,
    label: "Applied Loan",
    resource: Resource.case,
  },
  {
    key: "loan_limit",
    rowAttributeType: RowAttributeType.money,
    label: "Loan Limit",
    resource: Resource.case,
  },
  {
    key: "audited",
    rowAttributeType: RowAttributeType.default,
    label: "Audited",
    resource: Resource.case,
  },
  {
    key: "date_created",
    rowAttributeType: RowAttributeType.dateTime,
    label: "Date Created",
    resource: Resource.case,
  },
  {
    key: "last_login",
    rowAttributeType: RowAttributeType.dateTime,
    label: "Last Login",
    resource: Resource.case,
  },
  {
    key: "disburse",
    rowAttributeType: RowAttributeType.badge,
    label: "Disburse",
    resource: Resource.case,
  },
  {
    key: "status",
    rowAttributeType: RowAttributeType.badge,
    label: "Status",
    resource: Resource.case,
  },
  {
    key: "check",
    rowAttributeType: RowAttributeType.action,
    label: "Actions",
    resource: Resource.case,
  }
];
