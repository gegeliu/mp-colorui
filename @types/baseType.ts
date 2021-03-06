import { CSSProperties } from "react";

export type bgColorMoreType =
  | "gradualRed"
  | "gradualOrange"
  | "gradualGreen"
  | "gradualPurple"
  | "gradualPink"
  | "gradualBlue";

export type bgColorType =
  | "red"
  | "orange"
  | "yellow"
  | "olive"
  | "green"
  | "cyan"
  | "blue"
  | "purple"
  | "mauve"
  | "pink"
  | "brown"
  | "grey"
  | "gray"
  | "black"
  | "white";

export type lightBgColorType =
  | "light-red"
  | "light-orange"
  | "light-yellow"
  | "light-olive"
  | "light-green"
  | "light-cyan"
  | "light-blue"
  | "light-purple"
  | "light-mauve"
  | "light-pink"
  | "light-brown"
  | "light-grey"
  | "light-gray"
  | "light-black"
  | "light-white";

export type normalSizeType = "small" | "normal" | "large" | "xlarge";

export type extendSizeType =
  | "xsmall"
  | "small"
  | "normal"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "slarge"
  | "xslarge";

export type iconType =
  | "appreciate"
  | "check"
  | "close"
  | "edit"
  | "emoji"
  | "favorfill"
  | "favor"
  | "loading"
  | "locationfill"
  | "location"
  | "phone"
  | "roundcheckfill"
  | "roundcheck"
  | "roundclosefill"
  | "roundclose"
  | "roundrightfill"
  | "roundright"
  | "search"
  | "taxi"
  | "timefill"
  | "time"
  | "unfold"
  | "warnfill"
  | "warn"
  | "camerafill"
  | "camera"
  | "commentfill"
  | "comment"
  | "likefill"
  | "like"
  | "notificationfill"
  | "notification"
  | "order"
  | "samefill"
  | "same"
  | "deliver"
  | "evaluate"
  | "pay"
  | "send"
  | "shop"
  | "ticket"
  | "back"
  | "cascades"
  | "discover"
  | "list"
  | "more"
  | "scan"
  | "settings"
  | "questionfill"
  | "question"
  | "shopfill"
  | "form"
  | "pic"
  | "filter"
  | "footprint"
  | "top"
  | "pulldown"
  | "pullup"
  | "right"
  | "refresh"
  | "moreandroid"
  | "deletefill"
  | "refund"
  | "cart"
  | "qrcode"
  | "remind"
  | "delete"
  | "profile"
  | "home"
  | "cartfill"
  | "discoverfill"
  | "homefill"
  | "message"
  | "addressbook"
  | "link"
  | "lock"
  | "unlock"
  | "vip"
  | "weibo"
  | "activity"
  | "friendaddfill"
  | "friendadd"
  | "friendfamous"
  | "friend"
  | "goods"
  | "selection"
  | "explore"
  | "present"
  | "squarecheckfill"
  | "square"
  | "squarecheck"
  | "round"
  | "roundaddfill"
  | "roundadd"
  | "add"
  | "notificationforbidfill"
  | "explorefill"
  | "fold"
  | "game"
  | "redpacket"
  | "selectionfill"
  | "similar"
  | "appreciatefill"
  | "infofill"
  | "info"
  | "forwardfill"
  | "forward"
  | "rechargefill"
  | "recharge"
  | "vipcard"
  | "voice"
  | "voicefill"
  | "friendfavor"
  | "wifi"
  | "share"
  | "wefill"
  | "we"
  | "lightauto"
  | "lightforbid"
  | "lightfill"
  | "camerarotate"
  | "light"
  | "barcode"
  | "flashlightclose"
  | "flashlightopen"
  | "searchlist"
  | "service"
  | "sort"
  | "down"
  | "mobile"
  | "mobilefill"
  | "copy"
  | "countdownfill"
  | "countdown"
  | "noticefill"
  | "notice"
  | "upstagefill"
  | "upstage"
  | "babyfill"
  | "baby"
  | "brandfill"
  | "brand"
  | "choicenessfill"
  | "choiceness"
  | "clothesfill"
  | "clothes"
  | "creativefill"
  | "creative"
  | "female"
  | "keyboard"
  | "male"
  | "newfill"
  | "new"
  | "pullleft"
  | "pullright"
  | "rankfill"
  | "rank"
  | "bad"
  | "cameraadd"
  | "focus"
  | "friendfill"
  | "cameraaddfill"
  | "apps"
  | "paintfill"
  | "paint"
  | "picfill"
  | "refresharrow"
  | "colorlens"
  | "markfill"
  | "mark"
  | "presentfill"
  | "repeal"
  | "album"
  | "peoplefill"
  | "people"
  | "servicefill"
  | "repair"
  | "file"
  | "repairfill"
  | "taoxiaopu"
  | "weixin"
  | "attentionfill"
  | "attention"
  | "commandfill"
  | "command"
  | "communityfill"
  | "community"
  | "read"
  | "calendar"
  | "cut"
  | "magic"
  | "backwardfill"
  | "playfill"
  | "stop"
  | "tagfill"
  | "tag"
  | "group"
  | "all"
  | "backdelete"
  | "hotfill"
  | "hot"
  | "post"
  | "radiobox"
  | "rounddown"
  | "upload"
  | "writefill"
  | "write"
  | "radioboxfill"
  | "punch"
  | "shake"
  | "move"
  | "safe"
  | "activityfill"
  | "crownfill"
  | "crown"
  | "goodsfill"
  | "messagefill"
  | "profilefill"
  | "sound"
  | "sponsorfill"
  | "sponsor"
  | "upblock"
  | "weblock"
  | "weunblock"
  | "my"
  | "myfill"
  | "emojifill"
  | "emojiflashfill"
  | "flashbuyfill"
  | "text"
  | "goodsfavor"
  | "musicfill"
  | "musicforbidfill"
  | "card"
  | "triangledownfill"
  | "triangleupfill"
  | "roundleftfill-copy"
  | "font"
  | "title"
  | "recordfill"
  | "record"
  | "cardboardfill"
  | "cardboard"
  | "formfill"
  | "coin"
  | "cardboardforbid"
  | "circlefill"
  | "circle"
  | "attentionforbid"
  | "attentionforbidfill"
  | "attentionfavorfill"
  | "attentionfavor"
  | "titles"
  | "icloading"
  | "full"
  | "mail"
  | "peoplelist"
  | "goodsnewfill"
  | "goodsnew"
  | "medalfill"
  | "medal"
  | "newsfill"
  | "newshotfill"
  | "newshot"
  | "news"
  | "videofill"
  | "video"
  | "exit"
  | "skinfill"
  | "skin"
  | "moneybagfill"
  | "usefullfill"
  | "usefull"
  | "moneybag"
  | "redpacket_fill"
  | "subscription"
  | "loading1"
  | "github"
  | "global"
  | "settingsfill"
  | "back_android"
  | "expressman"
  | "evaluate_fill"
  | "group_fill"
  | "play_forward_fill"
  | "deliver_fill"
  | "notice_forbid_fill"
  | "fork"
  | "pick"
  | "wenzi"
  | "ellipse"
  | "qr_code"
  | "dianhua"
  | "icon"
  | "loading2"
  | "btn";
export type shadowType = "normal" | "large" | "wrap" | "auto";
export type solidType = "around" | "none" | "top" | "left" | "right" | "bottom";
export type solidBoldType =
  | "bold-around"
  | "none"
  | "bold-top"
  | "bold-left"
  | "bold-right"
  | "bold-bottom";

export interface BaseComponent {
  className?: string | string[] | { [key: string]: boolean };

  style?: CSSProperties;
}
