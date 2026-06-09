class KSHamburger extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "☰";

        this.addEventListener("click", () => {
            document
                .getElementById("menu")
                .classList.toggle("hidden");
        });
    }
}

customElements.define("ks-hamburger", KSHamburger);

export default {};