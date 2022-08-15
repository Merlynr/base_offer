class Vue {
  constructor(options) {
    if (typeof options.beforeCreated === "function")
      options.beforeCreated.bind(this)();
    this.$data = options.data;
    this.proxyData();
    if (typeof options.created === "function") options.created.bind(this)();
    if (typeof options.beforeMounted === "function")
      options.beforeMounted.bind(this)();
    this.$el = document.querySelector(options.el);
    this.compile(this.$el);
    if (typeof options.mounted === "function") options.mounted.bind(this)();
    this.$methods = options.methods || {};
  }
  compile(el) {
    let child = el.childNodes;
    child.forEach((item) => {
      //   结点
      if (item.nodeType === 1) {
        if (item.hasAttribute("@click")) {
          let event = item.getAttribute("@click").trim();
          item.addEventListener("click", (params) => {
            this.eventFn = this.$methods[event].bind(this);
            this.eventFn(params);
          });
        }
        if (item.childNodes.length > 0) {
          this.compile(item);
        }
      }
      //   文本
      if (item.nodeType === 3) {
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;
        item.textContent = text.replace(reg, (match, vmKey) => {
          vmKey = vmKey.trim();
          // TODO 同步修改dom中显示
          if (this.hasOwnProperty(vmKey)) {
          }
          return this.$data[vmKey];
        });
      }
    });
  }
  //   劫持data
  proxyData() {
    for (let key in this.$data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(val) {
          this.$data[key] = val;
        },
      });
    }
  }
}
