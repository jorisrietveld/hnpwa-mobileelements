
class ZoneNavigator extends HTMLElement {

    
    constructor(containerSelector) {
        super()
        if (containerSelector)
            this.$container = document.querySelector(containerSelector)
    }

    connectedCallback() {
        if (this.getAttribute('container-selector')) {
            this.$container = document.querySelector(this.getAttribute('container-selector'))
        }
        if (!this.$container) {
            throw new Error('no container id defined for this navigator')
        } 
    }

    push (state) {
        const controller = new state.viewController(state.props)
        controller.navigator = this;
        this.$container.innerHTML = ''
        this.$container.appendChild(controller.render())
    }
}

customElements.define('scell-zone-navigator',ZoneNavigator)