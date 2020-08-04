import React from "react";

export default function GroupMember(props) {
    return (
        <li>{props.member.first_name} {props.member.last_name}</li>
    );
}