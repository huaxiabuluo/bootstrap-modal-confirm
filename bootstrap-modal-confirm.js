/*!
 * Bootstrap Modal Confirm v0.0.2
 * https://github.com/huaxiabuluo/bootstrap-modal-confirm
 *
 * By: Xiaolong Lu <huaxiabuluo@hotmail.com>
 * Date: 2016-07-16
 * 
 * A sample plugin, you can extend it
 * or write your own confirm dialog based on it.
 * 
 */
(function($) {
	var $modalDOM = $('<div id="modalId" class="modal hide fade" tabindex="-1" role="dialog" data-backdrop="static" aria-hidden="true"></div>');
	var modalInnerHtml = 
		'<div class="modal-header">' + 
		    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
		    '<h3>{title}</h3>' +
		'</div>' +
		'<div class="modal-body">' +
		    '<p>{content}</p>' +
		'</div>' +
		'<div class="modal-footer">' +
		    '<a href="#" class="btn cancel" data-dismiss="modal">{btnCancel}</a>' +
		    '<a href="#" class="btn btn-primary ok" data-dismiss="modal">{btnOk}</a>' +
		'</div>';
	var reg = /{([^{}]*?)}/img;

	$('body').append($modalDOM);

	var _dialog = function(options) {
		var ops = {
			title: "title",
			content: "content",
			btnCancel: "Cancel",
			btnOk: "Ok"
		};

		$.extend(ops, options);

		$modalDOM.off('click', '.ok');
		$modalDOM.off('click', '.cancel');

		// matchedStr: {title}, key: title
		$modalDOM.html(modalInnerHtml.replace(reg, function(matchedStr, key){
			return ops[key];
		}));
	};

	$.Modal = function(options) {
		_dialog(options);
		$modalDOM.modal('show');
		return {
			do: function(OKHandler, CancelHandler) {
				if($.isFunction(OKHandler)) {
					// do OKHandler when click 'Ok'
					$modalDOM.on('click', '.ok', OKHandler);
				}
				if($.isFunction(CancelHandler)) {
					// do CancelHandler when click 'Cancel'
					$modalDOM.on('click', '.cancel', CancelHandler);
				}
			}
		};
	};

})(jQuery);
