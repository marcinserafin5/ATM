import BUTTONS_OPERATION from "./buttonsOperationConsts";
const atmButtons = [
  { label: "1", value: 1, style: "atmButton" },
  { label: "2", value: 2, style: "atmButton" },
  { label: "3", value: 3, style: "atmButton" },
  {
    label: "CANCEL",
    value: BUTTONS_OPERATION.CANCEL,
    style: "bigAtmButton red",
  },

  { label: "4", value: 4, style: "atmButton" },
  { label: "5", value: 5, style: "atmButton" },
  { label: "6", value: 6, style: "atmButton" },
  {
    label: "CLEAR",
    value: BUTTONS_OPERATION.CLEAR,
    style: "bigAtmButton yellow",
  },

  { label: "7", value: 7, style: "atmButton" },
  { label: "8", value: 8, style: "atmButton" },
  { label: "9", value: 9, style: "atmButton" },
  {
    label: "SUBMIT",
    value: BUTTONS_OPERATION.SUBMIT,
    style: "bigAtmButton green",
  },

  { label: "", value: null, style: "atmButton" },
  { label: "0", value: 0, style: "atmButton" },
  { label: "", value: null, style: "atmButton" },
  { label: "⇐", value: BUTTONS_OPERATION.REMOVE, style: "bigAtmButton" },
];
export default atmButtons;
