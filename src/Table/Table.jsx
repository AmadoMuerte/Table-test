import styles from './Table.module.css';
import Navigation from "../Navigation/Navigation";
import TableString from "../TableString/TableString";
import randomKey from "../RandomKey/RandomKey";

function Table(props) {

    let {data} = props;

    //массив табличный строк
    let table_strings = () => {
        let strings;
            strings = data.map((item) => {
                return <TableString item={item} key={randomKey()}/>
            })
        return strings;
    }

    return (
        <table className={styles.table}>
            <thead>
                <Navigation />
            </thead>
            <tbody>
                {table_strings()}
            </tbody>
        </table>
    );
}

export default Table;