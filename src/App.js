import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./Home"
import { ToDo } from "./pages/ToDoApp/ToDo"
import Form from "./pages/InfiniteScroll/Form"
import TrafficLight from "./pages/TrafficLight/TrafficLight"
import NestedCircles from "./pages/NestedCircles/NestedCircles"
import Pages from "./pages/Pagination/Pages"

import 'bootstrap/dist/css/bootstrap.min.css';
import TypeAhead from "./pages/TypeAhead/TypeAhead"
import Counter from "./pages/Counter/Counter"
import Breadcrumb from "./pages/Breadcrumb/Breadcrumb"
import NestedObject from "./pages/NestedObject/NestedObject"
import { AccordionPage } from "./pages/Accordion/AccordionPage"
import { PhoneNumberInput } from "./pages/PhoneNumber/PhoneNumber"
import { DebouncedHook } from "./hooks/useDebounce"
import { Slider } from "./pages/Slider/Slider"
import Blogs from "./pages/Blogs/Blogs"
import Sorting from "./pages/Sorting/Sorting"
import { WordOmitter } from "./pages/WordOmitter/WordOmitter"
import { FileExplorer } from "./pages/FileExplorer/FileExplorer"
import { ProgressBarMain } from "./pages/ProgressBar/ProgressBarMain"

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
            <Route path="/counter" element={<Counter />} />
            <Route path="/breadcrumb" element={<Breadcrumb />} />
            <Route path="/nested-object" element={<NestedObject />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/phonenumber" element={<PhoneNumberInput />} />
            <Route path="/debounced-hook" element={<DebouncedHook />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/word-omitter" element={<WordOmitter />} />
            <Route path="/file-explorer" element={<FileExplorer />} />
            <Route path="/progress-bar" element={<ProgressBarMain />} />
            
            <Route path="*" element={<h1>Page not found! </h1>} />
        </Routes>
    </BrowserRouter>
}