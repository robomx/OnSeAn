import React from "react";

import Layout from "../../components/Layout";
import Search from "../../components/Search";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Search />
          </div>
        </section>
      </Layout>
    );
  }
}
