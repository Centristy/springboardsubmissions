function curriedAdd(total) {

    if (total === undefined) return 0;
    return function next(num) {
      if (num === undefined) return total;
      total += num;
      return next;
    };

}

module.exports = { curriedAdd };
