import auto_game from "../../../Data/AutoUI/scene/auto_game";
import UIBase from "../UIBase";
import UIHelp from "../UIHelp";
import UIGem from "../item/UIGem";
import { Log,LOG_TAG } from "../../../utils/Log";
import UINotice from "../notice/UINotice";

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu("UI/scene/UIGame")
export default class UIGame extends UIBase {
	ui: auto_game = null;

	protected static prefabUrl = "";
	protected static className = "UIGame";

	private genList: UIGem[] = [];

	onUILoad() {
		this.ui = this.node.addComponent(auto_game);
	}


	onShow() {
		Log.log(UIGame.className + "onShow");
		this.onRegisterEvent(this.ui.btn_action1, this.onBtnCaiji, this);

		this.createGenList()
	}

	onHide() {
		this.unRegisterEvent(this.ui.btn_action1, this.onBtnCaiji, this);
	}



	onStart() {
		

	}

	onClose() {
		UIHelp.CloseUI(UIGame);
	}

	showGemlist(){

	}

	onBtnCaiji(){
		// this.node.addComponent(auto_gem);
		// UIHelp.ShowUI(UIGem);
		// UIHelp.ShowTips("test ...");
		// var tPrefab = cc.instantiate(UIGem);
		// tPrefab.
		// let uiNode: cc.Node = cc.instantiate("gen");

		// uiNode.parent = uiNode;
		// uiNode.zIndex = 1000;		

		// var scene = cc.director.getScene();
		// var node: cc.Node = cc.instantiate(UIGem);
		// // node.parent = scene;
		// // this.node.addChild(node, 1000, "abc");
		// node.


		// var node = new cc.Node('sprite1');
		// var con = cc.instantiate(UIGem);
		// this.node.addComponent(UIGem);
		// node.parent = this.node;



		// Log.log("onBtnCaiji");
		// cc.loader.loadRes(UIGem.getUrl(), cc.Prefab, (error, prefab) => {

		// 	Log.log("loadRes succ");

        //     let uiNode: cc.Node = cc.instantiate(prefab);
        //     let ui = uiNode.getComponent(UIGem) as UIBase;

  
        //     // let uiRoot = cc.director.getScene().getChildByName('UIRoot');
        //     let uiRoot = cc.director.getScene();

        //     uiNode.parent = uiRoot;
        //     uiNode.zIndex = 1000;
        //     ui.tag = UIGem;
        // });		
	
	}

	createGenList(){
		let thisUi = this.ui;
		let thisGenList = this.genList;
        for (let i = 0; i < 16; ++i) {
			cc.loader.loadRes(UIGem.getUrl(), cc.Prefab, function(err, prefab) {
				if (err) {
				  console.error(err);
				  return;
				}
				let uiNode: cc.Node = cc.instantiate(prefab);
				uiNode.setPosition(cc.p(-240 + i * 160 - Math.floor(i / 4) * 160 * 4, 240 - Math.floor(i / 4) * 160))
				uiNode.parent = thisUi.lay_list;
				// this.genList.push(uiNode);
			  });


		}
	}
}