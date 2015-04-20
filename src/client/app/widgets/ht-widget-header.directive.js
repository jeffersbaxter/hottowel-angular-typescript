var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        var HtWidgetHeader = (function () {
            function HtWidgetHeader() {
                this.scope = {
                    'title': '@',
                    'subtitle': '@',
                    'rightText': '@',
                    'allowCollapse': '@'
                };
                this.templateUrl = 'app/widgets/widget-header.html';
                this.restrict = 'EA';
            }
            HtWidgetHeader.instance = function () {
                return new HtWidgetHeader();
            };
            HtWidgetHeader.$inject = [''];
            return HtWidgetHeader;
        })();
        angular.module('app.widgets').directive('htWidgetHeader', HtWidgetHeader.instance);
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/widgets/ht-widget-header.directive.js.map