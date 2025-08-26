"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Phone, Video } from "lucide-react";

const conversations = [
  {
    id: 1,
    client: "John Smith",
    lastMessage: "When can we schedule the showing?",
    time: "2 min ago",
    unread: 2,
    avatar: "JS",
  },
  {
    id: 2,
    client: "Sarah Wilson",
    lastMessage: "Thank you for the property details",
    time: "1 hour ago",
    unread: 0,
    avatar: "SW",
  },
  {
    id: 3,
    client: "Mike Johnson",
    lastMessage: "Is the inspection report ready?",
    time: "3 hours ago",
    unread: 1,
    avatar: "MJ",
  },
];

const messages = [
  {
    id: 1,
    sender: "John Smith",
    message:
      "Hi Sarah, I'm interested in the Oak Street property. When can we schedule a showing?",
    time: "10:30 AM",
    isAgent: false,
  },
  {
    id: 2,
    sender: "You",
    message:
      "Hi John! I'd be happy to show you the property. Are you available this afternoon around 2 PM?",
    time: "10:35 AM",
    isAgent: true,
  },
  {
    id: 3,
    sender: "John Smith",
    message:
      "Perfect! 2 PM works great for me. Should I meet you at the property?",
    time: "10:40 AM",
    isAgent: false,
  },
];

export default function AgentMessages() {
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600">
          Communicate with your clients and prospects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                    selectedConversation.id === conversation.id
                      ? "bg-emerald-50"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {conversation.avatar}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">
                          {conversation.client}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {conversation.time}
                        </p>
                      </div>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge
                        variant="default"
                        className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                      >
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {selectedConversation.avatar}
                  </span>
                </div>
                <div>
                  <CardTitle className="text-lg">
                    {selectedConversation.client}
                  </CardTitle>
                  <CardDescription>Online now</CardDescription>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isAgent ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isAgent
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isAgent ? "text-emerald-100" : "text-gray-500"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
