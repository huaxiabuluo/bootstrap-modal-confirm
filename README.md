# bootstrap-modal-confirm #
The confirm modal made with Bootstrap and jQuery


### 示例 ###

// 为简化代码，直接使用了HTML中创建的模态框Div元素

$.Modal('modalId', {
    title: "模态框标题",
    content: "模态框内容",
    btnCancel: "取消",
    btnOk: "确定"
})
.do(OKHandler, CancelHandler);	


### To continue ###

1. 在bootstrap-modal-confirm.js中动态创建模态框Div元素(单例)
2. 判断传入参数类型
