import React, { useEffect } from "react";

function GoogleMap(){
 
    return(
        <div className="mapouter m-5 w-full h-screen lg:w-1/2 mx-auto">
            <div className="gmap_canvas">
                <iframe className="w-full h-screen lg:rounded-lg" id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Casa%20Ripa,%20Via%20Ripa%209,%2060034%20Cupramontana%20(AN&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div>
    );
}

export default GoogleMap;
