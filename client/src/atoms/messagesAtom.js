import { atom } from "recoil"


const conversationsAtom = new atom({
    key: "converstationsAtom",
    default: [],
});

export const selectedConversationAtom = new atom({
    key: "selectedConversation",
    default: {
        _id: "",
        userId: "",
        username: "",
        userProfilePic: "",
    },
});

export default conversationsAtom;


 
