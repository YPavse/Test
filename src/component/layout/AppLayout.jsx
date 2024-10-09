import React from "react";
import PersistentDrawerLeft from "../../component/PersistentDrawerLeft";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <PersistentDrawerLeft>
        <div>Header</div>
        {WrappedComponent(props)} {/* Render the main content here */}
        <div>Footer</div>
      </PersistentDrawerLeft>
    );
  };
};

export default AppLayout;
