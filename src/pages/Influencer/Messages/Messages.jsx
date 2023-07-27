import React, { useEffect, useState } from "react";
import {
  MessagesContainer,
  MessagesBody,
  MessagesHeader,
  BellIcon,
  MessageIcon,
  PhoneIcon,
  MessageListContainer,
  ChatCard,
  EllipsisHIcon,
  VideoIcon,
  ChatBodyContainer,
  ChatBodyHeader,
  ChatContent,
  MyChatBlock,
  OtherChatBlock,
  ChatField,
  AttachIcon,
  PictureIcon,
  LocationIcon,
} from "../User.elements";
import Avatar from "../helpers/Avatar";
import {
  BoldText,
  GridContainer,
  Heading,
  Heading2,
  ScrollContainer,
  SmallLightText,
} from "../../../Global";
import {
  dummyMessageList,
  dummyChatData,
  dummyChatData2,
  dummyChatData3,
} from "../../../data/dummyData";
import { parseCampaignTime, parseChatTime } from "../../../utils/parseDate";

import image from "../../../assets/images/logo.png";
import { FaEllipsisH } from "react-icons/fa";
import { LoginButton } from "../../Authentication/Auth.elements";
const myId = 1;
function Messages() {
  const [selectedUser, setSelectedUser] = useState({ id: 0, userName: "" });
  const [curChat, setCurChat] = useState();

  function getChatData() {
    //make api call once user is selected
    console.log("Api Call for Chats");
  }

  useEffect(() => {
    getChatData();

    //simulate api calls until api integration
    if (selectedUser.id === 2) setCurChat(dummyChatData2);
    else if (selectedUser.id === 3) setCurChat(dummyChatData3);
  }, [selectedUser]);
  return (
    <MessagesContainer>
      <MessagesHeader>
        <div>
          <MessageIcon />
          <BellIcon />
          <PhoneIcon />
          <Avatar />
        </div>
      </MessagesHeader>
      <MessagesBody>
        <MessageList
          chatList={dummyMessageList}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        ></MessageList>
        <ChatBody chatData={curChat} selectedUser={selectedUser}></ChatBody>
      </MessagesBody>
    </MessagesContainer>
  );
}

function MessageList({ chatList, selectedUser, setSelectedUser }) {
  const handleClick = (id, userName) => {
    setSelectedUser({ id: id, userName });
  };
  return (
    <MessageListContainer columns="1fr" rgap="0">
      <GridContainer justify="flex-start">
        <Heading style={{ margin: "1rem" }}>Messages</Heading>
      </GridContainer>
      <ScrollContainer maxHeight="100%">
        {chatList.map((cht) => (
          <ChatCard
            onClick={() => handleClick(cht.id, cht.userName)}
            selected={selectedUser == cht.id}
          >
            <Avatar />
            <GridContainer justify="flex-start" rgap="4px">
              <BoldText>{cht.userName}</BoldText>
              <SmallLightText>{cht.firstChat}</SmallLightText>
            </GridContainer>
            <SmallLightText>{parseCampaignTime(cht.timestamp)}</SmallLightText>
          </ChatCard>
        ))}
      </ScrollContainer>
    </MessageListContainer>
  );
}
function ChatBody({ chatData, selectedUser }) {
  console.log(selectedUser);
  if (chatData) {
    return (
      <ChatBodyContainer columns="1fr">
        {chatData ? (
          <>
            <ChatBodyHeader>
              <Avatar online={true} image={image}></Avatar>
              <GridContainer align="flex-start" justify="flex-start" rgap="4px">
                <Heading2>{selectedUser.userName}</Heading2>
                <SmallLightText>Active Now</SmallLightText>
              </GridContainer>
              <GridContainer columns="auto auto auto">
                <VideoIcon />
                <PhoneIcon />
                <EllipsisHIcon />
              </GridContainer>
            </ChatBodyHeader>
            <ChatContent>
              {chatData.map((obj) => {
                if (obj.sender == myId) {
                  return <MyChat {...obj}></MyChat>;
                } else {
                  return <OtherChat {...obj}></OtherChat>;
                }
              })}
            </ChatContent>
            <ChatField>
              <GridContainer columns="auto auto auto">
                <AttachIcon />
                <PictureIcon />
                <LocationIcon />
              </GridContainer>
              <input placeholder="Type a message..."></input>
              <button>Send</button>
            </ChatField>
          </>
        ) : (
          <h1>Select User</h1>
        )}
      </ChatBodyContainer>
    );
  }
}
export default Messages;

function MyChat({ image, content, timestamp }) {
  return (
    <GridContainer columns="1fr">
      <GridContainer
        columns="auto auto auto"
        justify="flex-end"
        align="flex-start"
        gap="8px"
      >
        <SmallLightText
          style={{ height: "100%", alignItems: "end", display: "flex" }}
        >
          {parseChatTime(timestamp).parsedTime}
        </SmallLightText>
        <MyChatBlock>{content}</MyChatBlock>
        <Avatar image={image} />
      </GridContainer>
    </GridContainer>
  );
}
function OtherChat({ image, content, timestamp }) {
  return (
    <GridContainer columns="1fr">
      <GridContainer
        columns="auto max-content auto"
        justify="flex-start"
        align="flex-start"
        gap="8px"
      >
        <Avatar image={image} />
        <OtherChatBlock>{content}</OtherChatBlock>
        <SmallLightText
          style={{ height: "100%", alignItems: "end", display: "flex" }}
        >
          {parseChatTime(timestamp).parsedTime}
        </SmallLightText>
      </GridContainer>
    </GridContainer>
  );
}
