import golf_together_logo from "@/assets/golf_together_logo.svg";
import google_icon from "@/assets/google_icon.svg";
import { CustomInput } from "@/components/custom-input/custom-input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <section className="w-full h-screen xl:h-full grid place-content-center bg-[#EFF8F3]">
      <img
        width={120}
        height={47}
        src={golf_together_logo}
        alt="golf_together_logo"
        className="mx-auto"
      />
      <section className="mt-2.5 shadow-md rounded-2xl bg-white w-full max-w-[470px] mx-auto py-10 px-8 mb-5">
        <h5 className="text-[#1B1818] font-bold text-2xl text-center">
          {" "}
          Register for the competition{" "}
        </h5>
        <Button className="flex items-center justify-center bg-white hover:bg-white border-[1.5px] border-[#D0D5DD] gap-2.5 font-semibold text-base text-center text-[#344054] hover:text-[#344054] rounded-md mt-4 mx-auto w-full">
          {" "}
          <img
            src={google_icon}
            width={20}
            height={20}
            alt="google_icon"
          />{" "}
          Continue with Google{" "}
        </Button>

        <section className="flex items-center justify-center gap-2.5 mt-4">
          <div className="h-0.5 border-b border-b-[#F0F2F5]" />
          <span className="text-[#667185] text-sm font-normal"> OR </span>
          <div className="h-0.5 border-b border-b-[#F0F2F5]" />
        </section>
        <section className="mt-4 flex flex-col gap-4 w-full max-w-[400px]">
          <CustomInput name="fullName" defaultType="text" label="Full name" />
          <CustomInput name="email" defaultType="text" label="Email address" />
          <CustomInput name="password" defaultType="text" label="Password" />

          <Button className="w-full bg-[#468B64] mt-8 py-4 px-6 flex items-center justify-center rounded-lg text-base font-semibold text-white text-center hover:bg-[#468B64] hover:scale-[0.95] transition duration-300">
            {" "}
            Register now{" "}
          </Button>
          {/* <section className="flex-col gap-4">
            <label htmlFor="" className="text-[#101928] font-medium text-sm ">trans
              {" "}
              Full Name{" "}
            </label>
            <Input className="border border-[#D0D5DD] bg-white w-full text-sm text-black placeholder:text-[#98A2B3] focus-visible:ring-transparent h-[42px]" />
          </section> */}
        </section>
      </section>
    </section>
  );
};

export default Login;
