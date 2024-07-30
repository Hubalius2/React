import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./section";
import Tabs from "./tabs";

export default function examples() {
    const [selectedTopic, setSelectTopic] = useState();
    function handleSelect(selected) {
        setSelectTopic(selected);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                containerType="menu"
                buttons={
                    <>
                        <TabButton label="Components" onClick={() => handleSelect('components')}
                            isSelected={selectedTopic === 'components'} />
                        <TabButton label="JSX" onClick={() => handleSelect('jsx')}
                            isSelected={selectedTopic === 'jsx'} />
                        <TabButton label="Props" onClick={() => handleSelect('props')}
                            isSelected={selectedTopic === 'props'} />
                        <TabButton label="State" onClick={() => handleSelect('state')}
                            isSelected={selectedTopic === 'state'} />
                    </>
                }>
                {!selectedTopic ? (
                    <p>PLease select a topic.</p>
                ) : (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
                    </div>
                )}
            </Tabs>
        </Section>
    );
}