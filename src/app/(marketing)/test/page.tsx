import { SimpleChatDemo } from "@/components/animated-chatbot";
import { FeedbackDashboard } from "@/components/feedback-dashboard";
import { ChatToDashboard } from "@/components/chat-to-dashboard";

export default function TestPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Component Test Page</h1>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">1. Simple Chat Demo</h2>
        <SimpleChatDemo />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">2. Feedback Dashboard</h2>
        <FeedbackDashboard />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">3. Chat to Dashboard</h2>
        <ChatToDashboard />
      </div>
    </div>
  );
}