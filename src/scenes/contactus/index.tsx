import { useRef } from "react";
import { useForm } from "react-hook-form";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import useSectionObserver from "@/hooks/useSectionObserver";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const formWrapperRef = useRef<HTMLDivElement | null>(null);
  const graphicRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  useSectionObserver(sectionRef, SelectedPage.ContactUs, setSelectedPage);
  useGsapFadeIn(headerRef, { offsetY: 50 });
  useGsapFadeIn(formWrapperRef, { offsetY: 40, delay: 0.1 });
  useGsapFadeIn(graphicRef, { offsetY: 40, delay: 0.2 });

  const inputStyles = "w-full rounded-lg bg-primary-300 px-5 py-3 text-white placeholder-white";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <section id="contactus" ref={sectionRef} className="mx-auto w-5/6 pb-32 pt-24">
      <div ref={headerRef} className="md:w-3/5">
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </HText>
        <p className="my-5 text-sm text-gray-700">
          Get in touch with us for membership details, class schedules, or personalised training plans. We're ready to help
          you build the routine that fits your lifestyle.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="md:basis-3/5" ref={formWrapperRef}>
          <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/b997a9eeb431093b4d4f485db1401743e5e2dc4dea8fcf7bd5126803eb0f9d92"
            className="flex flex-col gap-5"
          >
            <div>
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Maximum length is 100 characters."}
                </p>
              )}
            </div>

            <div>
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>

            <div>
              <textarea
                className={`${inputStyles} min-h-[120px]`}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Maximum length is 2000 characters."}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-3 rounded-lg bg-primary-500 px-20 py-3 font-semibold text-white transition hover:bg-secondary-500 hover:text-gray-900"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:basis-2/5" ref={graphicRef}>
          <div className="relative w-full">
            <div className="before:absolute before:-bottom-20 before:-right-10 before:-z-10 before:content-sparkles">
              <img src={ContactUsPageGraphic} alt="Contact us" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
