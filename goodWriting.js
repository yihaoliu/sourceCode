//求最大值得方法
function max(a,b){
	if(a>b){
		return a;
	}else{
        //arguments.callee代表函数本身
		return arguments.callee(b,a);
	}
}