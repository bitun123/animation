import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  return (
    <div className=" w-full bg-[#F3F3F3] p-2 flex  flex-col  gap-2 justify-center items-center cursor-pointer">
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="w-full lg:w-[60%] bg-white rounded-2xl p-4"
      >
        <AccordionItem value="shipping">
          <AccordionTrigger className="text-xl font-semibold ">
            What are your shipping options?
          </AccordionTrigger>
          <AccordionContent>
            We offer standard (5-7 days), express (2-3 days), and overnight
            shipping. Free shipping on international orders.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger className="text-xl font-semibold ">
            What is your return policy?
          </AccordionTrigger>
          <AccordionContent>
            Returns accepted within 30 days. Items must be unused and in
            original packaging. Refunds processed within 5-7 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger className="text-xl font-semibold">
            How can I contact customer support?
          </AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hey">
          <AccordionTrigger className="text-xl font-semibold">
            How can I contact customer support?
          </AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="say">
          <AccordionTrigger className="text-xl font-semibold ">
            what if the sale falls through?
          </AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FaqSection;
