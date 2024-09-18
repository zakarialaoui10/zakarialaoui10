export default function Wrapper({ children }) {
    const root = document.createElement("section");
    root.setAttribute("id", "sec");

    // Append each child to the root element
    if (Array.isArray(children)) {
        children.forEach(child => root.appendChild(child));
    } else {
        root.appendChild(children);
    }

    return root;
}
