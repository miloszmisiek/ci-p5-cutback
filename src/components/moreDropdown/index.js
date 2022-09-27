import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ActionButton, DropdownCustom, VerticalDivider } from "./styles";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v p-2"
    role="button"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <DropdownCustom drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu popperConfig={{ strategy: "fixed" }}>
        <ActionButton onClick={handleEdit} aria-label="edit">
          <i className="fas fa-edit" />
        </ActionButton>
        <VerticalDivider></VerticalDivider>
        <ActionButton onClick={handleDelete} aria-label="delete" delete>
          <i className="fas fa-trash-alt" />
        </ActionButton>
      </Dropdown.Menu>
    </DropdownCustom>
  );
};
