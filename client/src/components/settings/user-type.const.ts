import { UserType } from "./user-type.type";

export const UserTypes: UserType[] = ["RED", "BLUE", "GREEN", "YELLOW", "GREY"];

export const DefaultUserTypeName = "מוגלגים... 😞";

export const NameByUserType: Record<UserType, string> = {
    RED: "חבר בגריפינדור🦁",
    BLUE: "חבר ברייבנקלו🦅",
    GREEN: "חבר בסלית'רין🐍",
    YELLOW: "חבר בהפלפאף🦡",
    GREY: DefaultUserTypeName,
}
