import AppDispatcher from "../AppDispatcher";
import { INCREMENT, DECREMENT } from "../AppActionType";

const counterValues = {
  First: 0,
  Second: 10,
  Third: 30,
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCountrValues: function () {
    return counterValues;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === INCREMENT) {
    counterValues[action.counterCaption]++;
    CounterStore.emitChange();
  } else if (action.type === DECREMENT) {
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();
  }
});
