"use client";

import {
  ChatComposer,
  ChatLayout,
  ChatMessage,
  ChatMessageBubble,
  ChatMessageList,
  ChatSystemMessage,
} from "@astryxdesign/core/Chat";
import { Card } from "@astryxdesign/core/Card";
import { ClientOnly } from "@/components/ClientOnly";
import { Examples, Preview } from "./shared";

export default function ChatDemo() {
  return (
    <Examples>
      <Preview label="Thread">
        <ClientOnly>
          <Card height={360} padding={0}>
            <ChatLayout composer={<ChatComposer onSubmit={() => undefined} placeholder="Write a message" />}>
              <ChatMessageList>
                <ChatSystemMessage>Order #1043 · Placed</ChatSystemMessage>
                <ChatMessage sender="assistant" name="OpenSeat">
                  <ChatMessageBubble>Can you show me the full details?</ChatMessageBubble>
                </ChatMessage>
                <ChatMessage sender="user">
                  <ChatMessageBubble>Here’s everything I have on order #1043.</ChatMessageBubble>
                </ChatMessage>
                <ChatMessage sender="assistant" name="OpenSeat">
                  <ChatMessageBubble>Estimated arrival tomorrow by 8pm.</ChatMessageBubble>
                </ChatMessage>
              </ChatMessageList>
            </ChatLayout>
          </Card>
        </ClientOnly>
      </Preview>
    </Examples>
  );
}
