import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageLocation from './Page_Location/PageLocation';
import Gallery from './Gallery';
import Banner from './Banner';
import NotFound from './NotFound';
import About from './About';
import img from '../assets/images/IMG.png'

export default function Rooter() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <Banner txt="Chez vous, partout et ailleurs" img={img} />
                        <Gallery />
                    </>
                } />
                <Route path="/location/:id" element={
                    <PageLocation />
                } />
                <Route path="*" element={
                    <NotFound />
                } />
                <Route path='/about' element={
                    <About />
                } />
            </Routes>
        </Router>
    );
}