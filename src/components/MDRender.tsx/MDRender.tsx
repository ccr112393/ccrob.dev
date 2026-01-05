import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MDRender = () => {

    const [markdown, setMarkdown] = useState<string>("");

    const demoMD = "/md/demo.md";

    useEffect(() => {
        fetch(demoMD)
            .then((response) => response.text())
            .then((md) => {
                setMarkdown(md);
            })
            .catch((err) => console.error(err));
    }, [])

    return (
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    );
}