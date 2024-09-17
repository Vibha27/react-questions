import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./Home"
import { ToDo } from "./pages/ToDoApp/ToDo"
import Form from "./pages/InfiniteScroll/Form"
import TrafficLight from "./pages/TrafficLight/TrafficLight"
import NestedCircles from "./pages/NestedCircles/NestedCircles"
import Pages from "./pages/Pagination/Pages"

import 'bootstrap/dist/css/bootstrap.min.css';
import TypeAhead from "./pages/TypeAhead/TypeAhead"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo-app" element={<ToDo />} />
            <Route path="/infinite-scroll" element={<Form />} />
            <Route path="/traffic-light" element={<TrafficLight />} />
            <Route path="/nested-circles" element={<NestedCircles />} />
            <Route path="/pagination" element={<Pages />} />
            <Route path="/typeahead" element={<TypeAhead />} />
            <Route path="*" element={<h1>Page not found! </h1>} />
        </Routes>
    </BrowserRouter>
}