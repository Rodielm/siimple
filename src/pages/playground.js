import React from "react";
import kofi from "kofi";

import Layout from "../layouts/application.js";
import {importSandbox, exportSandbox, createSandbox} from "../sandbox.js";
import {renderSandbox} from "../sandbox.js";
import {useEditor} from "../hooks/useEditor.js";

// Export playground application wrapper
export default props => {
    const codeRef = React.useRef();
    const resultRef = React.useRef();
    const fileRef = React.useRef();
    const editor = useEditor(codeRef, {});
    const [sandbox, setSandbox] = React.useState(createSandbox({}));
    const [theme, setTheme] = React.useState(props.defaultTheme || "light");
    // Get sandbox content
    const getSandbox = () => {
        return Object.assign({}, sandbox, {
            data: editor.current?.getCode() || "",
            key: Date.now(),
        });
    };
    // Run after app is rendered for the first time
    const loadSandbox = () => {
        if (window.location.hash.length < 2) {
            return editor.current.setCode(sandbox.data);
        }
        const source = kofi.qs.decode(window.location.hash.slice(1));
        importSandbox(source).then(content => {
            //setWelcomeVisible(false); //Hide welcome screen
            setSandbox(content); //Update sandbox
            return editor.current.setCode(content.data);
        }).catch(error => {
            //Error importing pad content
            //TODO:displat error in console
        });
    };
    React.useEffect(loadSandbox, []);
    // Handle file change --> load the selected file
    const handleLoad = () => {
        const file = fileRef.current.files[0];
        if (typeof file === "undefined") {
            return null; // --> no file to load
        }
        // Read the file and import to the playground
        // return kofi.file.readAsJSON(file).then(content => {
        //     return playgroundRef.current.load(content);
        // });
    };
    // Handle save --> download pad content
    const handleSaveClick = () => {
        return exportSandbox(getSandbox(), null);
    };
    // Handle load --> load sandbox from file
    const handleLoadClick = () => {
        return fileRef.current.click();
    };
    // Handle run
    const handleRun = () => {
        const newSandbox = getSandbox(); //Get current sandbox
        setSandbox(newSandbox);
    };
    const codeClass = kofi.classNames({
        "has-p-6 has-radius has-s-full": true,
        "CodeCake": true,
        "CodeCake-light has-bg-white": true,
    });
    const resultClass = kofi.classNames({
        "has-p-6 has-radius has-s-full": true,
        "has-bg-white": true,
    });
    // Render app component
    return (
        <Layout>
            <div className="has-d-flex has-flex-row has-items-stretch has-flex-grow has-w-full">
                <div ref={codeRef} className={codeClass} />
                <div className="has-h-full has-w-4" />
                <div className={resultClass}>
                    <iframe key={sandbox.key} ref={resultRef} />
                </div>
            </div>
            {/* Load file input */}
            <input type="file" ref={fileRef} hidden onChange={handleLoad} />
        </Layout>
    );
};
