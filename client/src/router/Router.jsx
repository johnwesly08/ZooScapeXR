import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Theme from '../components/Theme';
import Navigation from '../components/Navigation';
import PageNotFound from '../components/PageNotFound';
import Footer from '../components/Footer';

function Router() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Dashboard />}/>
                <Route path='/explore' element={<Navigation />}/>
                <Route path='/theme' element={<Theme />}/>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Outlet />
            <Footer />
        </BrowserRouter>
    </Fragment>
  )
}

export default Router