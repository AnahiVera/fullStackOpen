

const DisplayStatistics = ({ counter, text }) => {

    const value = text === 'Positive' ? `${counter}%` : counter;
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

export default DisplayStatistics