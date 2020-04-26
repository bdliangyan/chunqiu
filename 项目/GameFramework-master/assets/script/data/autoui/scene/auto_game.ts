const { ccclass } = cc._decorator;

@ccclass
export default class auto_game extends cc.Component {
	Canvas: cc.Node;
	lay_user: cc.Node;
	lbl_map: cc.Node;
	lbl_gold: cc.Node;
	lay_list: cc.Node;
	lay_info: cc.Node;
	lbl_info: cc.Node;
	lay_action: cc.Node;
	btn_action1: cc.Node;
	Background_action1: cc.Node;
	Label_action1: cc.Node;
	btn_action2: cc.Node;
	Background_action2: cc.Node;
	Label_action2: cc.Node;
	btn_action3: cc.Node;
	Background_action3: cc.Node;
	Label_action3: cc.Node;
	btn_action4: cc.Node;
	Background_action4: cc.Node;
	Label_action4: cc.Node;
	btn_action5: cc.Node;
	Background_action5: cc.Node;
	Label_action5: cc.Node;
	btn_action6: cc.Node;
	Background_action6: cc.Node;
	Label_action6: cc.Node;
	btn_action7: cc.Node;
	Background_action7: cc.Node;
	Label_action7: cc.Node;
	btn_action8: cc.Node;
	Background_action8: cc.Node;
	Label_action8: cc.Node;

	public static URL:string = "db://assets/scene/game.fire"

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.lay_user = this.Canvas.getChildByName("lay_user");
		this.lbl_map = this.lay_user.getChildByName("lbl_map");
		this.lbl_gold = this.lay_user.getChildByName("lbl_gold");
		this.lay_list = this.Canvas.getChildByName("lay_list");
		this.lay_info = this.Canvas.getChildByName("lay_info");
		this.lbl_info = this.lay_info.getChildByName("lbl_info");
		this.lay_action = this.Canvas.getChildByName("lay_action");
		this.btn_action1 = this.lay_action.getChildByName("btn_action1");
		this.Background_action1 = this.btn_action1.getChildByName("Background_action1");
		this.Label_action1 = this.Background_action1.getChildByName("Label_action1");
		this.btn_action2 = this.lay_action.getChildByName("btn_action2");
		this.Background_action2 = this.btn_action2.getChildByName("Background_action2");
		this.Label_action2 = this.Background_action2.getChildByName("Label_action2");
		this.btn_action3 = this.lay_action.getChildByName("btn_action3");
		this.Background_action3 = this.btn_action3.getChildByName("Background_action3");
		this.Label_action3 = this.Background_action3.getChildByName("Label_action3");
		this.btn_action4 = this.lay_action.getChildByName("btn_action4");
		this.Background_action4 = this.btn_action4.getChildByName("Background_action4");
		this.Label_action4 = this.Background_action4.getChildByName("Label_action4");
		this.btn_action5 = this.lay_action.getChildByName("btn_action5");
		this.Background_action5 = this.btn_action5.getChildByName("Background_action5");
		this.Label_action5 = this.Background_action5.getChildByName("Label_action5");
		this.btn_action6 = this.lay_action.getChildByName("btn_action6");
		this.Background_action6 = this.btn_action6.getChildByName("Background_action6");
		this.Label_action6 = this.Background_action6.getChildByName("Label_action6");
		this.btn_action7 = this.lay_action.getChildByName("btn_action7");
		this.Background_action7 = this.btn_action7.getChildByName("Background_action7");
		this.Label_action7 = this.Background_action7.getChildByName("Label_action7");
		this.btn_action8 = this.lay_action.getChildByName("btn_action8");
		this.Background_action8 = this.btn_action8.getChildByName("Background_action8");
		this.Label_action8 = this.Background_action8.getChildByName("Label_action8");

    }
}
