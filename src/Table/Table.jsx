import styles from './Table.module.css';
import Navigation from "../Navigation/Navigation";
import TableString from "../TableString/TableString";

function Table(props) {

    let {data} = props;

    let table_strings = data.map((item) => {
       return <TableString item={item} key={item.amount + '' + data.length+1}/>
    });

    return (
        <table className={styles.table}>
            <thead>
                <Navigation />
            </thead>
            <tbody>
                {table_strings}
            </tbody>
        </table>
    );
}

export default Table;