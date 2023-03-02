import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
    state = {}
    render() {
        return (
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        )
    }
}

export default Like