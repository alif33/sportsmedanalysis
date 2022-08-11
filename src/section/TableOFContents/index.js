import React from 'react';
import Accordion from './Accordion';
import tableCss from './Table.module.css';

const TableOFContents = () => {
    return (
        <div className={tableCss.accordionTable}>
            <h4>TABLE OF CONTENTS</h4>
            <Accordion />
        </div>
    );
};

export default TableOFContents;