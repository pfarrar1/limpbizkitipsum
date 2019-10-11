import "./content.scss";

const Content = (props) => {
    const {lyrics} = props;
    return (
        <textarea id="content"
                  className="form-control"
                  rows={15}
                  value={lyrics}
        />
    );
};

export default Content;
