import React from "react";
import NavigationPanel from "../NavigationPanel";

export default function AdminBoard() {
  // const MenuItems = [
  //   { label: "Home", path: "/Home", key: 1, icon: <CgHome /> },
  //   { label: "User List", path: "/UserList", key: 2, icon: <CgUserList /> },
  //   { label: "Mails", path: "/Mails", key: 3, icon: <RiMailSendLine /> },
  //   { label: "Feedback", path: "/Feedback", key: 4, icon: <VscFeedback /> },
  //   { label: "Messages", path: "/Messages", key: 5, icon: <TiMessages /> },
  //   {
  //     label: "Manage",
  //     path: "/Manage",
  //     key: 6,
  //     icon: <MdOutlineManageAccounts />,
  //   },
  //   { label: "Reports", path: "/Reports", key: 7, icon: <TbReport /> },
  //   { label: "Legalities", path: "/Legalities", key: 8, icon: <GoLaw /> },
  //   {
  //     label: "Contact List",
  //     path: "/ContactList",
  //     key: 9,
  //     icon: <MdOutlineContactMail />,
  //   },
  // ];

  return (
    <div>
      <NavigationPanel />
    </div>
    // <div className="container">
    //   <div className="sidebar">
    //     <div className="top-section">
    //       <h1 className="logo">Logo</h1>
    //       <div className="bars">
    //         <GrCompliance />
    //       </div>
    //     </div>
    //     {MenuItems}
    //   </div>
    // </div>
  );
}
