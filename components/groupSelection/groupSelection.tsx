import React from "react";
import "./groupSelection.scss";

const GroupSelection = (props) => {
    const {numGroups, handleNumGroupsChange, handleGroupTypeChange, handleSubmit} = props;
    return (
        <form>
            <h1>How Much Do You Want?</h1>
            <div className="row">
                <div className="col">
                    <input id="numGroups"
                           type="number"
                           className="form-control"
                           value={numGroups}
                           onChange={e => handleNumGroupsChange(e)}
                    />
                </div>
                <div className="col">
                    <select id="groupType"
                            className="form-control"
                            onChange={e => handleGroupTypeChange(e)}
                    >
                        <option value="paragraphs">Paragraphs</option>
                        <option value="lines">Lines</option>
                        <option value="words">Words</option>
                    </select>
                </div>
            </div>
            <input type="submit"
                   className="btn btn-lg btn-danger"
                   onClick={() => handleSubmit()}
                   value="Click Here"
            />
        </form>
    );
};

export default GroupSelection;
