 const hasOwn = {}.hasOwnProperty;

export function classNames(this: any, ...args: any[]):any {
    const classes = [];
  
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (!arg) {
        continue;
      }
  
      const argType = typeof arg;
  
      if (argType === 'string' || argType === 'number') {
        classes.push((this && this[arg]) || arg);
      } else if (Array.isArray(arg)) {
        classes.push(classNames.apply(this, arg));
      } else if (argType === 'object') {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push((this && this[key]) || key);
          }
        }
      }
    }
    return classes.join(' ');
  }