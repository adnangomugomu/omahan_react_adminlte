import React, { Component } from 'react'

import Header from "./Header";
import Footer from "./Footer";
import { Dashboard } from '../utility/Util';

export default class Main extends Component {
    render() {

        function getPage(page) {
            switch (page) {
                case 'dashboard':
                    return <Dashboard />;
                    break;
                default:
                    break;
            }
        }

        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="content-wrapper">
                        <section className="content">
                            {
                                getPage(this.props.page)
                            }
                        </section>
                    </div>
                    <Footer />
                    <div className="control-sidebar-bg" />
                </div>
            </div>
        )
    }
}
