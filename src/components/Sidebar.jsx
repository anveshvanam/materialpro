import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { TfiDashboard } from "react-icons/tfi";
import { HiOutlineBell } from "react-icons/hi";
import { MdOutlineVerified } from "react-icons/md";
import {
  BsHddStack,
  BsCardText,
  BsGrid1X2,
  BsTable,
  BsLink,
} from "react-icons/bs";
import { AiOutlineForm, AiOutlineUsergroupAdd } from "react-icons/ai";

const SidebarDashboard = () => {
  return (
    <Box className="w-64 shadow-slate-400 shadow-lg min-h-screen">
      <Box
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/dq9eefxnb/image/upload/v1688557121/vtztdvdyra7kplbkhtbv.jpg)",
          height: "130px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <img
          src="http://getdrawings.com/free-icon/cool-profile-icons-70.png"
          className="w-14 h-14 rounded-full m-2"
          alt="profile"
        />
        <Typography
          variant="h7"
          className="w-full bg-black bg-opacity-50 text-white px-4 py-2"
        >
          Steve Rojer
        </Typography>
      </Box>
      <Box
        flexGrow={1}
        className="flex flex-col justify-center items-center  py-4"
      >
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 py-2 bg-[#26c6da] text-white">
          <TfiDashboard className="inline-block mr-4 text-xl" />
          Dashboard
        </button>

        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <HiOutlineBell className="inline-block mr-4 text-xl" />
          Alert
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <MdOutlineVerified className="inline-block mr-4 text-xl" />
          Badges
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <BsHddStack className="inline-block mr-4 text-xl" />
          Buttons
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <BsCardText className="inline-block mr-4 text-xl" />
          Cards
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <BsGrid1X2 className="inline-block mr-4 text-xl" />
          Grid
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <BsTable className="inline-block mr-4 text-xl" />
          Table
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <AiOutlineForm className="inline-block mr-4 text-xl" />
          Forms
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <BsLink className="inline-block mr-4 text-xl" />
          Breadcrumbs
        </button>
        <button className="w-[84%] h-14 font-semibold rounded-md text-left px-4 hover:bg-gray-100 py-2 bg-white text-black">
          <AiOutlineUsergroupAdd className="inline-block mr-4 text-xl" />
          About
        </button>
        <button className="w-[93%] h-10  font-semibold rounded-md text-center px-4 hover:bg-red-600 py-2 bg-red-500 text-white mt-5">
          Upgrade to Pro
        </button>
      </Box>
    </Box>
  );
};

export default SidebarDashboard;
