export const message = {
  add: (content: string, className: string) => {
    const el = document.createElement("div");
    el.className = `alert alert-${className}`;
    el.id = `alert`;
    el.innerText = content;
    document.body.appendChild(el);
  },
  remove: () => {
    const el = document.getElementById("alert")
    el?.remove();
  },
  success: (content: string, duration = 1.5) => {
    message.add(content, "success");
    setTimeout(() => {
      message.remove()
    }, duration * 1000);
  },
};
