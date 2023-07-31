import React, { useEffect, useRef, useState } from "react";
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
import { FaArrowLeft, FaEllipsisH } from "react-icons/fa";
import { LoginButton } from "../../Authentication/Auth.elements";
import { useNavigate, useParams } from "react-router-dom";
const myId = 1;
function Messages() {
  const [selectedUser, setSelectedUser] = useState();
  const [curChat, setCurChat] = useState();
  const { id } = useParams();

  function getChatData() {
    //make api call once user is selected
    console.log("Api Call for Chats");
  }

  useEffect(() => {
    getChatData();

    //simulate api calls until api integration
    if (selectedUser?.id === 2) setCurChat(dummyChatData2);
    else if (selectedUser?.id === 3) setCurChat(dummyChatData3);
    else setCurChat([]);
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
        <ChatBody
          chatData={curChat}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        ></ChatBody>
      </MessagesBody>
    </MessagesContainer>
  );
}

function MessageList({ chatList, selectedUser, setSelectedUser }) {
  const navigate = useNavigate();
  const handleClick = (id, userName) => {
    navigate(`/user/messages/${id}`);
    setSelectedUser({ id: id, userName });
  };
  return (
    <MessageListContainer isSelected={selectedUser} columns="1fr" rgap="0">
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
function ChatBody({ chatData, selectedUser, setSelectedUser }) {
  const [text, setText] = useState("");
  const [chats, setChats] = useState(chatData);
  const messagesEndRef = useRef(null);
  const handleBackClick = () => {
    setSelectedUser(null);
  };

  const handleSend = (data) => {
    console.log(chats);
    chatData.push({
      sender: 2,
      content: data,
      timestamp: "2023-07-27T12:35:01",
    });
    // setChats([
    //   ...chats,
    //   {
    //     sender: 2,
    //     content: data,
    //     timestamp: "2023-07-27T12:35:01",
    //   },
    // ]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      scrollToBottom();
    }
    setChats(chatData)
  }, [selectedUser, chatData, chats]);

  if (chatData?.length !== 0) {
    return (
      <ChatBodyContainer isSelected={selectedUser} columns="1fr">
        {chatData ? (
          <>
            <ChatBodyHeader isSelected={selectedUser}>
              {selectedUser && (
                <span>
                  <FaArrowLeft onClick={handleBackClick} />
                </span>
              )}
              <Avatar online={true} image={image}></Avatar>
              <GridContainer align="flex-start" justify="flex-start" rgap="4px">
                <Heading2>{selectedUser?.userName}</Heading2>
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
              <div ref={messagesEndRef}></div>
            </ChatContent>
            <ChatField>
              <GridContainer columns="auto auto auto">
                <AttachIcon />
                <PictureIcon />
                <LocationIcon />
              </GridContainer>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
              ></input>
              <button onClick={() => handleSend(text)}>Send</button>
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
