import { NextPage } from "next";
import { TabStyles } from "./tab-styles";
import { useState } from "react";

export interface TabsProps {
  content: { key: string; content: string }[];
}

const Tabs: NextPage<TabsProps> = ({ content }: TabsProps) => {
  const [showTab, setShowTab] = useState<string>(content[0].key);

  const handleTab = (tabKey: string) => {
    setShowTab(tabKey);
  };

  return (
    <TabStyles.StyledTabs>
      <TabStyles.ButtonsWrapper>
        {content.map(({ key }) => (
          <TabStyles.TabButton key={key} onClick={() => handleTab(key)}>
            <div>{key}</div>
          </TabStyles.TabButton>
        ))}
      </TabStyles.ButtonsWrapper>
      <TabStyles.TabsWrapper showTab={showTab}>
        {content.map((about) => (
          <TabStyles.Tab key={about.key} className={about.key}>
            <article
              dangerouslySetInnerHTML={{ __html: about.content }}
            ></article>
          </TabStyles.Tab>
        ))}
      </TabStyles.TabsWrapper>
    </TabStyles.StyledTabs>
  );
};

export default Tabs;
