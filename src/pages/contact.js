import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quotation from "../components/quotation/Quotation";

const Contact = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Contact" />
    <Quotation
      quote="Communication leads to community, that is, to <span>understanding</span>, intimacy and mutual valuing."
      author="Rollo May"
      authorTitle="psychologist"
    />
    <form className="form container">
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Email" />     
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col">
          <textarea
            rows={6}
            type="text"
            className="form-control"
            placeholder="Message"
          />
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col">
          <button type="button" className="btn">Send Message</button>
        </div>
      </div>
    </form>
  </Layout>
)

export default Contact