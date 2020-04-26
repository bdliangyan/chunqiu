import auto_gameLang from "../../../Data/AutoUI/scene/auto_gameLang";
import UIBase from "../UIBase";
import UIHelp from "../UIHelp";
import { Log,LOG_TAG } from "../../../utils/Log";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UIGameLang")
export default class UIGameLang extends UIBase {
	ui: auto_gameLang = null;

	protected static prefabUrl = "";
	protected static className = "UIGameLang";

	onUILoad() {
		this.ui = this.node.addComponent(auto_gameLang);
	}

	onShow() {
		Log.log(UIGameLang.className + "onShow");
		this.onRegisterEvent(this.ui.btn_answer1, this.onBtnAnswer1, this);
		this.onRegisterEvent(this.ui.btn_answer2, this.onBtnAnswer2, this);
		// this.createGenList()
	}

	onHide() {
		this.unRegisterEvent(this.ui.btn_answer1, this.onBtnAnswer1, this);
		this.unRegisterEvent(this.ui.btn_answer2, this.onBtnAnswer2, this);		
	}


	onStart() {
		UIHelp.SetLabel(this.ui.lbl_score, '测试公告标题');
	}

	//选择左侧答案
	onBtnAnswer1(){
		Log.log(LOG_TAG.TEST, "选择左侧答案");
	}
	//选择右侧答案
	onBtnAnswer2(){
		Log.log(LOG_TAG.TEST, "选择右侧答案");
	}
	onClose() {
		UIHelp.CloseUI(UIGameLang);
	}
}