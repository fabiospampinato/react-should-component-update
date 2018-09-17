"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
/* SHOULD COMPONENT UPDATE */
function shouldComponentUpdate() {
    var rules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rules[_i] = arguments[_i];
    }
    return function wrapper(WrappedComponent) {
        return /** @class */ (function (_super) {
            __extends(PropsChangeComponent, _super);
            function PropsChangeComponent(props) {
                var _this = _super.call(this, props) || this;
                _this.changedRules = {}; // path => value
                _this.toggledRules = {}; // path => toggled (boolean)
                rules.filter(_.isString).forEach(function (rule) {
                    _this.changedRules[rule] = _.get(props, rule);
                });
                return _this;
            }
            PropsChangeComponent.prototype.isRuleChanged = function (nextProps, rule) {
                if (_.isString(rule)) { // rule => path, checking if props changed
                    var value = _.get(nextProps, rule);
                    if (this.changedRules[rule] === value)
                        return false;
                    this.changedRules[rule] = value;
                    return true;
                }
                else if (_.isArray(rule)) { // rule => [path, valuePath], checking if prop's toggle status changed
                    var path = rule[0], valuePath = rule[1], toggled = _.get(nextProps, path) === _.get(nextProps, valuePath);
                    if (this.toggledRules[path] === toggled)
                        return false;
                    this.toggledRules[path] = toggled;
                    return true;
                }
                else if (_.isFunction(rule)) { // Custom logic
                    return !!rule(this.props, nextProps);
                }
                return false;
            };
            PropsChangeComponent.prototype.shouldComponentUpdate = function (nextProps) {
                var _this = this;
                return !!rules.find(function (rule) { return _this.isRuleChanged(nextProps, rule); });
            };
            PropsChangeComponent.prototype.render = function () {
                return React.createElement(WrappedComponent, __assign({}, this.props));
            };
            return PropsChangeComponent;
        }(React.Component));
    };
}
/* EXPORT */
exports.default = shouldComponentUpdate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLDBCQUE0QjtBQUM1Qiw2QkFBK0I7QUFFL0IsNkJBQTZCO0FBRTdCLFNBQVMscUJBQXFCO0lBQUcsZUFBUTtTQUFSLFVBQVEsRUFBUixxQkFBUSxFQUFSLElBQVE7UUFBUiwwQkFBUTs7SUFFdkMsT0FBTyxTQUFTLE9BQU8sQ0FBRyxnQkFBZ0I7UUFFeEMsT0FBTztZQUFtQyx3Q0FBeUI7WUFLakUsOEJBQWMsS0FBSztnQkFBbkIsWUFFRSxrQkFBUSxLQUFLLENBQUUsU0FRaEI7Z0JBYkQsa0JBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQ25DLGtCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsNEJBQTRCO2dCQU03QyxLQUFLLENBQUMsTUFBTSxDQUFHLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxPQUFPLENBQUcsVUFBRSxJQUFZO29CQUVsRCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUcsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDO2dCQUVsRCxDQUFDLENBQUMsQ0FBQzs7WUFFTCxDQUFDO1lBRUQsNENBQWEsR0FBYixVQUFnQixTQUFTLEVBQUUsSUFBSTtnQkFFN0IsSUFBSyxDQUFDLENBQUMsUUFBUSxDQUFHLElBQUksQ0FBRSxFQUFHLEVBQUUsMENBQTBDO29CQUVyRSxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFHLFNBQVMsRUFBRSxJQUFJLENBQUUsQ0FBQztvQkFFeEMsSUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUs7d0JBQUcsT0FBTyxLQUFLLENBQUM7b0JBRXRELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUVoQyxPQUFPLElBQUksQ0FBQztpQkFFYjtxQkFBTSxJQUFLLENBQUMsQ0FBQyxPQUFPLENBQUcsSUFBSSxDQUFFLEVBQUcsRUFBRSxzRUFBc0U7b0JBRWhHLElBQUEsY0FBSSxFQUFFLG1CQUFTLEVBQ2hCLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFHLFNBQVMsRUFBRSxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFHLFNBQVMsRUFBRSxTQUFTLENBQUUsQ0FBQztvQkFFN0UsSUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU87d0JBQUcsT0FBTyxLQUFLLENBQUM7b0JBRXhELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUVsQyxPQUFPLElBQUksQ0FBQztpQkFFYjtxQkFBTSxJQUFLLENBQUMsQ0FBQyxVQUFVLENBQUcsSUFBSSxDQUFFLEVBQUcsRUFBRSxlQUFlO29CQUVuRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUUsQ0FBQztpQkFFekM7Z0JBRUQsT0FBTyxLQUFLLENBQUM7WUFFZixDQUFDO1lBRUQsb0RBQXFCLEdBQXJCLFVBQXdCLFNBQVM7Z0JBQWpDLGlCQUlDO2dCQUZDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUcsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFHLFNBQVMsRUFBRSxJQUFJLENBQUUsRUFBdEMsQ0FBc0MsQ0FBRSxDQUFDO1lBRXpFLENBQUM7WUFFRCxxQ0FBTSxHQUFOO2dCQUVFLE9BQU8sb0JBQUMsZ0JBQWdCLGVBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFDO1lBRTlDLENBQUM7WUFFSCwyQkFBQztRQUFELENBQUMsQUE5RE0sQ0FBbUMsS0FBSyxDQUFDLFNBQVMsRUE4RGpELENBQUM7SUFFWCxDQUFDLENBQUM7QUFFSixDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLHFCQUFxQixDQUFDIn0=