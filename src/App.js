import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./Home"
import { ToDo } from "./pages/ToDoApp/ToDo"
import Form from "./pages/InfiniteScroll/Form"
import TrafficLight from "./pages/TrafficLight/TrafficLight"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo-app" element={<ToDo />} />
            <Route path="/infinite-scroll" element={<Form />} />
            <Route path="/traffic-light" element={<TrafficLight />} />
            <Route path="*" element={<h1>Page not found! </h1>} />
        </Routes>
    </BrowserRouter>
}