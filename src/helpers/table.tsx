/* eslint-disable */
import { caseEnums } from "../utilities/enums";
import Moment from "react-moment";

import { EnumStatus, Resource, RowAttributeType } from "../domain/enums";
import { Enum, TableRowAttributes } from "../domain/models";
import { Link } from "react-router-dom";

const getCaseEnum = (enumValue: string): Enum => {
  var caseEnum: Enum = {
    label: "",
    key: "",
    value: "",
    status: EnumStatus.none,
  };
  caseEnums.map((singleEnum) => {
    if (singleEnum?.value == enumValue) {
      caseEnum = singleEnum;
    }
  });
  return caseEnum;
};

const renderBadge = (resourceEnum: Enum) => {
  let type: string = "";
  switch (resourceEnum.status) {
    case EnumStatus.positive:
      type = "success";
      break;
    case EnumStatus.negative:
      type = "danger";
      break;
    case EnumStatus.none:
      type = "warning";
      break;
    default:
      type = "light";
  }

  return (
    <span className={`badge rounded-pill badge-soft-${type} font-size-12`}>
      {resourceEnum.label}
    </span>
  );
};

const renderCheckCaseActionButton = (caseID: string) => {
  return (
    <Link to={`/risk-management/case-management/case/${caseID}`}>
      <button
        type="button"
        className="btn btn-sm btn-outline-primary waves-effect waves-light"
      >
        Check
      </button>
    </Link>
  );
};

const renderCustomTableData = (attribute: TableRowAttributes, data: any) => {
    console.log(attribute)
  switch (attribute?.rowAttributeType) {
    case RowAttributeType.date:
      return <Moment format="YYYY/MM/DD">{data[attribute?.key]}</Moment>;
    case RowAttributeType.badge:
      var resourceEnum: Enum = {
        label: "",
        key: "",
        value: "",
        status: EnumStatus.none,
      };
      if (attribute.resource === Resource.case) {
        resourceEnum = getCaseEnum(data[attribute?.key]);
      } else if (attribute.resource === Resource.customer) {
      }
      return renderBadge(resourceEnum);
    case RowAttributeType.action:
      if (attribute.resource === Resource.case) {
        return renderCheckCaseActionButton(data?.id);
      }
      break;
    case RowAttributeType.dateTime:
      return <Moment format="YYYY-MM-DD">{data}</Moment>;
    case RowAttributeType.money:
      return `Ksh${data[attribute?.key]}/=`;
    default:
      return null;
  }
};

export const tableHelpers = {
  renderCustomTableData,
};
