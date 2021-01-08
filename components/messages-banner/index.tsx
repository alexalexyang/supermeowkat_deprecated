import { useEffect, useState } from "react";

import { BannerP } from "../../styles/messages-banner-styles";
import { NextPage } from "next";

interface MessageProps {
  msg: string;
  url?: string;
}

interface CauseProps {
  messages: MessageProps[];
}

const getRandomCause = (messages: MessageProps[]) =>
  messages[Math.floor(Math.random() * messages.length)];

const MessagesBanner: NextPage<CauseProps> = ({ messages }: CauseProps) => {
  const [message, setMessage] = useState<MessageProps | null>(null);

  useEffect(() => {
    const initialCause = getRandomCause(messages);
    setMessage(initialCause);
  }, [messages]);

  useEffect(() => {
    setInterval(() => {
      setMessage(null);
      const randomCause = getRandomCause(messages);
      setMessage(randomCause);
    }, 30000);
  }, [messages]);

  return message ? (
    <BannerP>
      <a href={message.url ? message.url : "#"} target="__blank">
        {message.msg}
      </a>
    </BannerP>
  ) : null;
};

export default MessagesBanner;
