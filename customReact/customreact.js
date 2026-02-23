function customRender(reactElement, container) {
  let tag = document.createElement(reactElement.type);

    for (const key in reactElement.props) {
      tag.setAttribute(key, reactElement.props[key]);
    }

    tag.innerHTML = reactElement.children
  container.appendChild(tag);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
