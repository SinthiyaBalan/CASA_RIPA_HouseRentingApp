import React , { useEffect, useState } from 'react';
import Faq from "react-faq-component";

function FAQ( {faqData}) {

    const styles = {
        // bgColor: 'white',
        titleTextColor: "blue",
        rowTitleColor: "blue",
        rowContentColor: 'black',
        arrowColor: "green",
    };
    
    const config = {
        animate: true,
        arrowIcon: "V",
        tabFocus: true
    };
    
  return (
    <div>
    <Faq
        data={faqData}
        styles={styles}
        config={config}
    />
</div>
  )
}

export default FAQ