import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./Home"
import { ToDo } from "./pages/ToDoApp/ToDo"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo-app" element={<ToDo />} />
            <Route path="*" element={<h1>Page not found! </h1>} />
        </Routes>
    </BrowserRouter>
}