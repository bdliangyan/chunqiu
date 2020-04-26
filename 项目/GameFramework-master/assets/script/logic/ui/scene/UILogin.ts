import auto_login from "../../../Data/AutoUI/scene/auto_login";
import UIBase from "../UIBase";
import UIHelp from "../UIHelp";
import { Log,LOG_TAG } from "../../../utils/Log";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UILogin")
export default class UILogin extends UIBase {
	ui: auto_login = null;

	protected static prefabUrl = "";
	protected static className = "UILogin";

	onUILoad() {
		this.ui = this.node.addComponent(auto_login);
	}

	onShow() {
		this.onRegisterEvent(this.ui.btn_start, this.onNewGame, this);
	}

	onHide() {
		this.unRegisterEvent(this.ui.btn_start, this.onNewGame, this);

	}

	onStart() {

	}

	onClose() {
		UIHelp.CloseUI(UILogin);
	}

	onNewGame(){
		Log.log(LOG_TAG.TEST, "onNewGame");
		cc.director.loadScene("gameLang")
		// cc.director.loadScene("game")
	}
}