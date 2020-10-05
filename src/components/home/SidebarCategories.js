import React from "react";

const SidebarCategory = (props) => (
    <div style={styles.sidebarCategory()}>{props.name}</div>
);

const SidebarCategories = (props) =>
  props.categoryList.map((categoryName) => (
    <SidebarCategory name={categoryName} />
  ));

export default SidebarCategories;


const styles = {
    sidebarCategory: () => ({
        color: 'red'
  })
}