/**
 * Created by Administrator on 2015/11/20.
 */
var code ; //在全局定义验证码
//产生验证码
function createCode(div_code){
    code = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById(div_code);
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
    }
    checkCode.value = code;//把code值赋给验证码
}

function validate(inputs){
    for(var i =0; i < inputs.length; i++){
        if(inputs[i].id == 'identification_code'){
            alert('111');
            var inputCode = inputs[i].value.toUpperCase(); //取得输入的验证码并转化为大写
            if(inputCode.length <= 0) { //若输入的验证码长度为0
                createCode('code');
                alert("请输入验证码！"); //则弹出请输入验证码
                return false;
            }else if(inputCode.toLowerCase() != code.toLowerCase() ) { //若输入的验证码与产生的验证码不一致时
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误
                createCode('code');//刷新验证码
                document.getElementById("identification_code").value = "";//清空文本框
                document.getElementById("identification_code").focus();
                return false;
            }else { //输入正确时
                alert("验证码正确^-^"); //弹出^-^
            }
        }
        else if(inputs[i].id == 'type'){
            if(inputs[i].value == '==请选择=='){
                alert('请选择类型！');
                return false;
            }
        }
        else if(inputs[i].type == 'text'){
            if(inputs[i].value.length <= 0){
                alert('请输入红星标注必填内容！');
                inputs[i].focus();
                return false;
            }
        }
        else if(inputs[i].getContent()){
            console.log(i + '|' + inputs[i].getContent() + '|' + i);
            if(inputs[i].getContent() == ''){
                alert('请输入主体内容！');
                return false;
            };
        }
    }
    return true;
}