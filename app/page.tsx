'use client'

import { useChat } from "ai/react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, ImageIcon, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col border rounded-md p-4 w-[80vh] h-[80vh]">
        <header className="flex items-center px-6 py-4">
          <Avatar className="mr-4">
            <AvatarImage alt="Chatbot Avatar" src="/chatbot-avatar.png" />
            <AvatarFallback>
              <Bot />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-medium">
              Google <Badge className="relative bottom-2">Gemini</Badge>
            </h2>
            <p className="text-sm">
              Gemini, your friendly neighborhood AI assistant
            </p>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length > 0
            ? messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {m.role === "user" ? (
                    <Avatar className="mr-4">
                      <AvatarImage alt="User Avatar" src="/user-avatar.png" />
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="mr-4">
                      <AvatarImage
                        alt="Chatbot Avatar"
                        src="/chatbot-avatar.png"
                      />
                      <AvatarFallback>
                        <Bot />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="rounded-lg p-4 max-w-[75%]">
                    <p className="text-sm">{m.content}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-6 py-4 flex items-center space-x-4"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            className="flex-1"
            placeholder="Type your message..."
            type="text"
          />
          <div className="flex items-center space-x-2">
            <Button type="submit" variant="outline">
              <Send className="w-4 h-4"/>
            </Button>
           
          </div>
        </form>
      </div>
    </main>
  );
}
