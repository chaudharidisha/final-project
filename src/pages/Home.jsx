import React from 'react'
import Header from '../components/Header'
import Aside from '../components/Aside'

const Home = () => {
    return (
        <div>
            {/* ============================================================== */}
            {/* Main wrapper - style you can find in pages.scss */}
            {/* ============================================================== */}
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                {/* ============================================================== */}
                {/* Topbar header - style you can find in pages.scss */}
                {/* ============================================================== */}
                <Header/>
                {/* ============================================================== */}
                {/* End Topbar header */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Left Sidebar - style you can find in sidebar.scss  */}
                {/* ============================================================== */}
                <Aside/>
                {/* ============================================================== */}
                {/* End Left Sidebar - style you can find in sidebar.scss  */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Page wrapper  */}
                {/* ============================================================== */}
                <div className="page-wrapper">
                    {/* ============================================================== */}
                    {/* Bread crumb and right sidebar toggle */}
                    {/* ============================================================== */}
                    <div className="page-breadcrumb">
                        <div className="row">
                            <div className="col-12 d-flex no-block align-items-center">
                                <h4 className="page-title">Dashboard</h4>
                                <div className="ms-auto text-end">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* End Bread crumb and right sidebar toggle */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Container fluid  */}
                    {/* ============================================================== */}
                    <div className="container-fluid">
                        {/* ============================================================== */}
                        {/* Sales Cards  */}
                        {/* ============================================================== */}
                        <div className="row">
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-cyan text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-view-dashboard" />
                                        </h1>
                                        <h6 className="text-white">Dashboard</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-4 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-success text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-chart-areaspline" />
                                        </h1>
                                        <h6 className="text-white">Charts</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-warning text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-collage" />
                                        </h1>
                                        <h6 className="text-white">Widgets</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-danger text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-border-outside" />
                                        </h1>
                                        <h6 className="text-white">Tables</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-info text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-arrow-all" />
                                        </h1>
                                        <h6 className="text-white">Full Width</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            {/* Column */}
                            <div className="col-md-6 col-lg-4 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-danger text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-receipt" />
                                        </h1>
                                        <h6 className="text-white">Forms</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-info text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-relative-scale" />
                                        </h1>
                                        <h6 className="text-white">Buttons</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-cyan text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-pencil" />
                                        </h1>
                                        <h6 className="text-white">Elements</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-success text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-calendar-check" />
                                        </h1>
                                        <h6 className="text-white">Calnedar</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="col-md-6 col-lg-2 col-xlg-3">
                                <div className="card card-hover">
                                    <div className="box bg-warning text-center">
                                        <h1 className="font-light text-white">
                                            <i className="mdi mdi-alert" />
                                        </h1>
                                        <h6 className="text-white">Errors</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                        </div>
                        {/* ============================================================== */}
                        {/* Sales chart */}
                        {/* ============================================================== */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-md-flex align-items-center">
                                            <div>
                                                <h4 className="card-title">Site Analysis</h4>
                                                <h5 className="card-subtitle">Overview of Latest Month</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* column */}
                                            <div className="col-lg-9">
                                                <div className="flot-chart">
                                                    <div className="flot-chart-content" id="flot-line-chart" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="mdi mdi-account fs-3 mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">2540</h5>
                                                            <small className="font-light">Total Users</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="mdi mdi-plus fs-3 font-16" />
                                                            <h5 className="mb-0 mt-1">120</h5>
                                                            <small className="font-light">New Users</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="mdi mdi-cart fs-3 mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">656</h5>
                                                            <small className="font-light">Total Shop</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="mdi mdi-tag fs-3 mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">9540</h5>
                                                            <small className="font-light">Total Orders</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="mdi mdi-table fs-3 mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">100</h5>
                                                            <small className="font-light">Pending Orders</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="mdi mdi-web fs-3 mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">8540</h5>
                                                            <small className="font-light">Online Orders</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* column */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* Recent comment and chats */}
                        {/* ============================================================== */}
                    </div>
                    {/* ============================================================== */}
                    {/* End Container fluid  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* footer */}
                    {/* ============================================================== */}
                    <footer className="footer text-center">
                        All Rights Reserved by Matrix-admin. Designed and Developed by
                        <a href="https://www.wrappixel.com">WrapPixel</a>.
                    </footer>
                    {/* ============================================================== */}
                    {/* End footer */}
                    {/* ============================================================== */}
                </div>
                {/* ============================================================== */}
                {/* End Page wrapper  */}
                {/* ============================================================== */}
            </div>
        </div>
    )
}

export default Home
