function SectionItem(props) {

    return (
        <>
        <li id="text" className="list-group-item">
            <h4 className="pt-1 pb-1">{props.sectionItem.name} - ${Math.ceil(Math.random() * 50)}</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla.
        </li>
        </>
    )
}

export default SectionItem;