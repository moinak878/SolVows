import "../components/action-card.js";
import "../components/page-body.js";
import "../components/page-panel.js";
import "../components/text-widget.js";
import "../components/number-widget.js";
import "../components/account-widget.js";
import DOM from "../components/dom";
import DappLib from "@decentology/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("solVows-harness")
export default class solVowsHarness extends LitElement {
	@property()
	title;
	@property()
	category;
	@property()
	description;

	createRenderRoot() {
		return this;
	}

	constructor(args) {
		super(args);
	}

	render() {
		/*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: SOLVOWS  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
		return html`
			<page-body
				title="${this.title}"
				category="${this.category}"
				description="${this.description}"
			>
				<h1>SolVows</h1>
			</page-body>
			<page-panel id="resultPanel"></page-panel>
		`;
	}
}

///+functions
///+page-post-content
