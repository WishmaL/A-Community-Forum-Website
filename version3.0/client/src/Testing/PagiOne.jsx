var React = require('react');
var ReactUltimatePagination = require('react-ultimate-pagination');

function PagiOne(props) {
  return (
    <button
      style={props.isActive ? { fontWeight: 'bold' } : null}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
}

function Ellipsis(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      ...
    </button>
  );
}

function FirstPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      First
    </button>
  );
}

function PreviousPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Previous
    </button>
  );
}

function NextPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Next
    </button>
  );
}

function LastPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Last
    </button>
  );
}

function Wrapper(props) {
  return <div className="pagination">{props.children}</div>;
}

var itemTypeToComponent = {
  PAGE: Page,
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink,
};

var UltimatePagination = ReactUltimatePagination.createUltimatePagination({
  itemTypeToComponent: itemTypeToComponent,
  WrapperComponent: Wrapper,
});
