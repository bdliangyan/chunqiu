import auto_gem from "../../../Data/AutoUI/item/auto_gem";
import UIBase from "../UIBase";
import UIHelp from "../UIHelp";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/item/UIGem")
export default class UIGem extends UIBase {
	ui: auto_gem = null;

	protected static prefabUrl = "item/gem";
	protected static className = "UIGem";

	onUILoad() {
		this.ui = this.node.addComponent(auto_gem);
	}

	onShow() {

	}

	onHide() {

	}

	onStart() {

	}

	onClose() {
		UIHelp.CloseUI(UIGem);
	}
}