import React from "react";

function Groups(props) {
    // Vytvořte pole objektů s informacemi o skupinkách a bodech
    const groupsData = [
        { name: "Skupinka 1", points: props.points1, color: "blue" },
        { name: "Skupinka 2", points: props.points2, color: "green" },
        { name: "Skupinka 3", points: props.points3, color: "red" },
        { name: "Skupinka 4", points: props.points4, color: "orange" },
    ];

    // Seřaďte pole objektů podle počtu bodů sestupně
    const sortedGroups = groupsData.sort((a, b) => b.points - a.points);

    return (
        <div className="container" style={{ paddingTop: "10px" }}>
            <div className="row d-flex justify-content-center">
                {sortedGroups.map((group, index) => (
                    <div key={index} className="col-sm-2">
                        <h3 style={{ color: group.color }}>
                            {group.name}: {group.points}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Groups;
