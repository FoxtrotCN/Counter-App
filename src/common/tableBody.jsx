import React, {Component} from 'react'
import _ from 'lodash'

class TableBody extends Component {
    render() {
        const renderCell = (item, column) => {
            if (column.content) return column.content(item);

            return _.get(item, column.path);
        }
        const {data, columns} = this.props;
        return (
            <tbody>
            {data.map(item => <tr>
                    {columns.map(column =>
                        <td>{renderCell(item, column)}</td>)}
            </tr>
            )}

            </tbody>
        )
    }
}

export default TableBody