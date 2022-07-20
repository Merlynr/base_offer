function double(params, success, failure) {
  setTimeout(() => {
    try {
      if (typeof params !== "number") {
        throw "Must provide number as first argument";
      }
      success(2 * params);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}

const successCallback = (x) => console.log(`Success:${x}`);
const failureCallback = (e) => console.log(`Failure:${e}`);

double(3, successCallback, failureCallback);
double("sss", successCallback, failureCallback);

// 回调依赖另一个回调
const successCallbackAgain = (x) => {
  double(x, (y) => console.log(`Success Again:${y}`));
};

double(3, successCallbackAgain, failureCallback);
