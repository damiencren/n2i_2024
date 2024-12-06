import React, { FC } from 'react';
import { Composer, Thread, ThreadWelcome, UserActionBar, UserMessage, type ThreadConfig } from "@assistant-ui/react";
import { AssistantMessage, BranchPicker } from "@assistant-ui/react";



const CustomCustomAvatar: FC = () => {
    return (
        <div className="custom-avatar">
            <img className="rounded-full w-10 h-10 ml-4 mt-3" src="/pirate.jpg" alt="Custom Avatar" />
        </div>
    );
};

const CustomAssistantMessage: FC = () => {
    return (
        <AssistantMessage.Root >
            <CustomCustomAvatar/>
            <AssistantMessage.Content className="mr-4 ml-4 p-4 text-sm w-fit nothing-you-could-do-regular" style={{ backgroundImage: "url('/msg_bg.png')", backgroundSize: "100% 100%" }}/>
            <BranchPicker />
        </AssistantMessage.Root>
    );
};


const CustumUserMessage: FC = () => {
    return (
      <UserMessage.Root >
        <UserMessage.Attachments />
        <UserMessage.Content className='p-4 text-sm bg-transparent mr-4 rounded-sm nothing-you-could-do-regular' style={{ backgroundImage: "url('/msg_bg.png')", backgroundSize: "100% 100%" }}/>
        <BranchPicker />
      </UserMessage.Root>
    );
  };


const CustomComposer: FC = () => {
    return (
      <Composer.Root>
        <Composer.Input autoFocus />
        <Composer.Action />
      </Composer.Root>
    );
  };

const CustomThread: FC<ThreadConfig> = (config) => {
    return (
        <Thread.Root config={config} className='bg-transparent'>
            <Thread.Viewport>
                <ThreadWelcome />
                <Thread.Messages components={{ AssistantMessage: CustomAssistantMessage, UserMessage: CustumUserMessage}} />
                <Thread.FollowupSuggestions />
                <Thread.ViewportFooter>
                    <Thread.ScrollToBottom />
                    <CustomComposer />
                </Thread.ViewportFooter>
            </Thread.Viewport>
        </Thread.Root>
    );
};

export default CustomThread;