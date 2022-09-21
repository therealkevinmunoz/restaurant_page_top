export default function createContact()
{
    const contactMainHTML = document.createElement("main");
    contactMainHTML.setAttribute("id", "contact-page");

    contactMainHTML.innerHTML = `
    <div id="contact-intro-container">
                <h1>Contact</h1>
                <p>Find us and let us know what you think of our boba!</p>
                <div id="contact-info-container">
                    <p>Owner: Kevin Munoz</p>
                    <p>Telephone: 1 (800) TRY-BOBA or 1 (800) 879-2622</p>
                    <address>Address: 2206 Sawtelle Blvd, Los Angeles, CA 90064</address>
                </div>
                <div class="page-divide"></div>
    </div>`;

    return contactMainHTML;
}