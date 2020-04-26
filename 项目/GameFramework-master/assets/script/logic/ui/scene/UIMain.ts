import auto_main from "../../../Data/AutoUI/scene/auto_main";
import UIBase from "../UIBase";
import UIHelp, { DialogParams } from "../UIHelp";
import UINotice from "../notice/UINotice";
import UIConfirmDialog from "../tips/UIConfirmDialog";


const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UIMain")
export default class UIMain extends UIBase {
	ui: auto_main = null;

	protected static prefabUrl = "db://a";
	protected static className = "UIMain";

	onUILoad() {
		this.ui = this.node.addComponent(auto_main);
	}

	onShow() {
		this.onRegisterEvent(this.ui.btn_notice, this.onOpenNotice, this);
	}

	onHide() {
		this.unRegisterEvent(this.ui.btn_notice, this.onOpenNotice, this);
	}

	onStart() {

	}

	onOpenNotice() {
		let me:DialogParams = {
			title: 'title',
			content: "1",
			certainCb: this.onButtonOk,
			cancelCb: null,
		  }
		UIHelp.ShowDialog(me);
	}

	onButtonOk(){
		let me:DialogParams = {
			title: 'title',
			content: "2",
			certainCb: this.onButtonOk,
			cancelCb: null,
		  }
		UIHelp.ShowDialog(me);
	}

	onButtonClose(){

	}

	


}