import React from "react";

function disableBodyScroll(checked) {
  if (checked) {
    window.document.body.classList.add("disable_scroll");
  } else {
    window.document.body.classList.remove("disable_scroll");
  }
}

class SidebarActivation extends React.Component {
  render() {
    const { inputRef } = this.props;

    return (
      <input
        ref={inputRef}
        className="sidebar-menu__activation"
        type="checkbox"
        id="sidebar-menu-activation"
        onChange={(ev) => {
          disableBodyScroll(ev.target.checked);
        }}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <SidebarActivation inputRef={ref} {...props} />
));
