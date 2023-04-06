import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class HarryPotter extends LitElement{
    static styles = css `
    div {
        background-color: green;

    }
    `    
    static properties = {
        bestBook: {type:String},
        _thiIsBest:{type:String, state:true}

    }

        constructor(){
            super()
            this._thiIsBest = "Harry Potter and the Deathly Hollows"

        }

        render() {
        return html `
            <div>${this.bestBook} is the best book </div>
            <div>${this._thisIsBest} is the best book no matter what anyone says<div/>

        ` 
    }
}
customElements.define('harry-potter', HarryPotter)