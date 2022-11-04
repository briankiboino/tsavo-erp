import { EnumStatus, Resource, RowAttributeType } from "@enums/index";

interface Customer {
  id: string;
  phone_number: string;
  name: string;
  applied_loan: string;
  loan_limit: string;
  audited: string;
  date_created: string;
  last_login: string;
  disburse: string;
  status: string;
}

interface PaginatedData {
  currentPage: number;
  previousPage: number;
  perPage: number;
  nextPage: number;
  totalPages: number;
  totalRecords: number;
  data: any;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface TableRowAttributes {
  key: string;
  rowAttributeType: RowAttributeType;
  label: string;
  resource: Resource;
}

interface Enum {
  label: string;
  key: string;
  status: EnumStatus;
  value: string;
}

export type {
  Customer,
  PaginatedData,
  UserCredentials,
  TableRowAttributes,
  Enum,
};
