import useSortableData from "@utils/hooks/useSortableData";
import styles from "./table.module.scss";

export type TablePropsT = {
  data: [];
  tableCols: { [key: string]: string };
};

export const Table = ({ data, tableCols }: TablePropsT) => {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          {Object.keys(tableCols).map(key => (
            <th
              onClick={() => requestSort(key)}
              className={`${styles.table__button} ${styles[`${getClassNamesFor(key)}`]}`}
            >
              {tableCols[key].toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item}>
            {Object.keys(item).map(key => (
              <td key={key}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
