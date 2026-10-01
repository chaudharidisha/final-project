import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">
                        {/* ============================================================== */}
                        {/* Logo */}
                        {/* ============================================================== */}
                        <Link className="navbar-brand" to="index.html">
                            {/* Logo icon */}
                            <b className="logo-icon ps-2">
                                {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                                {/* Dark Logo icon */}
                                <img src="../assets/images/logo-icon.png" alt="homepage" className="light-logo" width={25} />
                            </b>
                            <span className="logo-text ms-2">
                                <img src="../assets/images/logo-text.png" alt="homepage" className="light-logo" />
                            </span>
                        </Link>
                        <Link className="nav-toggler waves-effect waves-light d-block d-md-none" to="javascript:void(0)"><i className="ti-menu ti-close" /></Link>
                    </div>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        {/* ============================================================== */}
                        {/* toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav float-start me-auto">
                            <li className="nav-item d-none d-lg-block">
                                <Link className="nav-link sidebartoggler waves-effect waves-light" to="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24" /></Link>
                            </li>
                            {/* ============================================================== */}
                            {/* create new */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="d-none d-md-block">Create New <i className="fa fa-angle-down" /></span>
                                    <span className="d-block d-md-none"><i className="fa fa-plus" /></span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            <li className="nav-item search-box">
                                <Link className="nav-link waves-effect waves-dark" to="javascript:void(0)"><i className="mdi mdi-magnify fs-4" /></Link>
                                <form className="app-search position-absolute">
                                    <input type="text" className="form-control" placeholder="Search & enter" />
                                    <Link className="srh-btn"><i className="mdi mdi-window-close" /></Link>
                                </form>
                            </li>
                        </ul>
                        {/* ============================================================== */}
                        {/* Right side toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav float-end">
                            {/* ============================================================== */}
                            {/* Comment */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="mdi mdi-bell font-24" />
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* ============================================================== */}
                            {/* End Comment */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                            {/* Messages */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="#" id={2} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="font-24 mdi mdi-comment-processing" />
                                </Link>
                                <ul className="
              dropdown-menu dropdown-menu-end
              mailbox
              animated
              bounceInDown
            " aria-labelledby={2}>
                                    <ul className="list-style-none">
                                        <li>
                                            <div className>
                                                {/* Message */}
                                                <Link to="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="
                          btn btn-success btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "><i className="mdi mdi-calendar text-white fs-4" /></span>
                                                        <div className="ms-2">
                                                            <h5 className="mb-0">Event today</h5>
                                                            <span className="mail-desc">Just a reminder that event</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                {/* Message */}
                                                <Link to="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="
                          btn btn-info btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "><i className="mdi mdi-settings fs-4" /></span>
                                                        <div className="ms-2">
                                                            <h5 className="mb-0">Settings</h5>
                                                            <span className="mail-desc">You can customize this template</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                {/* Message */}
                                                <Link to="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="
                          btn btn-primary btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "><i className="mdi mdi-account fs-4" /></span>
                                                        <div className="ms-2">
                                                            <h5 className="mb-0">Pavan kumar</h5>
                                                            <span className="mail-desc">Just see the my admin!</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                {/* Message */}
                                                <Link to="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="
                          btn btn-danger btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "><i className="mdi mdi-link fs-4" /></span>
                                                        <div className="ms-2">
                                                            <h5 className="mb-0">Luanch Admin</h5>
                                                            <span className="mail-desc">Just see the my new admin!</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            {/* ============================================================== */}
                            {/* End Messages */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <Link className="
              nav-link
              dropdown-toggle
              text-muted
              waves-effect waves-dark
              pro-pic
            " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="../assets/images/users/1.jpg" alt="user" className="rounded-circle" width={31} />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="javascript:void(0)"><i className="mdi mdi-account me-1 ms-1" /> My Profile</Link>
                                    <Link className="dropdown-item" to="javascript:void(0)"><i className="mdi mdi-wallet me-1 ms-1" /> My Balance</Link>
                                    <Link className="dropdown-item" to="javascript:void(0)"><i className="mdi mdi-email me-1 ms-1" /> Inbox</Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item" to="javascript:void(0)"><i className="mdi mdi-settings me-1 ms-1" /> Account
                                        Setting</Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item" to="/logout"><i className="fa fa-power-off me-1 ms-1" /> Logout</Link>
                                    <div className="dropdown-divider" />
                                    <div className="ps-4 p-10">
                                        <Link to="javascript:void(0)" className="btn btn-sm btn-success btn-rounded text-white">View Profile</Link>
                                    </div>
                                </ul>
                            </li>
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
