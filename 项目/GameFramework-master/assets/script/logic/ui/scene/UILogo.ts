import auto_logo from "../../../Data/AutoUI/scene/auto_logo";
import UIBase from "../UIBase";
import UIHelp from "../UIHelp";
import { Log, LOG_TAG } from "../../../utils/Log";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UILogo")
export default class UILogo extends UIBase {
	ui: auto_logo = null;

	protected static prefabUrl = "";
	protected static className = "UILogo";

	onUILoad() {
		this.ui = this.node.addComponent(auto_logo);
	}

	onShow() {
		// this.onRegisterEvent(this.ui.btn_test, this.onTest, this);
	}

	onHide() {
		// this.unRegisterEvent(this.ui.btn_test, this.onTest, this);

	}

	onStart() {
        this.scheduleOnce(function() {
            // 1秒后跳转
            Log.log(LOG_TAG.TEST, "跳转newGame");
            cc.director.loadScene("login")
        }, 1);
	}

	onClose() {
		UIHelp.CloseUI(UILogo);
	}

	onTest(){
		Log.log(LOG_TAG.TEST, "onTest");
	}
}