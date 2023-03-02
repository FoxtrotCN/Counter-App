// import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";


const Like = props => {
    return (
        <FontAwesomeIcon
            onClick={props.onClick}
            icon={!props.liked ? faHeart : faHeartSolid}
            style={{cursor: "pointer"}}
        />
        );
}

export default Like