import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin5">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav" className="pt-4">
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></Link>
                        </li>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
    )
}

export default Aside
