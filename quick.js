//HGUI插件
//适用于 2.0.0+ 的版本。
H.showOutput(false);//隐藏输出对话框。

var Layout=HLayout.newClass();//创建一个线性布局
var mainLayout=HLayout.newClass();
var titleLabel=HLabel.newClass();
var originLayout=HLayout.newClass();
var originXInput=HInputView.newClass();
var originYInput=HInputView.newClass();
var originZInput=HInputView.newClass();
var sizeLayout=HLayout.newClass();
var sizeXInput=HInputView.newClass();
var sizeYInput=HInputView.newClass();
var sizeZInput=HInputView.newClass();
var uvLayout=HLayout.newClass();
var uvXInput=HInputView.newClass();
var uvYInput=HInputView.newClass();
var marginInput=HInputView.newClass();
var numInput=HInputView.newClass();
var startButton=HButton.newClass();//创建一个交互按钮

Layout.setLayoutSize(-1,-1);
Layout.setGravity(17);

mainLayout.setLayoutBackgroundColor("#888888");
mainLayout.setPadding(10,10,10,10);
mainLayout.setOrientation(1);

titleLabel.setLabelText("示例-快速生成");

originXInput.setLayoutSize(120,-2);
originXInput.setInputHint("X位置");

originYInput.setLayoutSize(120,-2);
originYInput.setInputHint("Y位置");

originZInput.setLayoutSize(120,-2);
originZInput.setInputHint("Z位置");

sizeXInput.setLayoutSize(120,-2);
sizeXInput.setInputHint("X大小");

sizeYInput.setLayoutSize(120,-2);
sizeYInput.setInputHint("Y大小");

sizeZInput.setLayoutSize(120,-2);
sizeZInput.setInputHint("Z大小");

uvXInput.setLayoutSize(120,-2);
uvXInput.setInputHint("X贴图");

uvYInput.setLayoutSize(120,-2);
uvYInput.setInputHint("Y贴图");

marginInput.setLayoutSize(-1,-2);
marginInput.setInputHint("间距");

numInput.setLayoutSize(-1,-2);
numInput.setInputHint("数量");

startButton.setButtonText("生成");
startButton.setOnClickListener("AddOnClick()");

originLayout.setLayoutSize(-1,-2);
originLayout.addView(originXInput);
originLayout.addView(originYInput);
originLayout.addView(originZInput);

sizeLayout.setLayoutSize(-1,-2);
sizeLayout.addView(sizeXInput);
sizeLayout.addView(sizeYInput);
sizeLayout.addView(sizeZInput);

uvLayout.setLayoutSize(-1,-2);
uvLayout.addView(uvXInput);
uvLayout.addView(uvYInput);

mainLayout.addView(titleLabel);
mainLayout.addView(originLayout);
mainLayout.addView(sizeLayout);
mainLayout.addView(uvLayout);
mainLayout.addView(marginInput);
mainLayout.addView(numInput);
mainLayout.addView(startButton);

Layout.addView(mainLayout);

H.addView(Layout);

function AddOnClick()
{
    try
        {
          if(builder.IsOpenFile()&&builder.IsHasMobs())
              {
              for(var i=0;i<parseInt( numInput.getInputText());i++)
        {
            var before=parseInt( originXInput.getInputText())+i*parseInt(sizeXInput.getInputText())+i*parseInt(marginInput.getInputText());
     
        builder.addCube([
            before,
      parseInt(originYInput.getInputText()),
      parseInt(originZInput.getInputText()),
      parseInt(sizeXInput.getInputText()),
      parseInt(sizeYInput.getInputText()),
      parseInt(sizeZInput.getInputText()),
      parseInt(uvXInput.getInputText()),
      parseInt(uvYInput.getInputText())
  ],"#AAAAAA","生成块"+(i+1),builder.getMobsIndex(),builder.getBonesIndex(),builder.getBonesName(builder.getBonesIndex()));
        }
                  H.toast("完成",0);
                  H.removeAllView();
              }
            else
              {
                H.toast("请增加生物。",0);
              }
        }
    catch(error)
        {
         H.toast("出错了\n"+error.toString(),1);
        }
    
    
}