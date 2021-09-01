import DappLib from "@decentology/dappstarter-dapplib";
import DOM from "../components/dom";
import "../components/action-card.js";
import "../components/action-button.js";
import "../components/text-widget.js";
import "../components/number-widget.js";
import "../components/account-widget.js";
import "../components/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("dapp-page")
export default class DappPage extends LitElement {
	@property()
	get;
	@property()
	post;
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
		let content = html`
			<div class="container m-auto">
				<div class="row fadeIn mt-3 p-2 block">
					<h2 class="text-6xl">🎉 SolVows</h2>
					<p class="mt-3">
						Get married on the Blockchain! ows are an incredibly meaningful—and
						personal—part of a wedding ceremony. They provide the contractual
						(both formal and informal) basis that will guide the newlyweds
						through their shared life together and set the tone for what is to
						come. While there are many creative variations of the lifelong
						promises, some couples prefer to recite powerful, centuries-old
						wedding vows from many different faiths and cultures. These
						tried-and-true words set a strong foundation for a lifetime of unity
						and marital bliss together.
					</p>
				</div>
			</div>
		`;
		return content;
	}
}
