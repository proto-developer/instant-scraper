import RecentRequestProps from "@/types/Sidebar";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../ui/LogoutButton";
import StartNewScrapBtn from "../ui/StartNewScrapBtn";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[315px] border-r bg-darkLight border-grayBorder p-[32px_16px] h-full  flex flex-col items-center justify-between gap-[62px]">
      {children}
    </div>
  );
};
const RecentRequestsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      id="recentRequestsContainer"
      className="flex flex-col gap-[18px] mt-[26%] md:mt-0 flex-1 max-h-[calc(110dvh-490px)]"
    >
      <h2 className="text-[21px] md:text-[18px] ml-4">Recent Requests</h2>
      <div className="flex flex-col gap-[6px] overflow-auto requestsScollableDiv">
        {children}
      </div>
      <StartNewScrapBtn />
    </div>
  );
};

const RecentRequestCard: React.FC<RecentRequestProps> = ({
  requestId,
  requestTitle,
}) => {
  return (
    <Link
      href={`/request/${requestId}`}
      className="flex items-center gap-[12px] hover:bg-gray-700 p-[12px_16px] rounded-full"
    >
      <Image src="/recentChat.svg" alt="logo" width={20} height={20} />
      <p className="text-[19px] md:text-[16px] text-white line-clamp-1">{requestTitle}</p>
    </Link>
  );
};

const SidebarFooter = () => {
  return (
    <div className="flex flex-col py-[40px] md:py-[20px] gap-[14px] overflow-auto md:gap-[4px] w-full border-t border-grayBorder">
      <div className="flex items-center justify-between gap-[1px] p-[12px_16px]">
        <div className="flex items-center gap-[12px]">
          <Image src="/credits.png" alt="logo" width={20} height={20} className="sm:w-6 md:w-5 lg:w-5"/>
          <p className="text-[21px] md:text-[14px]  text-white">Credits</p>
        </div>
        <p className="text-[21px] md:text-[14px] text-white">10/10</p>
      </div>
      <Link
        href={`/my-account`}
        className="flex items-center gap-[12px] p-[12px_16px] hover:bg-[#282829] rounded-full"
      >
        <Image src="/person.png" alt="logo" width={20} height={20} className="sm:w-6 md:w-5 lg:w-5"/>
        <p className="text-[21px] md:text-[14px] text-white">My Account</p>
      </Link>
      <Link
        href={`/subscription-plan`}
        className="flex items-center gap-[12px] p-[12px_16px] hover:bg-[#282829] rounded-full"
      >
        <Image src="/subscription.png" alt="logo" width={20} height={20} className="sm:w-6 md:w-5 lg:w-5" />
        <p className="text-[21px] md:text-[14px] text-white">Subscription</p>
      </Link>
      <LogoutButton />
    </div>
  );
};

const Sidebar = {
  Root,
  RecentRequestsContainer,
  RecentRequestCard,
  SidebarFooter,
};

export default Sidebar;
