import "./CreateIcon.scss";

const CreateIcon = (props) => {
    const { icon: Icon } = props;
    return (
        <div className="icon">
            <Icon />
        </div>
    );
};

export default CreateIcon;
