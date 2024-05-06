import { Button } from "@/components/ui/button";
import golf_together_logo from "@/assets/golf_together_logo.svg";

const Header = () => {
  return (
    <section>
      <section className="w-full bg-[#477C15] min-h-[48px] flex flex-wrap items-center justify-center text-white gap-2.5 p-2.5">
        <p> Upcoming Golf Together championship Inter-state competition</p>
        <p className="font-semibold underline underline-offset-2 decoration-1 text-center tracking-[-0.4px]">
          {" "}
          JoinNow{" "}
        </p>
      </section>
      <section className="flex flex-wrap justify-center min-[360px]:justify-between items-start gap-5 px-[2%] mt-2.5">
        <img
          width={92}
          height={47}
          src={golf_together_logo}
          alt="golf_together_logo"
        />

        <section className="flex items-center gap-3 py-2.5">
          {/* <section className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white shadow-md">
            <UserRound color="#477C15" width={20} height={20} />
          </section> */}
          <Button className="w-[78px] h-[32px] font-medium flex justify-center items-center border rounded-full bg-white border-[#477C15] text-[#477C15] hover:bg-[#477C15] hover:text-white text-sm leading-[22px]">
            {" "}
            Sign in
          </Button>
          <Button className="w-[91px] h-[32px] font-medium flex justify-center items-center border rounded-full bg-[#477C15] border-[#477C15] text-white hover:bg-white hover:text-[#477C15] text-sm leading-[22px]">
            {" "}
            Join now
          </Button>
        </section>
      </section>
    </section>
  );
};

export default Header;
