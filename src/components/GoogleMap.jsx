import React, { useEffect } from "react";

function GoogleMap(){
 
    return(
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="600" height="400" id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Casa%20Ripa,%20Via%20Ripa%209,%2060034%20Cupramontana%20(AN&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div>
    );
}

export default GoogleMap;
