import timer from './timer';
//Instantiate fake timers for jest
jest.useFakeTimers();
it('Callback Invoked After 1 Second', () => {
  const callback = jest.fn();
  timer(callback);
  expect(callback).not.toBeCalled();            //Assert that callback is not called in the main thread (synchronous)
  jest.advanceTimersByTime(1000);               // Fast-forward until all timers have been executed
  expect(callback).toBeCalled();                //Assert that the callback is called
  expect(callback).toHaveBeenCalledTimes(1);    //Assert that the callback is called only once
});