import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About2 from './components/About/About2'
import Contact from './components/contact/contact.jsx'
import Prod from './components/Products/Prod.jsx'
import LoadFontAwesome from './LoadFontAwesome'  // import your loader

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            { path: "", element: <Home /> },
            { path: "about2", element: <About2 /> },
            { path: "products", element: <Prod /> },
            { path: "contact", element: <Contact /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LoadFontAwesome />       {/* Load fontawesome globally */}
        <RouterProvider router={router} />
    </React.StrictMode>,
)
