const { ccclass } = cc._decorator;

@ccclass
export default class auto_gameLang extends cc.Component {
	Canvas: cc.Node;
	lay_value1: cc.Node;
	lbl1_value: cc.Node;
	lbl1_name: cc.Node;
	lay_value2: cc.Node;
	lbl2_value: cc.Node;
	lbl2_name: cc.Node;
	lay_value3: cc.Node;
	lbl3_value: cc.Node;
	lbl3_name: cc.Node;
	lay_value4: cc.Node;
	lbl4_value: cc.Node;
	lbl4_name: cc.Node;
	lay_question: cc.Node;
	lbl_question: cc.Node;
	lay_answer1: cc.Node;
	btn_answer1: cc.Node;
	btn_answer1_Background: cc.Node;
	lbl_answer1: cc.Node;
	lay_answer2: cc.Node;
	btn_answer2: cc.Node;
	btn_answer2_Background: cc.Node;
	lbl_answer2: cc.Node;
	lay_score: cc.Node;
	lbl_score: cc.Node;

	public static URL:string = "db://assets/scene/gameLang.fire"

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.lay_value1 = this.Canvas.getChildByName("lay_value1");
		this.lbl1_value = this.lay_value1.getChildByName("lbl1_value");
		this.lbl1_name = this.lay_value1.getChildByName("lbl1_name");
		this.lay_value2 = this.Canvas.getChildByName("lay_value2");
		this.lbl2_value = this.lay_value2.getChildByName("lbl2_value");
		this.lbl2_name = this.lay_value2.getChildByName("lbl2_name");
		this.lay_value3 = this.Canvas.getChildByName("lay_value3");
		this.lbl3_value = this.lay_value3.getChildByName("lbl3_value");
		this.lbl3_name = this.lay_value3.getChildByName("lbl3_name");
		this.lay_value4 = this.Canvas.getChildByName("lay_value4");
		this.lbl4_value = this.lay_value4.getChildByName("lbl4_value");
		this.lbl4_name = this.lay_value4.getChildByName("lbl4_name");
		this.lay_question = this.Canvas.getChildByName("lay_question");
		this.lbl_question = this.lay_question.getChildByName("lbl_question");
		this.lay_answer1 = this.Canvas.getChildByName("lay_answer1");
		this.btn_answer1 = this.lay_answer1.getChildByName("btn_answer1");
		this.btn_answer1_Background = this.btn_answer1.getChildByName("btn_answer1_Background");
		this.lbl_answer1 = this.lay_answer1.getChildByName("lbl_answer1");
		this.lay_answer2 = this.Canvas.getChildByName("lay_answer2");
		this.btn_answer2 = this.lay_answer2.getChildByName("btn_answer2");
		this.btn_answer2_Background = this.btn_answer2.getChildByName("btn_answer2_Background");
		this.lbl_answer2 = this.lay_answer2.getChildByName("lbl_answer2");
		this.lay_score = this.Canvas.getChildByName("lay_score");
		this.lbl_score = this.lay_score.getChildByName("lbl_score");

    }
}
