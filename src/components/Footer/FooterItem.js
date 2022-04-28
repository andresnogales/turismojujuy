const FooterItem = (props) => {

    return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <a href={props.link}>{props.btnLabel}</a>
    </div>);
}

export default FooterItem;