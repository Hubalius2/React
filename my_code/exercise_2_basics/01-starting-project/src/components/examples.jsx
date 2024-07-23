import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./section";

export default function examples() {
    const [selectedTopic, setSelectTopic] = useState();
    function handleSelect(selected) {
        setSelectTopic(selected);
    }

    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton label="Components" onSelect={() => handleSelect('components')}
                    isSelected={selectedTopic === 'components'} />
                <TabButton label="JSX" onSelect={() => handleSelect('jsx')}
                    isSelected={selectedTopic === 'jsx'} />
                <TabButton label="Props" onSelect={() => handleSelect('props')}
                    isSelected={selectedTopic === 'props'} />
                <TabButton label="State" onSelect={() => handleSelect('state')}
                    isSelected={selectedTopic === 'state'} />
            </menu>

            {!selectedTopic ? (
                <p>PLease select a topic.</p>
            ) : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
                </div>
            )}
        </Section>
    );
}