import './TableString.css';

function TableString(props) {

    let {item} = props;

    return (
        <tr className={'string'}>
            <td>
                {item.date}
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.amount}
            </td>
            <td>
                {item.distance}
            </td>
        </tr>

    );
}

export default TableString;