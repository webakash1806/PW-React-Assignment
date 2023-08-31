const List = ({ items }) => {
    const item = items.map((list) =>
        <li key={list}>{list}</li>
    );
    return (
        <>
            <ul>{item}</ul>
        </>
    )
}

export default List