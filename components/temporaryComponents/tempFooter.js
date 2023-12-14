"use strict";

// footer argumentet bör vara structureContainers.footer
function tempFooter(footer) {
    footer.innerHTML = `
<div id="footer-left">
            <div id="about-us-button">
                <div id="about-us-popup"></div>
            </div>
        </div>
        <div id="footer-right">
            <div id="email-container"></div>
        </div>
`;
}