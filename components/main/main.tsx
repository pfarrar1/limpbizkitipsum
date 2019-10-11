import React, {useState} from "react";
import Content from "../content/content";
import GroupSelection from "../groupSelection/groupSelection";
import data from "../../data/data.json";
import "./main.scss";

const Main = () => {
    const [lyrics, setLyrics] = useState();
    const [numGroups, setNumGroups] = useState(1);
    const [groupType, setGroupType] = useState("paragraphs");

    const handleSubmit = () => {
        const random = Math.floor(Math.random() * data.songs.length);
        const rawLyrics = data.songs[random].lyrics;
        const paragraphs = rawLyrics.split(/\n\n/);
        const lines = rawLyrics.split(/\n/);
        const words = rawLyrics.split(/\s/);
        let text;

        if (groupType === "paragraphs") {
            while(paragraphs.length < numGroups) {
                paragraphs.push(...paragraphs);
            }
            // text = paragraphs.slice(0, numGroups).join(" ").split("\n").join(" ");
            text = paragraphs.slice(0, numGroups)
                .map(p => p.split("\n").join(" "))
                .join("\n\n");
        }

        if (groupType === "lines") {
            while(lines.length < numGroups) {
                lines.push(...lines);
            }
            text = lines.slice(0, numGroups).join("\n");
        }

        if(groupType === "words") {
            while (words.length < numGroups) {
                words.push(...words);
            }
            text = words.slice(0, numGroups).join(" ");
        }

        setLyrics(text);
    };

    const handleNumGroupsChange = e => {
        setNumGroups(e.target.value);
    };

    const handleGroupTypeChange = e => {
        setGroupType(e.target.value);
    };

    return (
        <div className="starter-template">
            <GroupSelection numGroups={numGroups}
                            handleNumGroupsChange={handleNumGroupsChange}
                            handleGroupTypeChange={handleGroupTypeChange}
                            handleSubmit={handleSubmit}
            />
            <Content lyrics={lyrics}/>

        </div>
    );
};

export default Main;
