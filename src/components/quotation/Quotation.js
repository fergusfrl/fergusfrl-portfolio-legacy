import React from 'react';
import './quotation.scss';

const Quotation = ({ quote, author, authorTitle }) => (
    <div className="intro">
        <h2 dangerouslySetInnerHTML={{ __html: `"${quote}"` }} />
        <p className="quotation">{`- ${author}, ${authorTitle}`}</p>
    </div>
);

export default Quotation;