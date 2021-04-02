function SectionItem(props) {

    return (
        <li id="text"className="list-group-item ps-4">
            {props.sectionItem.name} - ${Math.floor(Math.random() * 50)}
        </li>
    )

}

export default SectionItem;