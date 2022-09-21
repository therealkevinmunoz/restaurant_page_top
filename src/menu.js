export default function createMenu()
{
    const menuMainHTML = document.createElement("main");
    menuMainHTML.setAttribute("id", "menu-page");

    menuMainHTML.innerHTML = `
    <div id="menu-intro-container">
        <h1>Menu</h1>
        <p>See our selection of milk tea below:</p>
        <div id="menu-items-container">
            <div class="menu-item" data-item="BSB-item">
                <p>Brown Sugar Boba</p>
            </div>
            <div class="menu-item" data-item="TMT-item">
                <p>Taro Milk Tea</p>
            </div>
            <div class="menu-item" data-item="MMT-item">
                <p>Match Milk Tea</p>
            </div>
            <div class="menu-item" data-item="TT-item">
                <p>Thai Tea</p>
            </div>
            <div class="menu-item" data-item="MangoMT-item">
                <p>Mango Milk Tea</p>
            </div>
            <div class="menu-item" data-item="QQMT-item">
                <p>QQ Milk Tea</p>
            </div>
        </div>
        <div class="page-divide"></div>
    </div>`;

    return menuMainHTML;
}

