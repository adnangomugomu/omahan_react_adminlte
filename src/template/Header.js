import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    {/* Logo */}
                    <a href="/" className="logo">
                        <span className="logo-mini">ADM</span>
                        <span className="logo-lg">ADMIN LTE</span>
                    </a>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar navbar-static-top">
                        {/* Sidebar toggle button*/}
                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                {/* User Account: style can be found in dropdown.less */}
                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="/adminlte/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* User image */}
                                        <li className="user-header">
                                            <img src="/adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                            <p className="mb-2 mt-2">
                                                Alexander Pierce - Web Developer
                                                <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-right">
                                                <a href="/login/logout" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="/adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                            </div>
                            <div className="pull-left info">
                                <p>administrator</p>
                                <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                            </div>
                        </div>
                        {/* sidebar menu: : style can be found in sidebar.less */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MENU</li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-home" /> <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard" /> <span>Referensi</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o" /> Kecamatan</a></li>
                                    <li><a href="#"><i className="fa fa-circle-o" /> Kabupaten</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>               
            </div>
        )
    }
}
