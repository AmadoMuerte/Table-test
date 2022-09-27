import styles from './Table.module.css';
import Navigation from "../Navigation/Navigation";
import TableString from "../TableString/TableString";

function Table(props) {

    let {data} = props;

    let table_strings = data.map((item) => {
       return <TableString item={item}/>
    });

    return (
        <table className={styles.table}>
            <Navigation />
            {table_strings}
        </table>
    );
}

export default Table;