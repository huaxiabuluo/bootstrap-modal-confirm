/*!
 * Bootstrap Modal Confirm v0.0.1
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
	$.Modal = function(modalId, options) {
		var reg = /{([^{}]*?)}/igm;
		var $modalConfirm = $('#' + modalId);

		if ($.Modal.modalHtmlTemplate) {
			var modalHtml = $.Modal.modalHtmlTemplate;
		} else {
			var modalHtml = $.Modal.modalHtmlTemplate = $modalConfirm.html();
		}

		var _dialog = function(options) {
			var ops = {
				title: "title",
				content: "content",
				btnCancel: "Cancel",
				btnOk: "Ok"
			};

			$.extend(ops, options);

			// matchedStr: {title}, key: title
			var html = modalHtml.replace(reg, function(matchedStr, key){
				return ops[key];
			});

			$modalConfirm.html(html);
		};

		$modalConfirm.html(modalHtml);

		_dialog(options);
		$modalConfirm.modal('show');

		return {
			do: function(OKHandler, CancelHandler) {
				if($.isFunction(OKHandler)) {
					// do OKHandler when click 'Ok'
					$modalConfirm.find('.ok').click(function() {
						OKHandler();
					});
				}
				if($.isFunction(CancelHandler)) {
					// do CancelHandler when click 'Cancel'
					$modalConfirm.find('.cancel').click(function() {
						CancelHandler();
					});
				}
			}
		};
	};

})(jQuery);
