"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
var Broadcaster = (function () {
    function Broadcaster() {
        this._eventBus = new Subject_1.Subject();
    }
    Broadcaster.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    Broadcaster.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    return Broadcaster;
}());
exports.Broadcaster = Broadcaster;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYnJvYWRjYXN0L2Jyb2FkY2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1QztBQUV2QyxvQ0FBa0M7QUFDbEMsaUNBQStCO0FBTy9CO0lBR0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQU8sRUFBa0IsQ0FBQztJQUNqRCxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEdBQVEsRUFBRSxJQUFVO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx3QkFBRSxHQUFGLFVBQU0sR0FBUTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTthQUNqQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBakIsQ0FBaUIsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBRyxLQUFLLENBQUMsSUFBSSxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxrQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksa0NBQVciLCJmaWxlIjoiYXBwL3NoYXJlZC9icm9hZGNhc3QvYnJvYWRjYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW50ZXJmYWNlIEJyb2FkY2FzdEV2ZW50IHtcbiAga2V5OiBhbnk7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBCcm9hZGNhc3RlciB7XG4gIHByaXZhdGUgX2V2ZW50QnVzOiBTdWJqZWN0PEJyb2FkY2FzdEV2ZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9ldmVudEJ1cyA9IG5ldyBTdWJqZWN0PEJyb2FkY2FzdEV2ZW50PigpO1xuICB9XG5cbiAgYnJvYWRjYXN0KGtleTogYW55LCBkYXRhPzogYW55KSB7XG4gICAgdGhpcy5fZXZlbnRCdXMubmV4dCh7a2V5LCBkYXRhfSk7XG4gIH1cblxuICBvbjxUPihrZXk6IGFueSk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLl9ldmVudEJ1cy5hc09ic2VydmFibGUoKVxuICAgICAgLmZpbHRlcihldmVudCA9PiBldmVudC5rZXkgPT09IGtleSlcbiAgICAgIC5tYXAoZXZlbnQgPT4gPFQ+ZXZlbnQuZGF0YSk7XG4gIH1cbn1cbiJdfQ==
