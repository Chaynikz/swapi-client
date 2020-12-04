import React from "react";
import { useLocation } from "react-router-dom";

export default function NoMatch() {
    const location = useLocation();

    return <>
        <div className="error-block">
            <p style={{ fontWeight: "bold" }}>404</p>
            <p>Страница <code style={{ color: "#bbb" }}>{location.pathname}</code> не найдена</p>
        </div>
    </>;
};
