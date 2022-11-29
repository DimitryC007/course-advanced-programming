import React from "react"
import { Routes, Route, Switch } from "react-router-dom"
import Settings from "../pages/Settings";
import Todo from "../pages/Todo";
import NotFound from "../pages/NotFound";

const Navigation = (
    <Routes>
        <Route exact path="/settings" element={<Settings />} />
        <Route path="/" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
export default Navigation;