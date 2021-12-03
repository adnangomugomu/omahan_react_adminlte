import React, { Component } from 'react'

import Header from "./Header";
import Footer from "./Footer";

export default class Main extends Component {
    render() {

        function page() {
            return this.page;
        }

        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="content-wrapper">
                        <section className="content">
                            {page()}
                        </section>
                    </div>
                    <Footer />
                    <div className="control-sidebar-bg" />
                </div>
            </div>
        )
    }
}
