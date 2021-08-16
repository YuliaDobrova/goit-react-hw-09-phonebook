import React from "react";
import styles from "./FIlter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = (e) => dispatch(setFilter(e.target.value));
  return (
    <>
      <label className={styles.filterName}>
        <span className={styles.formPhonebookText}>Find contact by name</span>
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={onFilterChange}
        />
      </label>
    </>
  );
}

// =================================================
// BEFORE HOOKS
// =================================================

// import React from "react";
// import styles from "./FIlter.module.css";
// import { connect } from "react-redux";
// import { setFilter } from "../../redux/contacts/contactsActions";
// import { getFilter } from "../../redux/contacts/contactsSelectors";

// const Filter = ({ filter, setFilter }) => {
//   return (
//     <>
//       <label className={styles.filterName}>
//         <span className={styles.formPhonebookText}>Find contact by name</span>
//         <input
//           className={styles.filterInput}
//           type="text"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         />
//       </label>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   filter: getFilter(state),
// });

// export default connect(mapStateToProps, { setFilter: setFilter })(Filter);
